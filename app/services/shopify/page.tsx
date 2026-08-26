import Link from "next/link";
import Shell from "@/components/Shell";

const points = {
  title: "Shopify Maintenance",
  intro:
    "Operational support for Shopify stores that need reliable storefronts, integrations and customer journeys.",
  list: [
    "Theme maintenance support",
    "App and integration review",
    "Storefront health checks",
    "Checkout journey checks",
    "Content and merchandising changes",
    "Performance review",
    "Issue triage and escalation",
  ],
  body:
    "Shopify reduces infrastructure overhead, but stores still rely on themes, apps, integrations and content workflows. We help keep those moving parts healthy.",
};

export default function ShopifyService() {
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
              <b>Important:</b> Shopify platform outages and limitations
              controlled by third-party providers remain outside our direct
              control.
            </div>
          </div>

          <div>
            <div className="card">
              <h3>Typical Shopify workflow</h3>

              <ul className="features">
                <li>Storefront review</li>
                <li>Theme health check</li>
                <li>App and integration review</li>
                <li>Checkout testing</li>
                <li>Performance review</li>
                <li>Issue escalation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}