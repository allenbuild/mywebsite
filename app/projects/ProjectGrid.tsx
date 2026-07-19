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
    <div className="mt-3 space-y-5">
      <div className="grid grid-cols-2 items-stretch gap-2 sm:gap-3">
        {entries.map((project) => (
          <a
            key={project.href}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="project-card group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-[color:var(--rule)] bg-[color:var(--surface)]"
          >
            <div className="relative aspect-[16/10] shrink-0 overflow-hidden border-b border-[color:var(--rule)] bg-[color:var(--canvas)]">
              <Image
                src={project.thumbnail}
                alt=""
                width={project.thumbnailWidth}
                height={project.thumbnailHeight}
                className="project-card-image size-full object-cover"
                style={
                  project.objectPosition
                    ? { objectPosition: project.objectPosition }
                    : undefined
                }
              />
              <div aria-hidden className="project-card-vignette" />
            </div>

            <div className="flex min-h-0 flex-1 flex-col p-1.5 sm:p-2">
              <h2 className="project-card-title shrink-0 text-[13px] font-semibold leading-snug text-[color:var(--foreground)] sm:text-[14px]">
                {project.title}
              </h2>
              <p className="mt-0.5 min-h-0 flex-1 text-[10px] leading-[1.4] text-[color:var(--muted)] sm:text-[11px]">
                {project.description}
              </p>
              <div className="mt-2 shrink-0 space-y-1.5">
                {project.credit ? (
                  <p className="text-[9px] italic leading-[1.35] text-[color:var(--muted-2)] sm:text-[10px]">
                    {project.credit}
                  </p>
                ) : null}
                <time
                  dateTime={project.date}
                  className="block text-[9px] leading-none text-[color:var(--link)] sm:text-[10px]"
                >
                  {formatProjectDate(project.date)}
                </time>
              </div>
            </div>
          </a>
        ))}
      </div>

      {comingSoon.length > 0 ? (
        <section>
          <h2 className="text-[14px] font-bold italic [font-family:var(--font-italic)] text-[color:var(--foreground)]">
            coming soon:
          </h2>
          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
            {comingSoon.map((project) => (
              <div
                key={project.title}
                className="flex min-w-0 flex-col rounded-xl border border-[color:var(--rule)] bg-[color:var(--surface)] p-2 sm:p-2.5"
              >
                <h3 className="text-[13px] font-semibold leading-snug text-[color:var(--foreground)] sm:text-[14px]">
                  {project.title}
                </h3>
                <p className="mt-1 text-[10px] leading-[1.4] text-[color:var(--muted)] sm:text-[11px]">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
