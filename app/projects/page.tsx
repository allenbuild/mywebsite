import CursorGlowLayout from "../CursorGlowLayout";
import SubpageHeader from "../SubpageHeader";
import ProjectGrid from "./ProjectGrid";
import { getProjectEntries } from "./project-entries";

export default function ProjectsPage() {
  const entries = getProjectEntries();

  return (
    <CursorGlowLayout showThemeToggle={false}>
      <main className="min-w-0 w-full max-w-full rounded-2xl bg-[color:var(--surface)] px-5 py-4 shadow-[var(--card-shadow)] sm:px-6 sm:py-5">
        <SubpageHeader title="projects" />
        <ProjectGrid entries={entries} />
      </main>
    </CursorGlowLayout>
  );
}
