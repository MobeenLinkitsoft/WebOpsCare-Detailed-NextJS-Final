import Shell from "@/components/Shell";
export default function Terms() {
  return (
    <Shell>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">Legal</div>
          <h1>Terms of Service</h1>
        </div>
      </section>
      <section className="section">
        <div className="container article">
          <p>
            These terms are a placeholder and must be reviewed and customized by
            qualified legal counsel before publication.
          </p>
          <h2>Service scope</h2>
          <p>
            Services, response targets, maintenance hours, exclusions and
            emergency support are defined in the applicable service agreement.
          </p>
          <h2>Third-party services</h2>
          <p>
            Hosting providers, registrars, payment systems, booking platforms
            and other vendors may experience outages outside WebOpsCare's
            control.
          </p>
          <h2>Security</h2>
          <p>
            No provider can guarantee that a website will never be attacked.
            Security services are designed to reduce risk and improve detection
            and recovery.
          </p>
        </div>
      </section>
    </Shell>
  );
}
