import HomeBackLink from "./HomeBackLink";

export default function SubpageHeader({
  title,
  titleClassName = "",
  className,
}: {
  title: string;
  titleClassName?: string;
  className?: string;
}) {
  return (
    <header
      className={`mb-[var(--flow-gap)] flex items-baseline justify-between gap-4 ${className ?? ""}`.trim()}
    >
      <h1 className={titleClassName}>{title}</h1>
      <HomeBackLink />
    </header>
  );
}
