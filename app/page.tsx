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
] as const;

const navBtnClass =
  "nav-btn flex items-center justify-center rounded-md px-2.5 py-1.5 text-center text-[12px] font-normal text-[color:var(--nav-btn-fg)] visited:text-[color:var(--nav-btn-fg)] sm:px-3 sm:py-1.5 sm:text-[13px]";

export default function Home() {
  return (
    <CursorGlowLayout contentClassName="max-w-[39rem]">
      <PageShell>
        <div className="min-w-0 space-y-5 break-words text-[14px] leading-[1.65] text-[color:var(--foreground)]">
          <header>
            <h1 className="text-[1.5rem] font-semibold tracking-tight sm:text-[1.75rem]">
              Allen Xu
            </h1>
          </header>

          <p>
            <span className="font-semibold">hey, i&apos;m allen!</span>
            {" "}
            i&apos;m an incoming freshman @{" "}
            <span className="font-semibold">wharton</span>
            {" "}
            studying finance, cs, and ai. i&apos;m broadly interested in
            physical ai, assistive wearables, and early-stage vc.
          </p>

          <div>
            <p className="text-[15px] font-bold italic [font-family:var(--font-italic)]">
              things i&apos;m doing:
            </p>
            <ul className="mt-1.5 list-outside list-disc space-y-1 pl-5">
              <li>
                building the internet for physical ai @{" "}
                <a
                  href="http://build.ai/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link"
                >
                  build ai
                </a>{" "}
                &{" "}
                <a
                  href="https://www.hf0.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link"
                >
                  hf0
                </a>{" "}
                (&lt;0.1% acceptance rate). raised $25m
              </li>
              <li>
                backing y-combinator and a16z speedrun startups @{" "}
                <a
                  href="https://www.multimodal.ventures/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link"
                >
                  multimodal ventures
                </a>{" "}
                ($25m aum)
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[15px] font-bold italic [font-family:var(--font-italic)]">
              things i&apos;ve done:
            </p>
            <ul className="mt-1.5 list-outside list-disc space-y-1 pl-5">
              <li>
                built{" "}
                <a
                  href="https://www.eyerobic.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link"
                >
                  eyerobic
                </a>
                , a haptic wearable for blind swimmers. presented @ nasa &{" "}
                <a
                  href="https://www.nctv17.org/community-events/naperville-innovators-turn-inspiration-into-invention/?srsltid=AfmBOopQFE8INSe9B-06H2d_L_PF-96b2U1bJH2WtL1eeYjXPUnpT7qq"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link"
                >
                  nbc 5 chicago
                </a>
                , winning $1m+ in academic scholarships and grants
              </li>
              <li>
                built{" "}
                <a
                  href="https://www.bizbuzz.it/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link"
                >
                  bizbuzz
                </a>
                , a youth entrepreneurship incubator across chicagoland. ran
                three camps and{" "}
                <span className="font-semibold">
                  fish tank
                </span>{" "}
                contests, awarding $15k+ in venture funding
              </li>
              <li>
                built{" "}
                <a
                  href="https://www.decademy.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link"
                >
                  decademy.app
                </a>
                , an edtech startup with 30k+ users
              </li>
              <li>
                researched carbon emissions trading and market regulation @{" "}
                <span className="font-semibold">
                  university of michigan
                </span>
                . presented @{" "}
                <a
                  href="https://ice.hkubs.hku.hk/events-archive/2025-ijio-special-issue-conference-on-industrial-organization-and-industrial-policy/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link"
                >
                  ijio 2025
                </a>
              </li>
              <li>
                researched governance effects on carbon intensity @{" "}
                <span className="font-semibold">
                  purdue university fort wayne
                </span>
                . published @{" "}
                <a
                  href="https://www.thehuea.org/general-8"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link"
                >
                  harvard undergraduate economics association
                </a>{" "}
                &{" "}
                <a
                  href="https://ijsser.org/2025files/ijsser_10__68.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-link"
                >
                  ijsser
                </a>
              </li>
              <li>
                finalist @ conrad challenge (25/1.3k), blue ocean competition
                (30/12.8k), deca internationals (6th/10k)
              </li>
              <li>
                interned @{" "}
                <span className="font-semibold">
                  university of notre dame
                </span>{" "}
                (institute for global investing),{" "}
                <span className="font-semibold">
                  the city of naperville
                </span>{" "}
                (financial advisory board), and more
              </li>
            </ul>
          </div>

        <nav
          aria-label="Site sections"
          className="grid grid-cols-2 gap-1.5 sm:flex sm:flex-wrap sm:gap-2"
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
        </div>
      </PageShell>
    </CursorGlowLayout>
  );
}
