import Link from "next/link";
import Shell from "@/components/Shell";

const plans = [
  {
    name: "Essential",
    price: 179,
    desc: "For brochure sites and small businesses.",
    slug: "essential",
    items: [
      "Monthly core/software updates",
      "Weekly backup routine",
      "Security scanning",
      "Uptime & SSL monitoring",
      "Minor fixes and content requests",
      "Monthly health summary",
    ],
  },
  {
    name: "Advanced",
    price: 249,
    desc: "For growing businesses and lead-generation websites.",
    slug: "advanced",
    items: [
      "Everything in Essential",
      "More frequent maintenance",
      "Daily backup routine",
      "Performance optimization",
      "Forms and spam protection",
      "Booking/integration support",
      "Priority support",
      "Monthly SEO health check",
    ],
  },
  {
    name: "Elevate",
    price: 319,
    desc: "For ecommerce, high-traffic and mission-critical sites.",
    slug: "elevate",
    items: [
      "Everything in Advanced",
      "Advanced security monitoring",
      "Verified recovery backups",
      "Performance monitoring",
      "Larger monthly update allowance",
      "Emergency escalation",
      "Dedicated account contact",
      "Quarterly infrastructure review",
    ],
  },
];

export default function Plans() {
  return (
    <Shell>
      {/* PAGE HERO */}
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">Plans &amp; pricing</div>

          <h1>Predictable monthly website care.</h1>

          <p className="lead">
            Simple plans with clearly defined coverage. Choose the level of
            technical support that fits your website and continue through our
            secure checkout.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="section">
        <div className="container">
          <div className="grid3">
            {plans.map((plan, index) => (
              <div
                className={
                  "card priceCard " + (index === 1 ? "popular" : "")
                }
                key={plan.name}
              >
                {index === 1 && (
                  <span className="badge">MOST POPULAR</span>
                )}

                <div className="eyebrow">{plan.name}</div>

                <div className="price">
                  ${plan.price}
                  <small>/mo</small>
                </div>

                <p>{plan.desc}</p>

                <ul className="features">
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {/* CHECKOUT BUTTON */}
                <Link
                  href={`/checkout?plan=${plan.slug}`}
                  className="btn red"
                >
                  Choose {plan.name} →
                </Link>

                <div className="secureCheckoutNote">
                  Secure PayPal checkout
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE COMPARISON */}
      <section className="section gray">
        <div className="container">
          <div className="eyebrow">Compare plans</div>

          <h2>Choose the right level of protection.</h2>

          <div className="card compare">
            <table>
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Essential</th>
                  <th>Advanced</th>
                  <th>Elevate</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Security scanning", "✓", "✓", "✓"],
                  ["Backups", "Weekly", "Daily", "Verified daily"],
                  [
                    "Performance",
                    "Basic",
                    "Optimization",
                    "Advanced monitoring",
                  ],
                  ["Content requests", "✓", "✓", "✓"],
                  ["Booking support", "—", "✓", "✓"],
                  ["Priority support", "—", "✓", "✓"],
                  [
                    "Emergency escalation",
                    "Standard",
                    "Priority",
                    "Advanced",
                  ],
                  ["Dedicated contact", "—", "—", "✓"],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>

                    {row.slice(1).map((value, index) => (
                      <td
                        className={value === "✓" ? "check" : ""}
                        key={index}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="container">
          <div className="cta">
            <div className="eyebrow">Not sure which plan?</div>

            <h2>
              We'll help you choose the right level of coverage.
            </h2>

            <p className="lead">
              If you're unsure whether Essential, Advanced or Elevate is
              right for your website, contact us and we'll recommend the
              most appropriate setup.
            </p>

            <div className="actions">
              <Link href="/audit" className="btn red">
                Get a Free Website Audit →
              </Link>

              <Link href="/contact" className="btn light">
                Talk to the Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}