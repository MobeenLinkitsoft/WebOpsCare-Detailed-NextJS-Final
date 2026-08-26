import Link from "next/link";
import Shell from "@/components/Shell";
export default function About() {
  return (
    <Shell>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">About WebOpsCare</div>
          <h1>Your website deserves an operations team.</h1>
          <p className="lead">
            We built WebOpsCare around a simple idea: business owners should not
            have to become part-time website administrators just because their
            website is important to revenue.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid2">
          <div className="article">
            <h2>Technical work, translated into business confidence.</h2>
            <p>
              Our managed service is designed around the recurring work that
              keeps a modern website useful: software updates, security hygiene,
              backups, availability checks, performance reviews, content
              requests and incident response.
            </p>
            <p>
              Instead of selling a vague promise of “maintenance,” we define
              what is monitored, what is included, how support is requested and
              when an issue becomes an escalation.
            </p>
            <div className="callout">
              <b>Our philosophy:</b> proactive care beats emergency repair. The
              goal is to identify small problems before customers experience
              them.
            </div>
            <h2>Built for growing websites</h2>
            <p>
              We can support WordPress, Shopify, ecommerce stores, custom
              applications and other stacks after an onboarding review. The
              exact service scope depends on your technology, hosting and
              business requirements.
            </p>
          </div>
          <div>
            <div className="card">
              <h3>What we optimize for</h3>
              <ul className="features">
                <li>Reliability over firefighting</li>
                <li>Security hygiene over panic</li>
                <li>Documented processes over tribal knowledge</li>
                <li>Clear reports over mystery invoices</li>
                <li>Human support over endless automation</li>
              </ul>
            </div>
            <div className="card soft" style={{ marginTop: 18 }}>
              <h3>Need a launch partner?</h3>
              <p>
                We can audit the website before launch, establish monitoring and
                create a practical operating baseline.
              </p>
              <Link className="btn red" href="/audit">
                Book an Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
