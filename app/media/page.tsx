import CursorGlowLayout from "../CursorGlowLayout";
import PageCard from "../PageCard";
import SubpageHeader from "../SubpageHeader";
import MediaTimeline from "./MediaTimeline";

export default function MediaPage() {
  return (
    <CursorGlowLayout showThemeToggle={false}>
      <PageCard
        header={<SubpageHeader title="media" />}
        headerClassName="px-4 pt-4 sm:px-5 sm:pt-5"
        bodyClassName="px-4 pb-4 sm:px-5 sm:pb-5"
      >
        <MediaTimeline />
      </PageCard>
    </CursorGlowLayout>
  );
}
