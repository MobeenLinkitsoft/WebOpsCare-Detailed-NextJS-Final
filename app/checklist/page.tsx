import Link from "next/link";
import Shell from "@/components/Shell";
const sections = [
  [
    "Security",
    "SSL certificate, admin access, MFA, unused accounts, malware scanning, firewall/WAF where appropriate.",
  ],
  [
    "Updates",
    "CMS/core updates, themes, plugins, dependencies, compatibility testing and removal of unsupported software.",
  ],
  [
    "Backups",
    "Backup frequency, off-site storage, retention, access and restore testing.",
  ],
  [
    "Monitoring",
    "Uptime, SSL expiry, forms, booking flows, checkout and important integrations.",
  ],
  [
    "Performance",
    "Mobile speed, images, caching, scripts, Core Web Vitals and hosting bottlenecks.",
  ],
  [
    "Support",
    "Request channel, response targets, emergency escalation, approvals and monthly reporting.",
  ],
];
export default function Checklist() {
  return (
    <Shell>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">Free resource</div>
          <h1>The website maintenance checklist.</h1>
          <p className="lead">
            Use this as a starting point for your internal website operations
            review.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid3">
          {sections.map((s) => (
            <div className="card" key={s[0]}>
              <div className="icon">✓</div>
              <h3>{s[0]}</h3>
              <p>{s[1]}</p>
            </div>
          ))}
        </div>
        <div className="cta" style={{ marginTop: 25 }}>
          <h2>Want someone to handle it?</h2>
          <p className="lead">
            We can turn the checklist into a recurring managed service.
          </p>
          <Link className="btn red" href="/plans">
            See Plans →
          </Link>
        </div>
      </section>
    </Shell>
  );
}
