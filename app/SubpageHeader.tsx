import HomeBackLink from "./HomeBackLink";

export default function SubpageHeader({
  title,
  titleClassName = "text-[1.65rem] sm:text-3xl",
  className,
}: {
  title: string;
  titleClassName?: string;
  className?: string;
}) {
  return (
    <header className={className}>
      <HomeBackLink />
      <h1 className={`mt-5 font-semibold tracking-tight ${titleClassName}`}>
        {title}
      </h1>
    </header>
  );
}
