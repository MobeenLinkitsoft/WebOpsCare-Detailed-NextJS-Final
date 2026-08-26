import Shell from "@/components/Shell";
const faqs = [
  [
    "What is website maintenance?",
    "Ongoing work that keeps a website updated, secure, backed up, monitored and functioning correctly.",
  ],
  [
    "How often should a website be maintained?",
    "It depends on the platform and business risk. Many business sites benefit from weekly checks and more frequent monitoring for critical journeys.",
  ],
  [
    "Can you maintain a website you did not build?",
    "Usually yes, after reviewing the platform, hosting, access and existing code or configuration.",
  ],
  [
    "Do you provide 24/7 support?",
    "Plans can include 24/7 monitoring and an emergency escalation process. Define the exact human-response commitment in your service agreement before advertising it.",
  ],
  [
    "Do you guarantee a website can never be hacked?",
    "No responsible provider should make that promise. The goal is layered protection, detection, response and recovery readiness.",
  ],
  [
    "Are content changes included?",
    "Yes, within the defined allowance of the selected plan. Larger redesigns, new features and major development should be quoted separately.",
  ],
  [
    "Do you provide backups?",
    "Backup frequency depends on the plan and platform. Critical websites should also have a documented recovery process.",
  ],
  [
    "Can you support booking systems?",
    "Yes. We can support agreed booking-system checks, troubleshooting and integrations, subject to the third-party vendor's capabilities.",
  ],
  [
    "How do monthly reports work?",
    "Reports summarize maintenance completed, security/monitoring findings, incidents, performance work and recommended next actions.",
  ],
];
export default function FAQ() {
  return (
    <Shell>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">FAQ</div>
          <h1>
            Questions business owners ask before outsourcing website care.
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="container faq">
          {faqs.map((f) => (
            <details key={f[0]}>
              <summary>{f[0]}</summary>
              <p>{f[1]}</p>
            </details>
          ))}
        </div>
      </section>
    </Shell>
  );
}
