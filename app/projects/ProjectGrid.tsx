import Image from "next/image";
import type { ComingSoonProject, ProjectEntry } from "./project-entries";
import { formatProjectDate } from "./project-entries";

export default function ProjectGrid({
  entries,
  comingSoon = [],
}: {
  entries: ProjectEntry[];
  comingSoon?: ComingSoonProject[];
}) {
  return (
    <div className="mt-6 space-y-8">
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
                <h2 className="project-row-title text-[15px] font-semibold leading-snug text-[color:var(--foreground)] sm:text-[16px]">
                  {project.title}
                </h2>
                <p className="mt-1 text-[13px] leading-[1.5] text-[color:var(--muted)] sm:text-[14px]">
                  {project.description}
                </p>
                {project.credit ? (
                  <p className="mt-1.5 text-[12px] italic leading-[1.4] text-[color:var(--muted-2)]">
                    {project.credit}
                  </p>
                ) : null}
                <time
                  dateTime={project.date}
                  className="mt-1.5 block text-[12px] leading-none text-[color:var(--media-accent)]"
                >
                  {formatProjectDate(project.date)}
                </time>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {comingSoon.length > 0 ? (
        <section>
          <h2 className="text-[15px] font-semibold text-[color:var(--foreground)]">
            coming soon:
          </h2>
          <ul className="mt-3 space-y-4">
            {comingSoon.map((project) => (
              <li key={project.title} className="min-w-0">
                <h3 className="text-[15px] font-semibold leading-snug text-[color:var(--foreground)]">
                  {project.title}
                </h3>
                <p className="mt-1 text-[13px] leading-[1.5] text-[color:var(--muted)] sm:text-[14px]">
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
