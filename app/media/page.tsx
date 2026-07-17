import CursorGlowLayout from "../CursorGlowLayout";
import PageCard from "../PageCard";
import SubpageHeader from "../SubpageHeader";
import MediaTimeline from "./MediaTimeline";

export default function MediaPage() {
  return (
    <CursorGlowLayout showThemeToggle={false}>
      <PageCard header={<SubpageHeader title="media" />}>
        <MediaTimeline />
      </PageCard>
    </CursorGlowLayout>
  );
}
