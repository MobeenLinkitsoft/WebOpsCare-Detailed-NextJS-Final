import Link from "next/link";
import Shell from "@/components/Shell";
export default function Login() {
  return (
    <Shell>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">Client portal</div>
          <h1>Your website support hub.</h1>
          <p className="lead">
            Connect this page to your Phase 2 authentication and client portal
            when the backend is ready.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: 600 }}>
          <div className="card">
            <h2>Client access</h2>
            <input
              className="input"
              placeholder="Email address"
              style={{ marginBottom: 10 }}
            />
            <input className="input" type="password" placeholder="Password" />
            <div className="actions">
              <Link className="btn red" href="/dashboard">
                Open Portal Demo →
              </Link>
              <Link className="btn" href="/contact">
                Need access?
              </Link>
            </div>
            <div className="notice" style={{ marginTop: 18 }}>
              This is a front-end placeholder. Connect your Phase 2
              authentication/database before production.
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
