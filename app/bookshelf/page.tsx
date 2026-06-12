import Link from "next/link";
import CursorGlowLayout from "../CursorGlowLayout";

const books = [
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
    <CursorGlowLayout>
      <main className="min-w-0 w-full max-w-full rounded-2xl bg-[color:var(--surface)] px-5 py-4 shadow-[var(--card-shadow)] sm:px-6 sm:py-5">
        <Link
          href="/"
          className="text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
        >
          ← home
        </Link>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">bookshelf</h1>

        <section className="mt-4 min-w-0 text-pretty break-words text-[14px] leading-[1.5] text-[color:var(--muted)]">
          <p className="text-[15px] font-bold italic [font-family:var(--font-italic)] text-[color:var(--foreground)]">
            Questions, answers, and everything in between:
          </p>
          <ul className="mt-1 list-inside list-disc space-y-0.5 pl-1">
            {books.map((book) => (
              <li key={book.href}>
                <a
                  href={book.href}
                  target="_blank"
                  rel="noreferrer"
                  className="italic text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
                >
                  {book.title}
                </a>{" "}
                by {book.authors}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </CursorGlowLayout>
  );
}
