import Link from "next/link";
import Shell from "@/components/Shell";
const cases = [
  [
    "Healthcare booking site",
    "Improved page delivery, stabilized a booking journey and introduced routine security/monitoring practices.",
    "Performance · Booking · Security",
  ],
  [
    "Professional services website",
    "Established maintenance cadence, backup routines and a request workflow for ongoing updates.",
    "Maintenance · Support · Backups",
  ],
  [
    "Growing ecommerce brand",
    "Focused on customer journey monitoring, storefront performance and integration support.",
    "Ecommerce · Performance · Monitoring",
  ],
];
export default function Works() {
  return (
    <Shell>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">Our work</div>
          <h1>Operational improvements that support real businesses.</h1>
          <p className="lead">
            Use this page for verified client stories. The examples below are
            illustrative placeholders until you replace them with your actual
            case studies.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid3">
            {cases.map((c) => (
              <div className="card" key={c[0]}>
                <div className="icon">↗</div>
                <h3>{c[0]}</h3>
                <p>{c[1]}</p>
                <p>
                  <b>{c[2]}</b>
                </p>
                <Link href="/contact" className="btn dark">
                  Discuss a similar project
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section gray">
        <div className="container">
          <div className="cta">
            <h2>Have a website that needs a health check?</h2>
            <p className="lead">
              We'll identify the biggest operational risks and opportunities
              before recommending a plan.
            </p>
            <Link className="btn red" href="/audit">
              Get a Free Audit →
            </Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
