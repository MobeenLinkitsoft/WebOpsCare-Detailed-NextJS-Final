import Link from "next/link";
import Shell from "@/components/Shell";

const points = {
  title: "Performance Optimization",
  intro:
    "Make the website faster and more resilient by improving the technical causes of slow experiences.",
  list: [
    "Core Web Vitals review",
    "Image and media optimization",
    "Caching and delivery review",
    "Database cleanup where appropriate",
    "Script and asset review",
    "Mobile performance checks",
    "Before and after reporting",
  ],
  body:
    "Performance work starts with measurement. We identify the biggest bottlenecks, prioritize changes by impact and verify results rather than making random tweaks.",
};

export default function PerformanceService() {
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
              <b>Performance principle:</b> We measure before and after
              whenever practical so optimization decisions are based on data.
            </div>
          </div>

          <div>
            <div className="card">
              <h3>Typical performance workflow</h3>

              <ul className="features">
                <li>Baseline performance test</li>
                <li>Mobile experience review</li>
                <li>Core Web Vitals analysis</li>
                <li>Asset optimization</li>
                <li>Caching and delivery review</li>
                <li>Before/after reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}