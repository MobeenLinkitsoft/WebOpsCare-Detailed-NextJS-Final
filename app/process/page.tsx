import Link from "next/link";
import Shell from "@/components/Shell";
const steps = [
  [
    "01",
    "Choose coverage",
    "Select a monthly plan or request a custom assessment for a more complex website.",
  ],
  [
    "02",
    "Discovery call",
    "We review your platform, hosting, integrations, traffic, booking/ecommerce flows and business priorities.",
  ],
  [
    "03",
    "Agreement & access",
    "Scope, support boundaries, escalation rules and commercial terms are documented before access is transferred.",
  ],
  [
    "04",
    "Baseline audit",
    "We review security, backups, uptime, performance, software versions and critical customer journeys.",
  ],
  [
    "05",
    "Operational setup",
    "Monitoring, backup routines, ticketing and maintenance cadence are configured.",
  ],
  [
    "06",
    "Ongoing care",
    "Routine work is performed, requests are tracked and urgent incidents follow the agreed escalation path.",
  ],
  [
    "07",
    "Monthly reporting",
    "You receive a clear summary of completed work, findings, incidents and recommended next actions.",
  ],
];
export default function Process() {
  return (
    <Shell>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">Our process</div>
          <h1>Simple for you. Structured behind the scenes.</h1>
          <p className="lead">
            A repeatable operating process turns website care into a predictable
            service instead of an emergency.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s[0]}>
                <div className="stepNum">{s[0]}</div>
                <div>
                  <h3>{s[1]}</h3>
                  <p className="intro">{s[2]}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cta" style={{ marginTop: 30 }}>
            <h2>Ready to establish your baseline?</h2>
            <p className="lead">
              Start with a free audit before launch or handover.
            </p>
            <Link className="btn red" href="/audit">
              Request an Audit →
            </Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
