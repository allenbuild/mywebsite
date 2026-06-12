import { promises as fs } from "fs";
import path from "path";

const REDIS_KEY = "site-view-count";
const LOCAL_FILE = path.join(process.cwd(), ".data", "view-count.json");

function redisCredentials() {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return { url, token };
}

function hasRedis() {
  return redisCredentials() !== null;
}

async function redisGet(key: string): Promise<number | null> {
  const creds = redisCredentials();
  if (!creds) return null;

  const res = await fetch(`${creds.url}/get/${encodeURIComponent(key)}`, {
    headers: { Authorization: `Bearer ${creds.token}` },
    cache: "no-store",
  });
  if (!res.ok) return null;

  const data = (await res.json()) as { result: string | number | null };
  if (data.result === null) return 0;
  return Number(data.result) || 0;
}

async function redisIncr(key: string): Promise<number | null> {
  const creds = redisCredentials();
  if (!creds) return null;

  const res = await fetch(`${creds.url}/incr/${encodeURIComponent(key)}`, {
    headers: { Authorization: `Bearer ${creds.token}` },
    cache: "no-store",
  });
  if (!res.ok) return null;

  const data = (await res.json()) as { result: number };
  return data.result;
}

async function localGet(): Promise<number> {
  try {
    const raw = await fs.readFile(LOCAL_FILE, "utf8");
    const parsed = JSON.parse(raw) as { count?: number };
    return parsed.count ?? 0;
  } catch {
    return 0;
  }
}

async function localSet(count: number): Promise<number> {
  await fs.mkdir(path.dirname(LOCAL_FILE), { recursive: true });
  await fs.writeFile(LOCAL_FILE, JSON.stringify({ count }));
  return count;
}

export async function getViewCount(): Promise<number> {
  if (hasRedis()) {
    const count = await redisGet(REDIS_KEY);
    if (count !== null) return count;
  }
  return localGet();
}

export async function incrementViewCount(): Promise<number> {
  if (hasRedis()) {
    const count = await redisIncr(REDIS_KEY);
    if (count !== null) return count;
  }
  const count = (await localGet()) + 1;
  return localSet(count);
}

export function isViewStatsAuthorized(cookieValue: string | undefined): boolean {
  const secret = process.env.VIEW_COUNTER_SECRET;
  return Boolean(secret && cookieValue === secret);
}
