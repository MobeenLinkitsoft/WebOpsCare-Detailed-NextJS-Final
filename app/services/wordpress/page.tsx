import Link from "next/link";
import Shell from "@/components/Shell";

const points = {
  title: "WordPress Maintenance",
  intro:
    "Keep WordPress current, tested and supportable without turning every update into a developer project.",
  list: [
    "WordPress core updates",
    "Theme and plugin updates",
    "Staging-first testing where available",
    "Backup scheduling",
    "Compatibility and error checks",
    "Small content changes",
    "Performance and database cleanup",
  ],
  body:
    "WordPress sites depend on a changing ecosystem of core software, themes and plugins. Routine maintenance reduces compatibility surprises and keeps the site easier to support.",
};

export default function WordPressService() {
  return (
    <Shell>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">WebOpsCare Service</div>

          <h1>{points.title}</h1>

          <p className="lead">{points.intro}</p>

          <div className="actions">
            <Link className="btn red" href="/audit">
              Request a Service Review →
            </Link>

            <Link className="btn light" href="/plans">
              See Plans
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <div className="article">
            <h2>What we handle</h2>

            <ul>
              {points.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>How this helps your business</h2>

            <p>{points.body}</p>

            <div className="callout">
              <b>Important:</b> Major redesigns, custom development and
              unsupported third-party software may require separate work.
            </div>
          </div>

          <div>
            <div className="card">
              <h3>Typical WordPress workflow</h3>

              <ul className="features">
                <li>Website health review</li>
                <li>Backup verification</li>
                <li>Core and plugin updates</li>
                <li>Compatibility testing</li>
                <li>Error monitoring</li>
                <li>Performance review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}