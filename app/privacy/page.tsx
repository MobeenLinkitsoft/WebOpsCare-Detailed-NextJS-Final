import Shell from "@/components/Shell";
export default function Privacy() {
  return (
    <Shell>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">Legal</div>
          <h1>Privacy Policy</h1>
        </div>
      </section>
      <section className="section">
        <div className="container article">
          <p>
            This is a placeholder privacy policy. Replace it with a legally
            reviewed policy describing your actual data collection, cookies,
            analytics, payment processing, CRM, support tools and retention
            practices.
          </p>
          <h2>Information we may collect</h2>
          <p>
            Contact details, website information, service requests, account
            information and payment-related identifiers may be processed
            depending on the services used.
          </p>
          <h2>Third-party processors</h2>
          <p>
            List your actual providers, such as payment processors, analytics,
            email, CRM, hosting and support platforms.
          </p>
        </div>
      </section>
    </Shell>
  );
}
