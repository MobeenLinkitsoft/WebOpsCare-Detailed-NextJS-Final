import Link from "next/link";
import Shell from "@/components/Shell";
const items = [
  [
    "Security & malware protection",
    "Security scanning, hardening, suspicious-login review, malware response and incident escalation.",
    "/services/security",
  ],
  [
    "WordPress maintenance",
    "Core, theme and plugin updates, staging checks, backups, compatibility testing and small fixes.",
    "/services/wordpress",
  ],
  [
    "Shopify maintenance",
    "Storefront health, theme updates, app review, checkout journey checks and performance support.",
    "/services/shopify",
  ],
  [
    "Ecommerce maintenance",
    "Payment journey checks, product/content support, integrations, performance and operational monitoring.",
    "/services/ecommerce",
  ],
  [
    "Website management",
    "A broader hands-off service combining maintenance, content updates, support and ongoing improvement.",
    "/services/management",
  ],
  [
    "Performance optimization",
    "Page-speed investigation, image optimization, caching, Core Web Vitals and technical cleanup.",
    "/services/performance",
  ],
];
export default function Services() {
  return (
    <Shell>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">Services</div>
          <h1>Website care, from the server room to the browser.</h1>
          <p className="lead">
            Choose focused support or combine services into a managed monthly
            plan.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid3">
            {items.map((x) => (
              <div className="card" key={x[0]}>
                <div className="icon">+</div>
                <h3>{x[0]}</h3>
                <p>{x[1]}</p>
                <Link className="btn dark" href={x[2]}>
                  Explore service →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section gray">
        <div className="container">
          <div className="cta">
            <div className="eyebrow">Custom coverage</div>
            <h2>Not sure which services belong together?</h2>
            <p className="lead">
              Tell us your platform, traffic, booking/ecommerce needs and risk
              concerns. We'll map the right operational coverage.
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
