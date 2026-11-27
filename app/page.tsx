import AsciiRobots from "./AsciiRobots";

const contactLinks = [
  {
    href: "mailto:allen@duetlabs.co",
    label: "allen@duetlabs.co",
  },
  {
    href: "https://www.linkedin.com/in/allenjxu/",
    label: "linkedin",
  },
  { href: "https://x.com/allenxtech", label: "x" },
  {
    href: "https://github.com/allenbuild",
    label: "github",
  },
] as const;

export default function Home() {
  return (
    <main className="home">
      <AsciiRobots />
      <section className="home-copy">
        <p>
          <strong>
            hey! i&apos;m allen, co-founder of{" "}
            <a
              href="https://www.duetlabs.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              duet
            </a>{" "}
            (a16z sr008)
          </strong>.
        </p>
        <p>
          i&apos;m leaving wharton to bring the{" "}
          <a
            href="https://www.cs.utexas.edu/~eunsol/courses/data/bitter_lesson.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            bitter lesson
          </a>{" "}
          to multi-actor robotics. en route, we&apos;ve raised $1m+ and turned
          down y combinator. i&apos;m also a{" "}
          <strong className="soft-strong">z fellow</strong>,{" "}
          <strong className="soft-strong">pareto fellow</strong>, and{" "}
          <strong className="soft-strong">hf0 <span className="keep-word">fellow-in-residence</span></strong>.
        </p>
        <div className="home-prev">
          <p><strong>prev:</strong></p>
          <ul>
            <li>
              built ego-exo datasets @{" "}
              <a href="http://build.ai/" target="_blank" rel="noopener noreferrer">
                build ai
              </a>{" "}
              (hf0 s26). raised $30m from abstract, pear, and costanoa
            </li>
            <li>
              built a{" "}
              <a
                href="https://www.eyerobic.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                haptic wearable
              </a>{" "}
              for blind swimmers. presented @ nasa &{" "}
              <a
                href="https://www.nctv17.org/community-events/naperville-innovators-turn-inspiration-into-invention/?srsltid=AfmBOopQFE8INSe9B-06H2d_L_PF-96b2U1bJH2WtL1eeYjXPUnpT7qq"
                target="_blank"
                rel="noopener noreferrer"
              >
                nbc news
              </a>
            </li>
            <li>
              built a{" "}
              <a href="https://bizbuzz.it" target="_blank" rel="noopener noreferrer">
                nonprofit business incubator
              </a>{" "}
              with 1.5k students
            </li>
            <li>
              built an{" "}
              <a
                href="https://www.decademy.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                edtech startup
              </a>{" "}
              with 60k+ users in 72 countries
            </li>
            <li>
              finalist @ conrad challenge (25/5k), blue ocean contest (30/13k),
              ftc worlds (7/7k), deca icdc (6/10k)
            </li>
            <li>
              econ research @ university of michigan. published @{" "}
              <a
                href="https://www.thehuea.org/competitions/hieec/results-2024-2025"
                target="_blank"
                rel="noopener noreferrer"
              >
                harvard
              </a>
              ,{" "}
              <a
                href="https://ice.hkubs.hku.hk/events-archive/2025-ijio-special-issue-conference-on-industrial-organization-and-industrial-policy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ijio
              </a>
              ,{" "}
              <a
                href="https://ijsser.org/2025files/ijsser_10__68.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                ijsser
              </a>
            </li>
          </ul>
        </div>
      </section>
      <p className="home-links">
        {contactLinks.map((link, index) => (
          <span key={link.label}>
            {index > 0 ? <span className="home-sep"> · </span> : null}
            <a
              href={link.href}
              {...(link.href.startsWith("mailto:")
                ? {}
                : { target: "_blank", rel: "noopener noreferrer" })}
            >
              {link.label}
            </a>
          </span>
        ))}
      </p>
    </main>
  );
}
