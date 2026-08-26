import Link from "next/link";
import Shell from "@/components/Shell";
const guides = [
  [
    "Website maintenance checklist",
    "A practical checklist for the recurring tasks that keep a business website healthy.",
    "/checklist",
  ],
  [
    "How much should website maintenance cost?",
    "Understand the factors that change monthly maintenance pricing and where managed services fit.",
    "/guides/maintenance-cost",
  ],
  [
    "Website security basics for business owners",
    "The essential layers of security, access control, monitoring and recovery planning.",
    "/guides/security-basics",
  ],
  [
    "Hosting + maintenance: what is the difference?",
    "Understand what hosting provides and why it does not replace ongoing website operations.",
    "/guides/hosting-vs-maintenance",
  ],
  [
    "Website support: what should be included?",
    "How to define response expectations, maintenance hours, emergency escalation and reporting.",
    "/guides/website-support",
  ],
];
export default function Guides() {
  return (
    <Shell>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">Guides & resources</div>
          <h1>Understand the work behind a healthy website.</h1>
          <p className="lead">
            Educational content you can use to make better website operations
            decisions.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid3">
            {guides.map((g) => (
              <div className="card" key={g[0]}>
                <div className="eyebrow">Guide</div>
                <h3>{g[0]}</h3>
                <p>{g[1]}</p>
                <Link className="btn dark" href={g[2]}>
                  Read guide →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
