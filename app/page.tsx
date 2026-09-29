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

export default function Home() {
  return (
    <div className="page-shell">
      <main className="site-main">
        <article className="letter">
          <section className="copy-section">
            <p>
              <strong>hey! i&apos;m allen.</strong>
              {" "}
              i&apos;m working on human-robot collaboration. i&apos;m also a{" "}
              <strong className="soft-strong">z-fellow</strong> (w26),{" "}
              <strong className="soft-strong">hf0</strong> fellow-in-residence
              (s26), and first-year @{" "}
              <strong className="soft-strong">wharton</strong>.
            </p>

            <div className="milestones">
              <p>prev:</p>
              <ul>
                <li>
                  built ego-exo datasets for general-purpose robots @{" "}
                  <a
                    href="http://build.ai/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-underline"
                  >
                    build ai
                  </a>
                </li>
                <li>
                  built a{" "}
                  <a
                    href="https://www.eyerobic.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-underline"
                  >
                    haptic wearable
                  </a>{" "}
                  for blind swimmers. presented @ nasa &{" "}
                  <a
                    href="https://www.nctv17.org/community-events/naperville-innovators-turn-inspiration-into-invention/?srsltid=AfmBOopQFE8INSe9B-06H2d_L_PF-96b2U1bJH2WtL1eeYjXPUnpT7qq"
                    target="_blank"
                    rel="noreferrer"
                    className="text-underline"
                  >
                    nbc news
                  </a>
                </li>
                <li>
                  built a{" "}
                  <a
                    href="https://www.instagram.com/bizbuzznfp/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-underline"
                  >
                    nonprofit entrepreneurship incubator
                  </a>{" "}
                  for 1.5k students w/ $15k+ in angel checks
                </li>
                <li>
                  built{" "}
                  <a
                    href="https://www.decademy.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-underline"
                  >
                    edtech startup
                  </a>{" "}
                  w/ 30k+ users
                </li>
                <li>
                  finalist @ conrad challenge (25/1.3k), blue ocean contest
                  (30/13k), deca internationals (6th/10k), ftc worlds (7th/7k)
                </li>
                <li>
                  economics research @ university of michigan. published @{" "}
                  <a
                    href="https://ice.hkubs.hku.hk/events-archive/2025-ijio-special-issue-conference-on-industrial-organization-and-industrial-policy/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-underline"
                  >
                    ijio
                  </a>
                  ,{" "}
                  <a
                    href="https://www.thehuea.org/competitions/hieec/results-2024-2025"
                    target="_blank"
                    rel="noreferrer"
                    className="text-underline"
                  >
                    harvard
                  </a>
                  ,{" "}
                  <a
                    href="https://ijsser.org/2025files/ijsser_10__68.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-underline"
                  >
                    ijsser
                  </a>
                </li>
              </ul>
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
                    className="text-underline"
                    {...("external" in link
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                </span>
              ))}
            </nav>
          </section>
        </article>
      </main>
      <div className="factory-scene" aria-hidden="true" />
    </div>
  );
}
