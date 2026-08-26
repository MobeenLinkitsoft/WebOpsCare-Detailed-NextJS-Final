import Link from "next/link";
import Shell from "@/components/Shell";

const points = {
  title: "Website Management",
  intro:
    "A broader hands-off service for businesses that want one team to coordinate maintenance, content and technical support.",
  list: [
    "Routine website maintenance",
    "Security and monitoring",
    "Backup management",
    "Content updates",
    "Design adjustments",
    "Technical troubleshooting",
    "Monthly reports and recommendations",
  ],
  body:
    "Website management combines recurring technical care with a practical request process. You get a defined place to send website work instead of coordinating multiple specialists.",
};

export default function ManagementService() {
  return (
    <Shell>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">WebOpsCare Service</div>

          <h1>{points.title}</h1>

          <p className="lead">{points.intro}</p>

          <div className="actions">
            <Link className="btn red" href="/audit">
              Request a Service Review →
            </Link>

            <Link className="btn light" href="/plans">
              See Plans
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <div className="article">
            <h2>What we handle</h2>

            <ul>
              {points.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>How this helps your business</h2>

            <p>{points.body}</p>

            <div className="callout">
              <b>One technical partner:</b> Instead of managing multiple
              freelancers for small website tasks, your team gets one defined
              support process.
            </div>
          </div>

          <div>
            <div className="card">
              <h3>Typical management workflow</h3>

              <ul className="features">
                <li>Initial website audit</li>
                <li>Access and documentation</li>
                <li>Maintenance setup</li>
                <li>Monitoring configuration</li>
                <li>Ongoing support requests</li>
                <li>Monthly reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}