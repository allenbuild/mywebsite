import Link from "next/link";
import AgeCounter from "./AgeCounter";
import CursorGlowLayout from "./CursorGlowLayout";

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
  { href: "/media", label: "media" },
  { href: "/writing", label: "writing" },
  { href: "/photography", label: "photography" },
  { href: "/bookshelf", label: "bookshelf" },
] as const;

const navBtnClass =
  "nav-btn flex items-center justify-center rounded-lg px-3 py-2 text-center text-[13px] font-normal transition-opacity sm:px-4 sm:py-2 sm:text-[14px]";

const contactLinkClass = "contact-link transition-colors";

export default function Home() {
  return (
    <CursorGlowLayout>
      <main className="@container min-w-0 w-full max-w-full rounded-2xl bg-[color:var(--surface)] px-5 pt-4 pb-1.5 shadow-[var(--card-shadow)] sm:px-6 sm:pt-5 sm:pb-2">
        <header className="flex items-center justify-between gap-5">
          <h1 className="text-4xl font-semibold tracking-tight">
            Allen Xu
          </h1>
          <div className="flex flex-col items-end pt-9">
            <div className="tabular-nums text-[13px] text-[color:var(--muted-2)]">
              <AgeCounter
                birthDate={new Date("2007-11-10T00:00:00")}
                decimals={8}
              />
            </div>
          </div>
        </header>

        <div className="mt-3 h-px w-full bg-[color:var(--rule)]" />

        <section className="mt-3 min-w-0 space-y-4 text-pretty break-words text-[14px] leading-[1.5] text-[color:var(--muted)]">
          <div>
            <p className="text-[14px] leading-[1.5] text-[color:var(--foreground)] @2xl:text-[13px] @2xl:leading-[1.45]">
              <span className="font-semibold">Hi, I&apos;m Allen</span>. I&apos;m an incoming freshman at the Wharton School at the University of Pennsylvania. Interested in embodied AI, spatial computing, assistive wearables, economics, and more broadly, social entrepreneurship.
            </p>
          </div>

          <div>
            <p className="text-[15px] font-bold italic [font-family:var(--font-italic)] text-[color:var(--foreground)]">
              currently:
            </p>
            <ul className="mt-1 list-inside list-disc space-y-0.5 pl-1">
              <li>graduating</li>
              <li>
                backing tomorrow&apos;s generational companies, today @{" "}
                <a
                  href="https://www.multimodal.ventures/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
                >
                  Multimodal Ventures
                </a>
              </li>
              <li>
                creating ego-exo datasets and the internet for physical AI @{" "}
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
                co-founded{" "}
                <a
                  href="https://www.bizbuzz.it/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
                >
                  youth startup incubator
                </a>{" "}
                with 1k+ students, $11k+ raised, and 90+ startups
              </li>
              <li>
                finalist @ Conrad
                Challenge, Blue Ocean Competition, DECA
                Internationals
              </li>
              <li>
                built{" "}
                <a
                  href="https://www.decademy.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
                >
                  edtech startup
                </a>{" "}
                with 30k+ users in 79 countries
              </li>
              <li>
                wrote economics policy @{" "}
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
                ,  Naperville City Financial Board, and more
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
                with graduating high school seniors (750k+ views)
              </li>
              <li>memorized 100 digits of π to win free pie in fifth grade</li>
              <li>
                fell in love with photography, pickup basketball, and my
                goldendoodle Winnie
              </li>
            </ul>

            <div className="mt-5 grid min-w-0 grid-cols-1 gap-2 @xl:grid-cols-2 @xl:gap-2">
              <div className="aspect-video w-full min-w-0 overflow-hidden rounded-lg border border-[color:var(--rule)] bg-black">
                <iframe
                  src="https://www.youtube.com/embed/XeHiBRtfn0o?playsinline=1"
                  title="Crossing the English Channel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="block h-full w-full border-0"
                />
              </div>
              <div className="aspect-video w-full min-w-0 overflow-hidden rounded-lg border border-[color:var(--rule)] bg-black">
                <iframe
                  src="https://player.vimeo.com/video/1136644145?title=0&byline=0&portrait=0&playsinline=1"
                  title="Naperville innovators turn inspiration into invention"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="block h-full w-full border-0"
                />
              </div>
            </div>
          </div>
        </section>

        <nav
          aria-label="Site sections"
          className="mt-6 mb-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2.5"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={navBtnClass}
            >
              {label}
            </Link>
          ))}
        </nav>

        <footer className="border-t border-[color:var(--rule)] pt-3 pb-0">
          <div className="flex flex-wrap items-center justify-center gap-x-3.5 text-[16px]">
            {contactLinks.map((link, index) => (
              <span key={link.label} className="inline-flex items-center gap-3">
                {index > 0 ? (
                  <span
                    aria-hidden
                    className="text-[color:var(--foreground)]"
                  >
                    ·
                  </span>
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
          <p className="mt-4 text-center text-[11px] text-[color:var(--muted-2)]">
            © 2026 Allen Xu ·{" "}
            <a href="https://allenxu.dev" className={contactLinkClass}>
              allenxu.dev
            </a>
          </p>
        </footer>
      </main>
    </CursorGlowLayout>
  );
}