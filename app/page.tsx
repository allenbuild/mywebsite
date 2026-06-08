import AgeCounter from "./AgeCounter";
import CursorGlowLayout from "./CursorGlowLayout";
import ThemeToggle from "./ThemeToggle";

export default function Home() {
  return (
    <CursorGlowLayout>
      <main className="w-full rounded-2xl bg-[color:var(--surface)] px-5 py-7 shadow-[var(--card-shadow)] sm:px-8 sm:py-9">
        <header className="flex items-center justify-between gap-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Allen Xu
          </h1>
          <div className="flex flex-col items-end gap-2">
            <ThemeToggle />
            <div className="tabular-nums text-[13px] text-[color:var(--muted-2)]">
              <AgeCounter
                birthDate={new Date("2007-11-10T00:00:00")}
                decimals={8}
              />
            </div>
          </div>
        </header>

        <div className="mt-5 h-px w-full bg-[color:var(--rule)]" />

        <section className="mt-6 space-y-3 text-pretty text-[15px] leading-6 text-[color:var(--muted)]">
          <p className="text-[color:var(--foreground)]">
            <span className="font-semibold">Hi, I&apos;m Allen</span>. I&apos;m an
            incoming freshman at the Wharton
            School at the University of Pennsylvania. Currently interested in embodied AI, assistive
            wearables, economics, and social
            entrepreneurship.
          </p>

          <div className="pt-1">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[color:var(--muted-2)]">
              <a
                href="https://www.linkedin.com/in/allenjxu/"
                target="_blank"
                rel="noreferrer"
                className="text-[color:var(--link)] underline underline-offset-4 hover:text-[color:var(--link-hover)]"
              >
                linkedin
              </a>
            </div>

            <p className="mt-4 text-base font-bold italic [font-family:var(--font-italic)] text-[color:var(--foreground)]">
              currently:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>graduating</li>
              <li>
                backing generational companies from day zero @{" "}
                <a
                  href="https://www.multimodal.ventures/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--link)] underline underline-offset-4 hover:text-[color:var(--link-hover)]"
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
                  className="text-[color:var(--link)] underline underline-offset-4 hover:text-[color:var(--link-hover)]"
                >
                  Build AI
                </a>{" "}
                and{" "}
                <a
                  href="https://www.hf0.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--link)] underline underline-offset-4 hover:text-[color:var(--link-hover)]"
                >
                  HF0
                </a>{" "}
                in San Francisco
              </li>
            </ul>
          </div>

          <div className="pt-1">
            <p className="text-base font-bold italic [font-family:var(--font-italic)] text-[color:var(--foreground)]">
              previously:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                presented an{" "}
                <a
                  href="https://www.eyerobic.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--link)] underline underline-offset-4 hover:text-[color:var(--link-hover)]"
                >
                  assistive device
                </a>{" "}
                for blind athletes <span className="font-semibold">@</span> NASA
                and {" "}
                <a
                  href="https://www.nctv17.org/community-events/naperville-innovators-turn-inspiration-into-invention/?srsltid=AfmBOopQFE8INSe9B-06H2d_L_PF-96b2U1bJH2WtL1eeYjXPUnpT7qq"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--link)] underline underline-offset-4 hover:text-[color:var(--link-hover)]"
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
                  className="text-[color:var(--link)] underline underline-offset-4 hover:text-[color:var(--link-hover)]"
                >
                  youth startup incubator
                </a>{" "}
                with 1k+{"\u00A0"}students, $11k+ raised, and 90+ startups
              </li>
              <li>
                finalist <span className="font-semibold">@</span>{" "}Conrad
                Challenge, Blue Ocean Competition, DECA
                Internationals
              </li>
              <li>
                built{" "}
                <a
                  href="https://www.decademy.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--link)] underline underline-offset-4 hover:text-[color:var(--link-hover)]"
                >
                  edtech startup
                </a>{" "}
                with 30k+{"\u00A0"}users in 79{"\u00A0"}countries
              </li>
              <li>
                wrote economics policy{" "}
                <span className="font-semibold">@</span>{" "}
                <a
                  href="https://www.thehuea.org/general-8"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--link)] underline underline-offset-4 hover:text-[color:var(--link-hover)]"
                >
                  Harvard
                </a>
                ,{" "}
                <a
                  href="https://ijsser.org/2025files/ijsser_10__68.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--link)] underline underline-offset-4 hover:text-[color:var(--link-hover)]"
                >
                  IJSSER
                </a>
                ,  Naperville City Financial Board, &amp; more
              </li>
            </ul>
          </div>

          <div className="pt-1">
            <p className="text-base font-bold italic [font-family:var(--font-italic)] text-[color:var(--foreground)]">
              here & there:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                took{" "}
                <a
                  href="https://www.instagram.com/xuperstrong/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--link)] underline underline-offset-4 hover:text-[color:var(--link-hover)]"
                >
                  daily photos
                </a>{" "}
                with graduating high school seniors (750k+{"\u00A0"}views)
              </li>
              <li>memorized 100 digits of π to win some free apple pie in fifth grade</li>
              <li>
                fell in love with photography, pickup basketball, and my
                goldendoodle Winnie
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-y-4">
            <div className="w-full sm:w-[49%]">
              <div className="aspect-video overflow-hidden rounded-lg border border-[color:var(--rule)]">
                <iframe
                  src="https://www.youtube.com/embed/XeHiBRtfn0o"
                  title="Crossing the English Channel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
            <div className="w-full sm:w-[49%]">
              <div className="aspect-video overflow-hidden rounded-lg border border-[color:var(--rule)]">
                <iframe
                  src="https://player.vimeo.com/video/1136644145"
                  title="Naperville innovators turn inspiration into invention"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-8 border-t border-[color:var(--rule)] pt-4 text-sm text-[color:var(--muted-2)]">
          allenxu@wharton.upenn.edu | allen@multimodal.ventures | allen@build.ai
        </footer>
      </main>
    </CursorGlowLayout>
  );
}