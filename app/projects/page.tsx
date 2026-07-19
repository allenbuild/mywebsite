import CursorGlowLayout from "../CursorGlowLayout";
import PageCard from "../PageCard";
import SubpageHeader from "../SubpageHeader";
import ProjectGrid from "./ProjectGrid";
import { getComingSoonProjects, getProjectEntries } from "./project-entries";

export default function ProjectsPage() {
  const entries = getProjectEntries();
  const comingSoon = getComingSoonProjects();

  return (
    <CursorGlowLayout showThemeToggle={false}>
      <PageCard header={<SubpageHeader title="projects" />}>
        <ProjectGrid entries={entries} comingSoon={comingSoon} />
      </PageCard>
    </CursorGlowLayout>
  );
}
