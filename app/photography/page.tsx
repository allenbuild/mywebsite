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
        headerClassName="px-5 pt-4 pb-0 sm:px-6 sm:pt-5 sm:pb-0"
        bodyClassName="px-2.5 pb-4 sm:px-3 sm:pb-5"
      >
        <PhotoGallery entries={entries} />
      </PageCard>
    </CursorGlowLayout>
  );
}
