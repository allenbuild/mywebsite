import CursorGlowLayout from "../CursorGlowLayout";
import PageCard from "../PageCard";
import SubpageHeader from "../SubpageHeader";

export default function WritingPage() {
  return (
    <CursorGlowLayout showThemeToggle={false}>
      <PageCard header={<SubpageHeader title="writing" />}>
        <p className="mt-2 text-[15px] leading-[1.5] text-[color:var(--muted)]">
          soon-to-be reservoir of my think pieces, rants, shower thoughts, &amp;
          more.
        </p>
      </PageCard>
    </CursorGlowLayout>
  );
}
