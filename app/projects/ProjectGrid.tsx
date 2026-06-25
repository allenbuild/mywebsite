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
          className="project-card group flex min-w-0 flex-col overflow-hidden rounded-md border border-[color:var(--rule)] bg-[color:var(--surface)]"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--canvas)]">
            <Image
              src={project.thumbnail}
              alt=""
              width={project.thumbnailWidth}
              height={project.thumbnailHeight}
              className="project-card-image size-full object-cover"
            />
          </div>

          <div className="flex min-h-0 flex-1 flex-col p-2 sm:p-2.5">
            <h2 className="project-card-title text-[13px] font-semibold leading-snug text-[color:var(--foreground)] sm:text-[14px]">
              {project.title}
            </h2>
            <p className="mt-1 text-[11px] leading-[1.45] text-[color:var(--muted)] sm:text-[12px]">
              {project.description}
            </p>
            {project.credit ? (
              <p className="my-1.5 text-[9px] italic leading-[1.4] [font-family:var(--font-italic)] text-[color:var(--muted-2)] sm:text-[10px]">
                {project.credit}
              </p>
            ) : null}
            <time
              dateTime={project.date}
              className="mt-auto text-[10px] leading-none text-[color:var(--muted-2)] sm:text-[11px]"
            >
              {formatProjectDate(project.date)}
            </time>
          </div>
        </a>
      ))}
    </div>
  );
}
