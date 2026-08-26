import Link from "next/link";
import Shell from "@/components/Shell";
export default function Dashboard() {
  return (
    <Shell>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">Client portal preview</div>
          <h1>Good morning. Your website is being looked after.</h1>
          <p className="lead">
            This preview shows the type of operational dashboard you can connect
            to the Phase 2 backend.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="stats">
            <div className="stat">
              <b>99.98%</b>
              <span>Illustrative uptime</span>
            </div>
            <div className="stat">
              <b>0</b>
              <span>Open critical incidents</span>
            </div>
            <div className="stat">
              <b>12</b>
              <span>Tasks completed</span>
            </div>
            <div className="stat">
              <b>Healthy</b>
              <span>Backup status</span>
            </div>
          </div>
          <div className="grid3" style={{ marginTop: 20 }}>
            <div className="card">
              <h3>Maintenance</h3>
              <p>
                Last routine review completed. Next scheduled review appears
                here.
              </p>
              <Link className="btn dark" href="/contact">
                Request an update
              </Link>
            </div>
            <div className="card">
              <h3>Security</h3>
              <p>
                Show scan status, alerts and security actions from your real
                monitoring stack.
              </p>
              <Link className="btn dark" href="/contact">
                View security
              </Link>
            </div>
            <div className="card">
              <h3>Support</h3>
              <p>
                Create and track requests through your real support/ticketing
                backend.
              </p>
              <Link className="btn red" href="/contact">
                Open a ticket
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
