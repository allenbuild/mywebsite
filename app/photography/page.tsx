import CursorGlowLayout from "../CursorGlowLayout";
import PageCard from "../PageCard";
import SubpageHeader from "../SubpageHeader";
import PhotoGallery from "./PhotoGallery";
import { getPhotoEntries } from "./photo-entries";

export default function PhotographyPage() {
  const entries = getPhotoEntries();

  return (
    <CursorGlowLayout showThemeToggle={false}>
      <PageCard
        header={<SubpageHeader title="photography" />}
        bodyClassName="px-2.5 pb-4 sm:px-3 sm:pb-5"
      >
        <PhotoGallery entries={entries} />
      </PageCard>
    </CursorGlowLayout>
  );
}
