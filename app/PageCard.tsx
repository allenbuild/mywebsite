export default function PageCard({
  header,
  children,
  headerClassName = "px-5 pt-4 sm:px-6 sm:pt-5",
  bodyClassName = "px-5 pb-4 sm:px-6 sm:pb-5",
  mainClassName = "",
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  headerClassName?: string;
  bodyClassName?: string;
  mainClassName?: string;
}) {
  return (
    <main
      className={`flex max-h-[calc(100dvh-2rem)] w-full min-w-0 max-w-full flex-col overflow-hidden rounded-2xl bg-[color:var(--surface)] shadow-[var(--card-shadow)] sm:max-h-[calc(100dvh-3rem)] ${mainClassName}`}
    >
      <div className={`shrink-0 bg-[color:var(--surface)] ${headerClassName}`}>
        {header}
      </div>
      <div
        className={`page-card-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain ${bodyClassName}`}
      >
        {children}
      </div>
    </main>
  );
}
