import CursorGlowLayout from "../CursorGlowLayout";
import PageShell from "../PageShell";
import SubpageHeader from "../SubpageHeader";
import PhotoGallery from "./PhotoGallery";
import { getPhotoEntries } from "./photo-entries";

export default function PhotographyPage() {
  const entries = getPhotoEntries();

  return (
    <CursorGlowLayout contentClassName="max-w-[39rem]">
      <PageShell header={<SubpageHeader title="photography" />}>
        <PhotoGallery entries={entries} />
      </PageShell>
    </CursorGlowLayout>
  );
}
