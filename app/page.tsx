import AgeCounter from "./AgeCounter";
import CursorGlowLayout from "./CursorGlowLayout";
import ThemeToggle from "./ThemeToggle";

export default function Home() {
  return (
    <CursorGlowLayout>
      <main className="@container w-full rounded-2xl bg-[color:var(--surface)] px-4 py-4 shadow-[var(--card-shadow)] sm:px-5 sm:py-5">
        <header className="flex items-center justify-between gap-5">
          <h1 className="text-4xl font-semibold tracking-tight">
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

        <div className="mt-3 h-px w-full bg-[color:var(--rule)]" />

        <section className="mt-3 space-y-1 text-pretty text-[14px] leading-[1.5] text-[color:var(--muted)]">
          <p className="text-[14px] leading-[1.5] text-[color:var(--foreground)] @2xl:text-[13px] @2xl:leading-[1.45]">
            <span className="@2xl:block">
              <span className="font-semibold">Hi, I&apos;m Allen</span>. I&apos;m an incoming freshman at the Wharton School at the{" "}
              <span className="whitespace-nowrap">University of Pennsylvania</span>.
            </span>{" "}
            <span className="@2xl:block">
              Currently interested in embodied AI, spatial computing, assistive wearables, economics, and more broadly, social entrepreneurship.
            </span>
          </p>

          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[color:var(--muted-2)]">
              <a
                href="https://www.linkedin.com/in/allenjxu/"
                target="_blank"
                rel="noreferrer"
                className="text-[color:var(--link)] hover:text-[color:var(--link-hover)]"
              >
                linkedin
              </a>
            </div>

            <p className="mt-2 text-[15px] font-bold italic [font-family:var(--font-italic)] text-[color:var(--foreground)]">
              currently:
            </p>
            <ul className="mt-1 list-disc space-y-0.5 pl-5">
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
            <ul className="mt-1 list-disc space-y-0.5 pl-5">
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
                with 1k+{"\u00A0"}students, $11k+ raised, and 90+ startups
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
                with 30k+{"\u00A0"}users in 79{"\u00A0"}countries
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
                ,  Naperville City Financial Board, &amp; more
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[15px] font-bold italic [font-family:var(--font-italic)] text-[color:var(--foreground)]">
              here & there:
            </p>
            <ul className="mt-1 list-disc space-y-0.5 pl-5">
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
                with graduating high school seniors (750k+{"\u00A0"}views)
              </li>
              <li>memorized 100 digits of π to win free pie in fifth grade</li>
              <li>
                fell in love with photography, pickup basketball, and my
                goldendoodle Winnie
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-2 pt-1.5 @xl:grid-cols-2 @xl:gap-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-[color:var(--rule)] bg-black">
              <iframe
                src="https://www.youtube.com/embed/XeHiBRtfn0o"
                title="Crossing the English Channel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-[color:var(--rule)] bg-black">
              <iframe
                src="https://player.vimeo.com/video/1136644145?title=0&byline=0&portrait=0"
                title="Naperville innovators turn inspiration into invention"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </section>

        <footer className="mt-3 border-t border-[color:var(--rule)] pt-2.5 text-sm text-pretty text-[color:var(--muted-2)]">
          <span className="block @xl:inline">allenxu@wharton.upenn.edu</span>
          <span className="mx-1 hidden @xl:inline">|</span>
          <span className="block @xl:inline">allen@multimodal.ventures</span>
          <span className="mx-1 hidden @xl:inline">|</span>
          <span className="block @xl:inline">allen@build.ai</span>
        </footer>
      </main>
    </CursorGlowLayout>
  );
}