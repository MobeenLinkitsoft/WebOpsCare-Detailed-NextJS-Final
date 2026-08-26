"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react"; // 1. Import Suspense
import Shell from "@/components/Shell";
import PayPalSubscription from "@/components/PayPalSubscription";

const plans = {
  essential: {
    name: "Essential",
    price: 179,
    description: "For brochure sites and small businesses.",
    planId: process.env.NEXT_PUBLIC_PAYPAL_PLAN_ESSENTIAL || "",
    features: [
      "Monthly core/software updates",
      "Weekly backup routine",
      "Security scanning",
      "Uptime & SSL monitoring",
      "Minor fixes and content requests",
      "Monthly health summary",
    ],
  },

  advanced: {
    name: "Advanced",
    price: 249,
    description: "For growing businesses and lead-generation websites.",
    planId: process.env.NEXT_PUBLIC_PAYPAL_PLAN_ADVANCED || "",
    features: [
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

  elevate: {
    name: "Elevate",
    price: 319,
    description:
      "For ecommerce, high-traffic and mission-critical sites.",
    planId: process.env.NEXT_PUBLIC_PAYPAL_PLAN_ENTERPRISE || "",
    features: [
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
};

type PlanKey = keyof typeof plans;

// 2. Rename your main function to something else (e.g., CheckoutContent)
function CheckoutContent() {
  const searchParams = useSearchParams();

  const selectedPlan = searchParams.get("plan");

  const planKey: PlanKey =
    selectedPlan && selectedPlan in plans
      ? (selectedPlan as PlanKey)
      : "advanced";

  const plan = plans[planKey];

  return (
    <Shell>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">Secure checkout</div>

          <h1>Start your managed website plan.</h1>

          <p className="lead">
            You're one step away from getting your website properly
            maintained, monitored and supported.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Link href="/plans" className="checkoutBack">
            ← Back to plans
          </Link>

          <div className="checkoutGrid">
            {/* LEFT SIDE */}
            <section className="checkoutSummary">
              <div className="eyebrow">WebOpsCare subscription</div>

              <h2>{plan.name}</h2>

              <p className="intro">
                {plan.description}
              </p>

              <div className="selectedPlan card soft">
                <div>
                  <span>Selected plan</span>

                  <strong>{plan.name}</strong>
                </div>

                <div className="selectedPrice">
                  <strong>${plan.price}</strong>

                  <span>/month</span>
                </div>
              </div>

              <h3>What's included</h3>

              <ul className="features checkoutFeatures">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>

            {/* RIGHT SIDE */}
            <section className="paymentCard card">
              <div className="paymentHeader">
                <span>Secure checkout</span>

                <strong>PayPal</strong>
              </div>

              <h2>Complete your subscription</h2>

              <p className="intro">
                You'll securely approve your recurring{" "}
                <strong>{plan.name}</strong> subscription through
                PayPal.
              </p>

              {plan.planId ? (
                <PayPalSubscription
                  planId={plan.planId}
                  planName={plan.name}
                />
              ) : (
                <div className="paymentWarning">
                  <strong>
                    PayPal plan ID is not configured.
                  </strong>

                  <p>
                    Add the PayPal plan ID for the{" "}
                    {plan.name} plan to your environment file.
                  </p>
                </div>
              )}

              <div className="paymentTrust">
                <span>✓</span>

                <p>
                  Recurring subscription. You can manage or cancel
                  your subscription through your PayPal account.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Shell>
  );
}

// 3. Export a new default component that wraps your logic in Suspense
export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        Loading checkout details...
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}