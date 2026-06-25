import Image from "next/image";
import type { ProjectEntry } from "./project-entries";
import { formatProjectDate } from "./project-entries";

export default function ProjectGrid({ entries }: { entries: ProjectEntry[] }) {
  return (
    <div className="mt-4 grid grid-cols-2 items-stretch gap-2 sm:gap-3">
      {entries.map((project) => (
        <a
          key={project.href}
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="project-card group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-[color:var(--rule)] bg-[color:var(--surface)]"
        >
          <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-[color:var(--canvas)]">
            <Image
              src={project.thumbnail}
              alt=""
              width={project.thumbnailWidth}
              height={project.thumbnailHeight}
              className="project-card-image size-full object-cover"
            />
            <div aria-hidden className="project-card-vignette" />
          </div>

          <div className="flex min-h-0 flex-1 flex-col p-2 sm:p-2.5">
            <h2 className="project-card-title shrink-0 text-[14px] font-semibold leading-snug text-[color:var(--foreground)] sm:text-[15px]">
              {project.title}
            </h2>
            <p className="mt-1 min-h-0 flex-1 text-[11px] leading-[1.45] text-[color:var(--muted)] sm:text-[12px]">
              {project.description}
            </p>
            <div className="mt-3 shrink-0 space-y-3">
              {project.credit ? (
                <p className="text-[10px] italic leading-[1.4] text-[color:var(--muted-2)] sm:text-[11px]">
                  {project.credit}
                </p>
              ) : null}
              <time
                dateTime={project.date}
                className="block text-[10px] leading-none text-[color:var(--link)] sm:text-[11px]"
              >
                {formatProjectDate(project.date)}
              </time>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
