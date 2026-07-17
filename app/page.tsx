import Link from "next/link";
import CursorGlowLayout from "./CursorGlowLayout";
import PageCard from "./PageCard";

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
  "nav-btn flex items-center justify-center rounded-md px-2.5 py-1.5 text-center text-[12px] font-normal text-[color:var(--nav-btn-fg)] visited:text-[color:var(--nav-btn-fg)] hover:!bg-[color:var(--link)] hover:!text-white visited:hover:!text-white sm:px-3 sm:py-1.5 sm:text-[13px]";

const contactLinkClass = "contact-link";

export default function Home() {
  return (
    <CursorGlowLayout contentClassName="max-w-[38rem]">
      <PageCard
        sizeToContent
        mainClassName="@container"
        headerClassName="px-5 pt-3 sm:px-6 sm:pt-3.5"
        bodyClassName="px-5 pb-1.5 sm:px-6 sm:pb-2"
        header={
          <header className="flex items-center justify-between gap-4">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Allen Xu
            </h1>
          </header>
        }
      >
        <div className="mt-2.5 h-px w-full bg-[color:var(--rule)]" />

        <section className="mt-2.5 min-w-0 space-y-3 text-pretty break-words text-[14px] leading-[1.5] text-[color:var(--muted)]">
          <div>
            <p className="text-[14px] leading-[1.5] text-[color:var(--foreground)] @2xl:text-[13px] @2xl:leading-[1.45]">
              <span className="font-semibold">hey! i&apos;m allen.</span>{" "}
              i&apos;m an incoming freshman at Wharton. i&apos;m interested in
              physical ai, assistive wearables, and early-stage vc.
            </p>
          </div>

          <div>
            <p className="text-[15px] font-bold italic [font-family:var(--font-italic)] text-[color:var(--foreground)]">
              currently:
            </p>
            <ul className="mt-1 list-inside list-disc space-y-0.5 pl-1">
              <li>
                building the internet for physical ai @{" "}
                <a
                  href="http://build.ai/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
                >
                  Build AI
                </a>{" "}
                and{" "}
                <a
                  href="https://www.hf0.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
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
                  className="text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
                >
                  Multimodal Ventures
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[15px] font-bold italic [font-family:var(--font-italic)] text-[color:var(--foreground)]">
              previously:
            </p>
            <ul className="mt-1 list-inside list-disc space-y-0.5 pl-1">
              <li>
                presented a{" "}
                <a
                  href="https://www.eyerobic.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
                >
                  haptic wearable
                </a>{" "}
                for blind athletes @ NASA
                and {" "}
                <a
                  href="https://www.nctv17.org/community-events/naperville-innovators-turn-inspiration-into-invention/?srsltid=AfmBOopQFE8INSe9B-06H2d_L_PF-96b2U1bJH2WtL1eeYjXPUnpT7qq"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
                >
                  NBC 5 Chicago
                </a>{" "} 
              </li>
              <li>
                built a{" "}
                <a
                  href="https://www.bizbuzz.it/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
                >
                  youth entrepreneurship incubator
                </a>{" "}
                with 1k+ students
              </li>
              <li>
                finalist @ Conrad
                Challenge, Blue Ocean Competition, DECA
                Internationals
              </li>
              <li>
                built an{" "}
                <a
                  href="https://www.decademy.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
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
                  className="text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
                >
                  Harvard
                </a>
                ,{" "}
                <a
                  href="https://ijsser.org/2025files/ijsser_10__68.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
                >
                  IJSSER
                </a>
                , University of Michigan, and more
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[15px] font-bold italic [font-family:var(--font-italic)] text-[color:var(--foreground)]">
              here & there:
            </p>
            <ul className="mt-1 list-inside list-disc space-y-0.5 pl-1">
              <li>
                took{" "}
                <a
                  href="https://www.instagram.com/xuperstrong/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
                >
                  daily photos
                </a>{" "}
                with strangers throughout senior year of high school
              </li>
              <li>
                fell in love with photography, pickup basketball, and my
                goldendoodle Winnie
              </li>
            </ul>
          </div>
        </section>

        <nav
          aria-label="Site sections"
          className="mt-4 mb-4 grid grid-cols-2 gap-1.5 sm:flex sm:flex-wrap sm:gap-2"
        >
          {navLinks.map(({ href, label, className }) => (
            <Link key={href} href={href} className={`${navBtnClass} ${className}`}>
              {label}
            </Link>
          ))}
        </nav>

        <footer className="w-full border-t border-[color:var(--rule)] pt-3 pb-0">
          <div className="flex w-full flex-wrap items-center justify-center gap-x-4 text-[15px]">
            {contactLinks.map((link, index) => (
              <span key={link.label} className="inline-flex items-center gap-x-4">
                {index > 0 ? (
                  <span aria-hidden className="contact-separator" />
                ) : null}
                <a
                  href={link.href}
                  className={contactLinkClass}
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
      </PageCard>
    </CursorGlowLayout>
  );
}