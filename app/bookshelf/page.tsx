import CursorGlowLayout from "../CursorGlowLayout";
import PageShell from "../PageShell";
import SubpageHeader from "../SubpageHeader";

const books = [
  {
    title: "Machines of Loving Grace",
    authors: "Dario Amodei",
    href: "https://darioamodei.com/essay/machines-of-loving-grace",
  },
  {
    title: "The Coming Wave",
    authors: "Mustafa Suleyman",
    href: "https://dn721906.ca.archive.org/0/items/the-coming-wave-by-mustafa-suleyman-michael-bhaskar-pdfread.net/The%20Coming%20Wave%20By%20Mustafa%20SuleymanMichael%20Bhaskar-pdfread.net.pdf",
  },
  {
    title: "Why Nations Fail",
    authors: "Daron Acemoglu and James A. Robinson",
    href: "https://www.amazon.com/Why-Nations-Fail-Origins-Prosperity/dp/0307719227",
  },
  {
    title: "The Giving Tree",
    authors: "Shel Silverstein",
    href: "https://www.amazon.com/Giving-Tree-Shel-Silverstein/dp/0060256656",
  },
] as const;

export default function BookshelfPage() {
  return (
    <CursorGlowLayout contentClassName="max-w-[38rem]">
      <PageShell header={<SubpageHeader title="bookshelf" />}>
        <p className="text-[14px] leading-[1.65] text-[color:var(--foreground)]">
          questions, answers, and everything in between:
        </p>
        <ul className="mt-1.5 list-outside list-disc space-y-1.5 pl-5 text-[14px] leading-[1.65] text-[color:var(--foreground)]">
          {books.map((book) => (
            <li key={book.href}>
              <a href={book.href} target="_blank" rel="noreferrer">
                {book.title}
              </a>{" "}
              by {book.authors}
            </li>
          ))}
        </ul>
      </PageShell>
    </CursorGlowLayout>
  );
}
