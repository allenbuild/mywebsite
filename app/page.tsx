import Link from "next/link";

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
  {
    href: "https://github.com/allenbuild",
    label: "github",
    external: true,
  },
] as const;

const navLinks = [
  { href: "/projects", label: "projects" },
  { href: "/media", label: "media" },
  { href: "/photography", label: "photography" },
] as const;

export default function Home() {
  return (
    <div className="page-shell">
      <main className="site-main">
        <article className="letter">
          <section className="copy-section" aria-labelledby="name-heading">
            <h1 id="name-heading">Allen Xu</h1>
            <p>
              hey! i&apos;m allen. i&apos;m working on physical AI that helps
              robots work alongside humans and other robots. i&apos;m also a z
              fellow (w26), hf0 fellow-in-residence (s26), and first-year @
              wharton.
            </p>

            <div className="milestones">
              <p>prev:</p>
              <ul>
                <li>
                  built ego-exo datasets for physical ai @{" "}
                  <a
                    href="http://build.ai/"
                    target="_blank"
                    rel="noreferrer"
                    className="paint-underline"
                  >
                    build ai
                  </a>
                </li>
                <li>
                  built{" "}
                  <a
                    href="https://www.decademy.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="paint-underline"
                  >
                    edtech startup
                  </a>{" "}
                  w/ 30k+ users
                </li>
                <li>
                  economics research @ university of michigan. published @{" "}
                  <a
                    href="https://ice.hkubs.hku.hk/events-archive/2025-ijio-special-issue-conference-on-industrial-organization-and-industrial-policy/"
                    target="_blank"
                    rel="noreferrer"
                    className="paint-underline"
                  >
                    ijio
                  </a>
                  ,{" "}
                  <a
                    href="https://www.thehuea.org/competitions/hiiec/results-2024-2025"
                    target="_blank"
                    rel="noreferrer"
                    className="paint-underline"
                  >
                    harvard
                  </a>
                  ,{" "}
                  <a
                    href="https://ijsser.org/2025files/ijsser_10__68.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="paint-underline"
                  >
                    ijsser
                  </a>
                </li>
                <li>
                  built{" "}
                  <a
                    href="https://www.eyerobic.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="paint-underline"
                  >
                    haptic wearable
                  </a>{" "}
                  for blind swimmers. presented @ nasa &{" "}
                  <a
                    href="https://www.nctv17.org/community-events/naperville-innovators-turn-inspiration-into-invention/?srsltid=AfmBOopQFE8INSe9B-06H2d_L_PF-96b2U1bJH2WtL1eeYjXPUnpT7qq"
                    target="_blank"
                    rel="noreferrer"
                    className="paint-underline"
                  >
                    nbc 5 chicago
                  </a>
                </li>
                <li>
                  built{" "}
                  <a
                    href="https://www.instagram.com/bizbuzznfp/"
                    target="_blank"
                    rel="noreferrer"
                    className="paint-underline"
                  >
                    nonprofit entrepreneurship incubator
                  </a>{" "}
                  for 1.5k students w/ $15k+ in angel checks
                </li>
                <li>
                  finalist @ conrad challenge (25/1.3k), blue ocean competition
                  (30/13k), deca internationals (6th/10k), ftc world championship
                  (7th/7k)
                </li>
              </ul>
            </div>

            <nav className="letter-nav" aria-label="Site sections">
              {navLinks.map(({ href, label }, index) => (
                <span key={href} className="link-cluster">
                  {index > 0 ? (
                    <span aria-hidden="true" className="footer-sep">
                      ·
                    </span>
                  ) : null}
                  <Link href={href} className="paint-underline">
                    {label}
                  </Link>
                </span>
              ))}
            </nav>
          </section>
        </article>
      </main>

      <footer className="site-footer">
        <div className="site-stamp">
          <small>
            © <time dateTime="2026">2026</time> Allen Xu
          </small>
        </div>

        <nav className="footer-links" aria-label="Contact">
          {contactLinks.map((link, index) => (
            <span key={link.label} className="link-cluster">
              {index > 0 ? (
                <span aria-hidden="true" className="footer-sep">
                  ·
                </span>
              ) : null}
              <a
                href={link.href}
                className="paint-underline"
                {...("external" in link
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>
      </footer>
    </div>
  );
}
