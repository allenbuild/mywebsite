import Image from "next/image";
import type { ProjectEntry } from "./project-entries";
import { formatProjectDate } from "./project-entries";

export default function ProjectGrid({ entries }: { entries: ProjectEntry[] }) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
      {entries.map((project) => (
        <a
          key={project.href}
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="project-card group flex min-w-0 flex-col overflow-hidden rounded-md border border-[color:var(--rule)] bg-[color:var(--surface)] transition-colors hover:border-[color:var(--link)]"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--canvas)]">
            <Image
              src={project.thumbnail}
              alt=""
              width={1024}
              height={768}
              className="size-full object-cover transition-opacity group-hover:opacity-90"
              sizes="(max-width: 640px) 45vw, 240px"
            />
          </div>

          <div className="flex min-h-0 flex-1 flex-col gap-1 p-2 sm:gap-1.5 sm:p-2.5">
            <h2 className="text-[13px] font-semibold leading-snug text-[color:var(--foreground)] sm:text-[14px]">
              {project.title}
            </h2>
            <p className="text-[11px] leading-[1.45] text-[color:var(--muted)] sm:text-[12px]">
              {project.description}
            </p>
            <time
              dateTime={project.date}
              className="mt-auto pt-1 text-[10px] leading-none text-[color:var(--muted-2)] sm:text-[11px]"
            >
              {formatProjectDate(project.date)}
            </time>
          </div>
        </a>
      ))}
    </div>
  );
}
