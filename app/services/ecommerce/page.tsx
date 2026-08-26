import Link from "next/link";
import Shell from "@/components/Shell";

const points = {
  title: "Ecommerce Maintenance",
  intro:
    "Protect the customer journey from product page to checkout with proactive technical care.",
  list: [
    "Checkout and payment journey checks",
    "Product and content support",
    "Integration troubleshooting",
    "Performance monitoring",
    "Security hygiene",
    "Backup and recovery planning where supported",
    "Incident escalation",
  ],
  body:
    "For ecommerce businesses, a small technical problem can become a revenue problem. Our service focuses attention on the customer journeys that matter most.",
};

export default function EcommerceService() {
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
              <b>Important:</b> Payment processor failures and third-party
              service outages may require escalation to the relevant provider.
            </div>
          </div>

          <div>
            <div className="card">
              <h3>Typical ecommerce workflow</h3>

              <ul className="features">
                <li>Store health review</li>
                <li>Checkout testing</li>
                <li>Payment journey checks</li>
                <li>Integration monitoring</li>
                <li>Performance review</li>
                <li>Incident escalation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}