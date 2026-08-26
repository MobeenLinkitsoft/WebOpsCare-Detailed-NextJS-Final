import Link from "next/link";
import Shell from "@/components/Shell";

const services = [
  [
    "01",
    "Security & malware protection",
    "Threat scanning, hardening, suspicious-login review and incident support.",
  ],
  [
    "02",
    "Updates & maintenance",
    "Safe CMS, theme, plugin and dependency updates with testing.",
  ],
  [
    "03",
    "Backups & recovery",
    "Scheduled off-site backups and recovery planning for critical sites.",
  ],
  [
    "04",
    "Speed & performance",
    "Caching, image optimization, Core Web Vitals and technical cleanup.",
  ],
  [
    "05",
    "Uptime & monitoring",
    "Availability, SSL, forms and critical customer journeys monitored.",
  ],
  [
    "06",
    "Content & support",
    "Small website changes, troubleshooting and a clear support process.",
  ],
];

const metrics = [
  ["Uptime", 99],
  ["Security", 98],
  ["Performance", 96],
  ["Backups", 100],
];

export default function Home() {
  return (
    <Shell>
      {/* HERO */}
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <div className="eyebrow">Managed website operations</div>

            <h1>
              Keep your website{" "}
              <span>secure, fast &amp; online.</span>
            </h1>

            <p className="lead">
              WebOpsCare gives businesses a dependable technical team for
              maintenance, security, backups, monitoring, performance and
              ongoing website support.
            </p>

            <div className="actions">
              <Link className="btn red" href="/audit">
                Get a Free Website Audit →
              </Link>

              <Link className="btn light" href="/plans">
                View Plans &amp; Pricing
              </Link>
            </div>
          </div>

          <div className="heroCard">
            <div className="eyebrow">Operations dashboard</div>

            <h3>Website health snapshot</h3>

            <div className="score">99.98%</div>

            <div
              style={{
                color: "#aaa",
                fontSize: 12,
              }}
            >
              Illustrative managed-site health score
            </div>

            <div className="health">
              {metrics.map(([name, value]) => (
                <div key={String(name)}>
                  <div className="healthRow">
                    <span>{name}</span>
                    <b>{value}%</b>
                  </div>

                  <div className="track">
                    <i
                      style={{
                        width: `${value}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust">
        <div className="container trustrow">
          <span>
            <b>24/7</b> monitoring options
          </span>

          <span>
            <b>Secure</b> backup routines
          </span>

          <span>
            <b>Priority</b> support
          </span>

          <span>
            <b>Monthly</b> reporting
          </span>

          <span>
            <b>Human</b> technical help
          </span>
        </div>
      </div>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="head">
            <div>
              <div className="eyebrow">Complete coverage</div>

              <h2>
                Everything your website needs in one place.
              </h2>
            </div>

            <p className="intro">
              A managed layer between your business and the technical work
              that keeps your website reliable.
            </p>
          </div>

          <div className="grid3">
            {services.map(([number, title, description]) => (
              <div className="card" key={number}>
                <div className="icon">{number}</div>

                <h3>{title}</h3>

                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MAINTENANCE */}
      <section className="section gray">
        <div className="container">
          <div className="head">
            <div>
              <div className="eyebrow">Why maintenance matters</div>

              <h2>
                A website is not a set-and-forget asset.
              </h2>
            </div>
          </div>

          <div className="grid2">
            <div className="card">
              <h3>Without ongoing care</h3>

              <ul className="features">
                <li>
                  Outdated software creates avoidable risk
                </li>

                <li>
                  Backups may not be tested when they matter
                </li>

                <li>
                  Broken forms can quietly lose leads
                </li>

                <li>
                  Slow pages damage user experience
                </li>

                <li>
                  Small issues become expensive emergencies
                </li>
              </ul>
            </div>

            <div className="card">
              <h3>With managed operations</h3>

              <ul className="features">
                <li>
                  Routine updates and health checks
                </li>

                <li>
                  Documented recovery and backup routines
                </li>

                <li>
                  Monitoring for uptime and key journeys
                </li>

                <li>
                  Performance work based on measurable signals
                </li>

                <li>
                  One clear support and escalation process
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <div className="container">
          <div className="stats">
            <div className="stat">
              <b>24/7</b>
              <span>Monitoring options</span>
            </div>

            <div className="stat">
              <b>6</b>
              <span>Core operational areas</span>
            </div>

            <div className="stat">
              <b>3</b>
              <span>Simple monthly plans</span>
            </div>

            <div className="stat">
              <b>1</b>
              <span>Technical partner</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta">
            <div className="eyebrow">Before launch</div>

            <h2>
              Know what your website needs before you hand over the keys.
            </h2>

            <p className="lead">
              Start with a no-obligation audit and receive a practical
              recommendation for maintenance, security and monitoring.
            </p>

            <div className="actions">
              <Link className="btn red" href="/audit">
                Request My Free Audit →
              </Link>

              <Link className="btn light" href="/contact">
                Talk to the Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}