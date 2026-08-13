import HomeBackLink from "./HomeBackLink";

export default function SubpageHeader({
  title,
  titleClassName = "text-[22px] sm:text-[26px]",
  className,
}: {
  title: string;
  titleClassName?: string;
  className?: string;
}) {
  return (
    <header
      className={`flex items-center justify-between gap-4 ${className ?? ""}`.trim()}
    >
      <h1 className={`font-semibold tracking-tight ${titleClassName}`}>
        {title}
      </h1>
      <HomeBackLink />
    </header>
  );
}
