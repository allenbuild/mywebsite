import Image from "next/image";
import type { ProjectEntry } from "./project-entries";
import { formatProjectDate } from "./project-entries";

export default function ProjectGrid({ entries }: { entries: ProjectEntry[] }) {
  return (
    <ul className="space-y-7">
      {entries.map((project) => (
        <li key={project.href}>
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="project-row group grid grid-cols-[5.5rem_minmax(0,1fr)] gap-x-3 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-x-4"
          >
            <div className="relative aspect-square overflow-hidden bg-[color:var(--rule)]">
              <Image
                src={project.thumbnail}
                alt=""
                width={project.thumbnailWidth}
                height={project.thumbnailHeight}
                className="size-full object-cover"
                style={
                  project.objectPosition
                    ? { objectPosition: project.objectPosition }
                    : undefined
                }
              />
            </div>

            <div className="min-w-0">
              <h2 className="project-row-title text-[14px] font-semibold leading-snug text-[color:var(--foreground)]">
                {project.title}
              </h2>
              <p className="mt-1 text-[14px] leading-[1.65] text-[color:var(--foreground)]">
                {project.description}
              </p>
              {project.credit ? (
                <p className="mt-1.5 text-[14px] italic leading-[1.65] text-[color:var(--foreground)]">
                  {project.credit}
                </p>
              ) : null}
              <time
                dateTime={project.date}
                className="mt-1.5 block text-[14px] leading-none text-[color:var(--media-accent)]"
              >
                {formatProjectDate(project.date)}
              </time>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
