export default function CursorGlowLayout({
  children,
  contentClassName,
}: {
  children: React.ReactNode;
  contentClassName?: string;
}) {
  return (
    <div className="page-shell">
      <main className="site-main">
        <div
          className={`letter ${contentClassName ?? ""}`.trim()}
        >
          {children}
        </div>
      </main>
    </div>
  );
}
