import Shell from "@/components/Shell";
import LeadForm from "@/components/LeadForm";

export default function Audit() {
  return (
    <Shell>
      {/* HERO */}
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">
            Free website audit
          </div>

          <h1>
            Find the gaps before customers do.
          </h1>

          <p className="lead">
            A practical review of website health,
            security hygiene, performance, backups,
            uptime and critical user journeys.
          </p>
        </div>
      </section>

      {/* AUDIT CONTENT */}
      <section className="section">
        <div className="container grid2">

          {/* LEFT */}
          <div className="article">

            <h2>
              What we review
            </h2>

            <ul>
              <li>
                Platform, hosting and software stack
              </li>

              <li>
                SSL and basic security posture
              </li>

              <li>
                Backup and recovery readiness
              </li>

              <li>
                Uptime and critical journey monitoring
              </li>

              <li>
                Performance and mobile experience
              </li>

              <li>
                Forms, booking and ecommerce flows
              </li>

              <li>
                Update and support requirements
              </li>
            </ul>

            <h2>
              What you receive
            </h2>

            <p>
              A practical summary of the most
              important risks and improvements,
              followed by a recommendation for
              the appropriate service level.
            </p>

            <div className="callout">
              <b>No pressure.</b>{" "}
              The audit should help you understand
              your operational needs even if you do
              not purchase a plan.
            </div>

          </div>

          {/* FORM */}
          <div className="card">

            <LeadForm
              button="Request My Free Audit →"
            />

          </div>

        </div>
      </section>
    </Shell>
  );
}