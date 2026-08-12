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
    <header className={`space-y-5 ${className ?? ""}`.trim()}>
      <HomeBackLink />
      <h1 className={`font-semibold tracking-tight ${titleClassName}`}>
        {title}
      </h1>
    </header>
  );
}
