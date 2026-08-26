import Shell from "@/components/Shell";
import LeadForm from "@/components/LeadForm";
export default function Contact() {
  return (
    <Shell>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">Contact</div>
          <h1>Tell us what your website needs.</h1>
          <p className="lead">
            For maintenance, support, security, new website handover or a custom
            operating plan.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid2">
          <div>
            <h2>Start a conversation</h2>
            <p className="intro">
              Share the basics and we'll use them to understand the right next
              step. For urgent production incidents, replace this form with your
              real emergency contact process before launch.
            </p>
            <div className="card soft">
              <h3>Suggested support channels</h3>
              <ul className="features">
                <li>Client portal for normal requests</li>
                <li>Email for standard support</li>
                <li>Emergency escalation for critical incidents</li>
                <li>Monthly service reporting</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <LeadForm button="Send My Request →" />
          </div>
        </div>
      </section>
    </Shell>
  );
}
