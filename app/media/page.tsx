import CursorGlowLayout from "../CursorGlowLayout";
import PageShell from "../PageShell";
import SubpageHeader from "../SubpageHeader";
import MediaTimeline from "./MediaTimeline";

export default function MediaPage() {
  return (
    <CursorGlowLayout contentClassName="max-w-[37rem]">
      <PageShell header={<SubpageHeader title="media" />}>
        <MediaTimeline />
      </PageShell>
    </CursorGlowLayout>
  );
}
