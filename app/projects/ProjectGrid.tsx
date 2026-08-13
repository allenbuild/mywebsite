import Image from "next/image";
import type { ProjectEntry } from "./project-entries";
import { formatProjectDate } from "./project-entries";

function ProjectRow({ project }: { project: ProjectEntry }) {
  const className =
    "project-row group grid grid-cols-[5.5rem_minmax(0,1fr)] gap-x-3 sm:grid-cols-[7.25rem_minmax(0,1fr)] sm:gap-x-4";

  const body = (
    <>
      <div className="relative mt-1.5 aspect-square overflow-hidden rounded-lg bg-[color:var(--rule)] sm:mt-2">
        <Image
          src={project.thumbnail}
          alt=""
          width={project.thumbnailWidth}
          height={project.thumbnailHeight}
          className="size-full object-cover"
          style={{
            ...(project.objectPosition
              ? { objectPosition: project.objectPosition }
              : {}),
            ...(project.thumbnailScale
              ? { transform: `scale(${project.thumbnailScale})` }
              : {}),
          }}
        />
      </div>

      <div className="min-w-0">
        <h2 className="project-row-title text-[13px] font-bold italic leading-snug [font-family:var(--font-italic)] text-[color:var(--foreground)]">
          {project.title}
        </h2>
        <p className="mt-1 text-[11px] leading-[1.65] text-[color:var(--foreground)]">
          {project.description}
        </p>
        {project.credit ? (
          <p className="mt-1.5 text-[11px] italic leading-[1.4] text-[color:var(--muted-2)]">
            {project.credit}
          </p>
        ) : null}
        <div className="mt-1.5 flex flex-wrap items-center gap-x-2 text-[11px] leading-none">
          <time
            dateTime={project.date}
            className="text-[color:var(--link)]"
          >
            {formatProjectDate(project.date)}
          </time>
          {project.highlight ? (
            <>
              <span aria-hidden className="contact-separator" />
              <span className="text-[color:var(--project-highlight)]">
                {project.highlight}
              </span>
            </>
          ) : null}
        </div>
      </div>
    </>
  );

  if (!project.href) {
    return <div className={className}>{body}</div>;
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {body}
    </a>
  );
}

export default function ProjectGrid({ entries }: { entries: ProjectEntry[] }) {
  return (
    <ul className="space-y-7">
      {entries.map((project) => (
        <li key={project.title}>
          <ProjectRow project={project} />
        </li>
      ))}
    </ul>
  );
}
