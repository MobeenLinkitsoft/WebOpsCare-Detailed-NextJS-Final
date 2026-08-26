import Link from "next/link";
import Shell from "@/components/Shell";

const points = {
  title: "Security & Malware Protection",
  intro:
    "Layered website security practices designed to reduce exposure, detect suspicious activity and improve recovery readiness.",
  list: [
    "Security and malware scanning",
    "SSL/TLS and certificate checks",
    "CMS and dependency risk review",
    "Suspicious login review where supported",
    "Firewall and WAF configuration support",
    "Malware cleanup and incident response options",
    "Recovery and escalation planning",
  ],
  body:
    "Security is a process rather than a badge. We combine sensible hardening, monitoring and recovery practices with clear escalation so a suspicious event has somewhere to go.",
};

export default function SecurityService() {
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
              <b>Important:</b> Security services reduce risk but cannot
              guarantee that a website will never be attacked.
            </div>
          </div>

          <div>
            <div className="card">
              <h3>Typical security workflow</h3>

              <ul className="features">
                <li>Initial security review</li>
                <li>Access and recovery setup</li>
                <li>Monitoring configuration</li>
                <li>Routine security checks</li>
                <li>Incident triage</li>
                <li>Monthly security reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}