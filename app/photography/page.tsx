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
        header={
          <SubpageHeader title="photography" />
        }
      >
        <PhotoGallery entries={entries} />
      </PageCard>
    </CursorGlowLayout>
  );
}
