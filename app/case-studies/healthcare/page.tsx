import Link from "next/link";
import Shell from "@/components/Shell";
export default function CaseStudy() {
  return (
    <Shell>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">Case study template</div>
          <h1>Healthcare booking website: from fragile to managed.</h1>
          <p className="lead">
            Replace this illustrative story with a verified client case study
            before publishing.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container article">
          <h2>The challenge</h2>
          <p>
            The website depended on online bookings, but the business had no
            defined maintenance cadence, inconsistent backups and no structured
            incident process.
          </p>
          <h2>The operating plan</h2>
          <ul>
            <li>Established a documented maintenance schedule.</li>
            <li>Added backup and recovery procedures.</li>
            <li>Monitored the booking journey and website availability.</li>
            <li>Improved performance bottlenecks.</li>
            <li>Created a support and escalation workflow.</li>
          </ul>
          <h2>The outcome</h2>
          <p>
            The goal of the engagement was not simply a prettier website. It was
            a website with a repeatable operating system behind it.
          </p>
          <div className="callout">
            <b>Publishing note:</b> Replace all illustrative claims, numbers and
            client details with evidence and client-approved information.
          </div>
          <Link className="btn red" href="/audit">
            Get a Similar Audit →
          </Link>
        </div>
      </section>
    </Shell>
  );
}
