export default function PageShell({
  header,
  children,
  headerClassName = "",
  bodyClassName = "",
  mainClassName = "",
}: {
  header?: React.ReactNode;
  children: React.ReactNode;
  headerClassName?: string;
  bodyClassName?: string;
  mainClassName?: string;
}) {
  return (
    <main className={`w-full min-w-0 ${mainClassName}`}>
      {header ? <div className={headerClassName}>{header}</div> : null}
      <div className={bodyClassName}>{children}</div>
    </main>
  );
}
