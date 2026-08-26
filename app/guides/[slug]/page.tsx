import Shell from "@/components/Shell";
import Link from "next/link";
const content: Record<
  string,
  { title: string; intro: string; sections: string[] }
> = {
  "maintenance-cost": {
    title: "How much should website maintenance cost?",
    intro:
      "Maintenance pricing depends on website complexity, platform, support workload, security requirements and response expectations.",
    sections: [
      "Simple brochure sites may need only periodic updates and backups, while ecommerce and booking websites require more frequent checks and a stronger incident process.",
      "A useful monthly plan defines exactly what recurring work is included, how many update hours are available, what counts as an emergency and which services are billed separately.",
      "The cheapest plan is not always the lowest-cost option if an outage, broken booking form or failed update can directly affect revenue. Compare coverage, response process and reporting — not just the monthly number.",
    ],
  },
  "security-basics": {
    title: "Website security basics for business owners",
    intro:
      "Security is a layered operating discipline, not a single plugin or product.",
    sections: [
      "Start with access control: strong credentials, least privilege, multi-factor authentication where available and a documented recovery path.",
      "Keep software current and remove unused components. Use monitoring and scanning appropriate to the platform, and make sure SSL/TLS certificates do not silently expire.",
      "Backups are part of security because prevention is never perfect. Critical sites should have a recovery plan and, where practical, restore verification.",
    ],
  },
  "hosting-vs-maintenance": {
    title: "Hosting + maintenance: what is the difference?",
    intro:
      "Hosting gives your website a place to run. Maintenance is the recurring work that keeps the website healthy after it is running.",
    sections: [
      "Hosting typically covers infrastructure resources, networking and the environment in which the website operates. The exact responsibilities vary by provider.",
      "Maintenance can include software updates, security checks, backups, performance work, content changes, monitoring and technical support.",
      "For a business-critical website, define both layers clearly so there is no confusion about who responds when a website is unavailable or an integration breaks.",
    ],
  },
  "website-support": {
    title: "What should website support include?",
    intro:
      "A good support plan makes it obvious how requests are submitted, prioritized and resolved.",
    sections: [
      "Define standard requests such as content edits and bug fixes separately from critical incidents such as downtime or security events.",
      "Set realistic response targets rather than promising impossible instant resolution. If you offer 24/7 support, document what 24/7 means: monitoring, triage, human response, or all three.",
      "Monthly reports should summarize completed work, incidents, security findings, backups and recommendations so the client can see the value of the service.",
    ],
  },
};
export default async function Guide({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = content[slug] ?? {
    title: "Website operations guide",
    intro:
      "Practical guidance for keeping your website secure, maintained and reliable.",
    sections: [
      "Start with an audit of your platform, access, backups, monitoring and customer journeys.",
      "Create a maintenance cadence that matches the complexity and business importance of the website.",
      "Document support, escalation and recovery procedures before an incident occurs.",
    ],
  };
  return (
    <Shell>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">Guide</div>
          <h1>{c.title}</h1>
          <p className="lead">{c.intro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container article">
          {c.sections.map((s, i) => (
            <div key={i}>
              <h2>
                {i + 1}.{" "}
                {i === 0
                  ? "Start with the basics"
                  : i === 1
                    ? "Define the operating model"
                    : "Make it measurable"}
              </h2>
              <p>{s}</p>
            </div>
          ))}
          <div className="callout">
            <b>Want help applying this?</b>
            <br />
            Request a website audit and we'll map the guidance to your actual
            site.
          </div>
          <Link className="btn red" href="/audit">
            Request an Audit →
          </Link>
        </div>
      </section>
    </Shell>
  );
}
