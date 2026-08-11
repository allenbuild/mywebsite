import Link from "next/link";
import CursorGlowLayout from "./CursorGlowLayout";
import PageShell from "./PageShell";

const contactLinks = [
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=allenxu@wharton.upenn.edu",
    label: "email",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/allenjxu/",
    label: "linkedin",
    external: true,
  },
  { href: "https://x.com/allenxtech", label: "x", external: true },
] as const;

const navLinks = [
  {
    href: "/projects",
    label: "projects",
    className: "order-1",
  },
  {
    href: "/media",
    label: "media",
    className: "order-2",
  },
  {
    href: "/photography",
    label: "photography",
    className: "order-4 sm:order-3",
  },
  {
    href: "/bookshelf",
    label: "bookshelf",
    className: "order-3 sm:order-4",
  },
] as const;

const navBtnClass =
  "nav-btn flex items-center justify-center rounded-md px-2.5 py-1.5 text-center text-[12px] font-normal text-[color:var(--nav-btn-fg)] visited:text-[color:var(--nav-btn-fg)] sm:px-3 sm:py-1.5 sm:text-[13px]";

export default function Home() {
  return (
    <CursorGlowLayout contentClassName="max-w-[40rem]">
      <PageShell>
        <header>
          <h1 className="text-[1.75rem] font-semibold tracking-tight sm:text-[2rem]">
            Allen Xu
          </h1>
        </header>

        <section className="mt-5 min-w-0 space-y-5 break-words text-[15px] leading-[1.65] text-[color:var(--muted)]">
          <p className="text-[15px] leading-[1.65] text-[color:var(--foreground)]">
            <span className="font-semibold">hey! i&apos;m allen,</span> and
            i&apos;m an incoming freshman at Wharton. i&apos;m interested in
            physical ai, assistive wearables, and early-stage vc.
          </p>

          <div>
            <p className="text-[15px] font-semibold text-[color:var(--foreground)]">
              currently:
            </p>
            <ul className="mt-1.5 list-outside list-disc space-y-1 pl-5">
              <li>
                building the internet for physical ai @{" "}
                <a
                  href="http://build.ai/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Build AI
                </a>{" "}
                and{" "}
                <a
                  href="https://www.hf0.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  HF0
                </a>
              </li>
              <li>
                backing brilliant founders @{" "}
                <a
                  href="https://www.multimodal.ventures/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Multimodal Ventures
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[15px] font-semibold text-[color:var(--foreground)]">
              previously:
            </p>
            <ul className="mt-1.5 list-outside list-disc space-y-1 pl-5">
              <li>
                presented a{" "}
                <a
                  href="https://www.eyerobic.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  haptic wearable
                </a>{" "}
                for blind athletes @ NASA and{" "}
                <a
                  href="https://www.nctv17.org/community-events/naperville-innovators-turn-inspiration-into-invention/?srsltid=AfmBOopQFE8INSe9B-06H2d_L_PF-96b2U1bJH2WtL1eeYjXPUnpT7qq"
                  target="_blank"
                  rel="noreferrer"
                >
                  NBC 5 Chicago
                </a>
              </li>
              <li>
                built a{" "}
                <a
                  href="https://www.bizbuzz.it/"
                  target="_blank"
                  rel="noreferrer"
                >
                  youth entrepreneurship incubator
                </a>{" "}
                with 1k+ students
              </li>
              <li>
                built an{" "}
                <a
                  href="https://www.decademy.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  edtech startup
                </a>{" "}
                with 30k+ users
              </li>
              <li>
                wrote econ policy @{" "}
                <a
                  href="https://www.thehuea.org/general-8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Harvard
                </a>
                ,{" "}
                <a
                  href="https://ijsser.org/2025files/ijsser_10__68.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  IJSSER
                </a>
                , University of Michigan, and more
              </li>
              <li>
                finalist @ Conrad Challenge, Blue Ocean Competition, DECA
                Internationals
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[15px] font-semibold text-[color:var(--foreground)]">
              here & there:
            </p>
            <ul className="mt-1.5 list-outside list-disc space-y-1 pl-5">
              <li>
                took{" "}
                <a
                  href="https://www.instagram.com/xuperstrong/"
                  target="_blank"
                  rel="noreferrer"
                >
                  daily photos
                </a>{" "}
                with strangers throughout senior year of high school
              </li>
              <li>
                fell in love with photography, pickup basketball, and my dog
                Winnie
              </li>
            </ul>
          </div>
        </section>

        <nav
          aria-label="Site sections"
          className="mt-8 mb-8 grid grid-cols-2 gap-1.5 sm:flex sm:flex-wrap sm:gap-2"
        >
          {navLinks.map(({ href, label, className }) => (
            <Link
              key={href}
              href={href}
              className={`${navBtnClass} ${className}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <footer className="flex w-full justify-start">
          <div className="inline-flex max-w-full flex-wrap items-center gap-x-3 text-[14px]">
            {contactLinks.map((link, index) => (
              <span
                key={link.label}
                className="inline-flex items-center gap-x-3"
              >
                {index > 0 ? (
                  <span aria-hidden className="contact-separator" />
                ) : null}
                <a
                  href={link.href}
                  className="contact-link"
                  {...("external" in link
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        </footer>
      </PageShell>
    </CursorGlowLayout>
  );
}
