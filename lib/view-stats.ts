import { promises as fs } from "fs";
import path from "path";

const REDIS_KEY = "site-view-count";
const REDIS_CITIES_KEY = "site-visitor-cities";
const LOCAL_FILE = path.join(process.cwd(), ".data", "view-count.json");
const LOCAL_CITIES_FILE = path.join(process.cwd(), ".data", "visitor-cities.json");

export type VisitorCityStat = {
  city: string;
  count: number;
};

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

async function redisHashIncr(
  key: string,
  field: string,
  increment = 1,
): Promise<void> {
  const creds = redisCredentials();
  if (!creds) return;

  await fetch(
    `${creds.url}/hincrby/${encodeURIComponent(key)}/${encodeURIComponent(field)}/${increment}`,
    {
      headers: { Authorization: `Bearer ${creds.token}` },
      cache: "no-store",
    },
  );
}

async function redisHashGetAll(
  key: string,
): Promise<Record<string, number> | null> {
  const creds = redisCredentials();
  if (!creds) return null;

  const res = await fetch(`${creds.url}/hgetall/${encodeURIComponent(key)}`, {
    headers: { Authorization: `Bearer ${creds.token}` },
    cache: "no-store",
  });
  if (!res.ok) return null;

  const data = (await res.json()) as { result: string[] | null };
  if (!data.result?.length) return {};

  const cities: Record<string, number> = {};
  for (let i = 0; i < data.result.length; i += 2) {
    const city = data.result[i];
    const count = Number(data.result[i + 1]) || 0;
    if (city) cities[city] = count;
  }
  return cities;
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

async function localGetCities(): Promise<Record<string, number>> {
  try {
    const raw = await fs.readFile(LOCAL_CITIES_FILE, "utf8");
    const parsed = JSON.parse(raw) as { cities?: Record<string, number> };
    return parsed.cities ?? {};
  } catch {
    return {};
  }
}

async function localSetCities(cities: Record<string, number>): Promise<void> {
  await fs.mkdir(path.dirname(LOCAL_CITIES_FILE), { recursive: true });
  await fs.writeFile(LOCAL_CITIES_FILE, JSON.stringify({ cities }));
}

export function normalizeVisitorCity(
  city: string | null | undefined,
): string | null {
  if (!city) return null;

  const trimmed = decodeURIComponent(city).trim();
  if (!trimmed || trimmed === "-" || trimmed.toLowerCase() === "unknown") {
    return null;
  }

  return trimmed;
}

function normalizeVisitorRegion(
  region: string | null | undefined,
): string | null {
  if (!region) return null;

  const trimmed = decodeURIComponent(region).trim().toUpperCase();
  if (!trimmed || trimmed === "-" || trimmed === "UNKNOWN") {
    return null;
  }

  return trimmed;
}

function normalizeVisitorCountry(
  country: string | null | undefined,
): string | null {
  if (!country) return null;

  const trimmed = decodeURIComponent(country).trim().toUpperCase();
  if (!trimmed || trimmed === "-" || trimmed === "UNKNOWN") {
    return null;
  }

  return trimmed;
}

/** Known city-only keys recorded before state/country was added. */
const LEGACY_CITY_REGION: Record<string, string> = {
  Chicago: "IL",
  Glenview: "IL",
  Wheaton: "IL",
  "Santa Clara": "CA",
  Manila: "PH",
};

export function formatVisitorLocation(
  city: string | null | undefined,
  region?: string | null,
  country?: string | null,
): string | null {
  const normalizedCity = normalizeVisitorCity(city);
  if (!normalizedCity) return null;

  const normalizedRegion = normalizeVisitorRegion(region);
  const normalizedCountry = normalizeVisitorCountry(country);

  if (normalizedRegion && normalizedCountry === "US") {
    return `${normalizedCity}, ${normalizedRegion}`;
  }

  if (normalizedCountry && normalizedCountry !== "US") {
    return `${normalizedCity}, ${normalizedCountry}`;
  }

  if (normalizedRegion) {
    return `${normalizedCity}, ${normalizedRegion}`;
  }

  return normalizedCity;
}

function normalizeStoredLocationKey(key: string): string {
  if (key.includes(", ")) return key;

  const legacyRegion = LEGACY_CITY_REGION[key];
  if (legacyRegion) {
    return `${key}, ${legacyRegion}`;
  }

  return key;
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

export async function recordVisitorCity(
  city: string,
  region?: string,
  country?: string,
): Promise<void> {
  const location = formatVisitorLocation(city, region, country);
  if (!location) return;

  if (hasRedis()) {
    await redisHashIncr(REDIS_CITIES_KEY, location);
    return;
  }

  const cities = await localGetCities();
  cities[location] = (cities[location] ?? 0) + 1;
  await localSetCities(cities);
}

export async function getVisitorCityStats(): Promise<VisitorCityStat[]> {
  let cities: Record<string, number> | null = null;

  if (hasRedis()) {
    cities = await redisHashGetAll(REDIS_CITIES_KEY);
  }

  if (cities === null) {
    cities = await localGetCities();
  }

  const aggregated = new Map<string, number>();
  for (const [key, count] of Object.entries(cities)) {
    const location = normalizeStoredLocationKey(key);
    aggregated.set(location, (aggregated.get(location) ?? 0) + count);
  }

  return [...aggregated.entries()]
    .map(([city, count]) => ({ city, count }))
    .sort((a, b) => b.count - a.count || a.city.localeCompare(b.city));
}

export function isViewStatsAuthorized(cookieValue: string | undefined): boolean {
  const secret = process.env.VIEW_COUNTER_SECRET;
  return Boolean(secret && cookieValue === secret);
}

/** Owner IPs — never count these as page views. */
const EXCLUDED_VIEW_IPS = new Set([
  "172.59.186.166",
  "2607:fb90:a08c:e725:fc66:db85:f9b9:6fca",
]);

function normalizeIp(ip: string): string {
  const trimmed = ip.trim().toLowerCase();
  if (trimmed.startsWith("::ffff:")) {
    return trimmed.slice("::ffff:".length);
  }
  return trimmed;
}

export function extractClientIp(
  forwardedFor: string | null,
  realIp: string | null,
  vercelForwardedFor: string | null,
): string | null {
  const candidates = [
    ...(forwardedFor?.split(",") ?? []),
    vercelForwardedFor,
    realIp,
  ];

  for (const candidate of candidates) {
    if (!candidate) continue;
    const ip = normalizeIp(candidate);
    if (ip) return ip;
  }

  return null;
}

export function isExcludedViewIp(ip: string | null | undefined): boolean {
  if (!ip) return false;
  return EXCLUDED_VIEW_IPS.has(normalizeIp(ip));
}
