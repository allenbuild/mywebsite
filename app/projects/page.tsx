import CursorGlowLayout from "../CursorGlowLayout";
import PageShell from "../PageShell";
import SubpageHeader from "../SubpageHeader";
import ProjectGrid from "./ProjectGrid";
import { getProjectEntries } from "./project-entries";

export default function ProjectsPage() {
  const entries = getProjectEntries();

  return (
    <CursorGlowLayout contentClassName="max-w-[621px]">
      <PageShell header={<SubpageHeader title="projects" />}>
        <ProjectGrid entries={entries} />
      </PageShell>
    </CursorGlowLayout>
  );
}
