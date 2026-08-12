import HomeBackLink from "./HomeBackLink";

export default function SubpageHeader({
  title,
  titleClassName = "text-[1.5rem] sm:text-[1.75rem]",
  className,
}: {
  title: string;
  titleClassName?: string;
  className?: string;
}) {
  return (
    <header
      className={`flex items-end justify-between gap-4 ${className ?? ""}`.trim()}
    >
      <h1 className={`font-semibold tracking-tight ${titleClassName}`}>
        {title}
      </h1>
      <HomeBackLink />
    </header>
  );
}
