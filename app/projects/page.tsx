import CursorGlowLayout from "../CursorGlowLayout";
import PageCard from "../PageCard";
import SubpageHeader from "../SubpageHeader";
import ProjectGrid from "./ProjectGrid";
import { getProjectEntries } from "./project-entries";

export default function ProjectsPage() {
  const entries = getProjectEntries();

  return (
    <CursorGlowLayout showThemeToggle={false}>
      <PageCard header={<SubpageHeader title="projects" />}>
        <ProjectGrid entries={entries} />
      </PageCard>
    </CursorGlowLayout>
  );
}
