
import Link from "next/link";
import Shell from "@/components/Shell";

const items = [
  [
    "Domain & DNS",
    "Domain registration, renewals, DNS configuration, records, redirects, SSL setup and ongoing domain management.",
    "/services/domain",
  ],
  [
    "Website Hosting",
    "Reliable website hosting, server configuration, SSL, backups, uptime monitoring and ongoing hosting support.",
    "/services/hosting",
  ],
  [
    "Website Management",
    "A hands-off service combining maintenance, content updates, support, monitoring and ongoing website improvement.",
    "/services/management",
  ],
  [
    "Website Design & Development",
    "Professional website design, redesigns, landing pages, responsive development and conversion-focused improvements.",
    "/services/web-design",
  ],
  [
    "Digital Marketing",
    "Campaign planning, content support, audience growth and digital marketing services designed around your business goals.",
    "/services/marketing",
  ],
  [
    "SEO",
    "Technical SEO, on-page improvements, search visibility, site health checks and ongoing optimization.",
    "/services/seo",
  ],
  [
    "Security & Malware Protection",
    "Security scanning, hardening, suspicious-login review, malware response and incident escalation.",
    "/services/security",
  ],
  [
    "Performance Optimization",
    "Page-speed investigation, image optimization, caching, Core Web Vitals and technical cleanup.",
    "/services/performance",
  ],
  [
    "WordPress Maintenance",
    "Core, theme and plugin updates, staging checks, backups, compatibility testing and small fixes.",
    "/services/wordpress",
  ],
  [
    "Shopify Maintenance",
    "Storefront health, theme updates, app review, checkout journey checks and performance support.",
    "/services/shopify",
  ],
  [
    "Ecommerce Maintenance",
    "Payment journey checks, product and content support, integrations, performance and operational monitoring.",
    "/services/ecommerce",
  ],
];

export default function Services() {
  return (
    <Shell>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">Services</div>

          <h1>
            Everything your website needs to stay online, secure and growing.
          </h1>

          <p className="lead">
            From domains and hosting to design, marketing, security and ongoing
            maintenance, we help businesses manage the technology behind their
            website.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid3">
            {items.map((item) => (
              <div className="card" key={item[0]}>
                <div className="icon">+</div>

                <h3>{item[0]}</h3>

                <p>{item[1]}</p>

                {/* <Link className="btn dark" href={item[2]}>
                  Explore service →
                </Link> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="container">
          <div className="cta">
            <div className="eyebrow">Complete website care</div>

            <h2>
              Need more than one service?
            </h2>

            <p className="lead">
              Combine hosting, security, maintenance, marketing and website
              support into one managed service. Tell us what you need and we'll
              help build the right coverage for your business.
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