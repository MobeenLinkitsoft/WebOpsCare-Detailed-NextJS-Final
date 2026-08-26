"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";

import Shell from "@/components/Shell";
import PayPalSubscription from "@/components/PayPalSubscription";

const plans = {
  essential: {
    name: "Essential",
    price: 179,
    description: "For brochure sites and small businesses.",

    planId:
      process.env.NEXT_PUBLIC_PAYPAL_PLAN_ESSENTIAL || "",

    hostingPlanIds: {
      49:
        process.env.NEXT_PUBLIC_PAYPAL_PLAN_ESSENTIAL_HOSTING_49 ||
        "",
      79:
        process.env.NEXT_PUBLIC_PAYPAL_PLAN_ESSENTIAL_HOSTING_79 ||
        "",
      99:
        process.env.NEXT_PUBLIC_PAYPAL_PLAN_ESSENTIAL_HOSTING_99 ||
        "",
    },

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
    description:
      "For growing businesses and lead-generation websites.",

    planId:
      process.env.NEXT_PUBLIC_PAYPAL_PLAN_ADVANCED || "",

    hostingPlanIds: {
      49:
        process.env.NEXT_PUBLIC_PAYPAL_PLAN_ADVANCED_HOSTING_49 ||
        "",
      79:
        process.env.NEXT_PUBLIC_PAYPAL_PLAN_ADVANCED_HOSTING_79 ||
        "",
      99:
        process.env.NEXT_PUBLIC_PAYPAL_PLAN_ADVANCED_HOSTING_99 ||
        "",
    },

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

    planId:
      process.env.NEXT_PUBLIC_PAYPAL_PLAN_ELEVATE || "",

    hostingPlanIds: {
      49:
        process.env.NEXT_PUBLIC_PAYPAL_PLAN_ELEVATE_HOSTING_49 ||
        "",
      79:
        process.env.NEXT_PUBLIC_PAYPAL_PLAN_ELEVATE_HOSTING_79 ||
        "",
      99:
        process.env.NEXT_PUBLIC_PAYPAL_PLAN_ELEVATE_HOSTING_99 ||
        "",
    },

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

const hostingPlans = [
  {
    id: "starter",
    price: 49,
    name: "Hosting Starter",
    description:
      "Reliable hosting for smaller business websites.",

    features: [
      "Managed website hosting",
      "SSL included",
      "Daily backups",
      "Basic uptime monitoring",
    ],
  },

  {
    id: "business",
    price: 79,
    name: "Hosting Business",
    description:
      "More resources for growing business websites.",

    features: [
      "Everything in Starter",
      "More server resources",
      "Performance optimization",
      "Priority hosting support",
      "Advanced monitoring",
    ],
  },

  {
    id: "performance",
    price: 99,
    name: "Hosting Performance",
    description:
      "Higher-performance infrastructure for demanding sites.",

    features: [
      "Everything in Business",
      "High-performance infrastructure",
      "Enhanced caching",
      "Priority resource allocation",
      "Advanced performance monitoring",
    ],
  },
];

type PlanKey = keyof typeof plans;

type HostingId =
  | "starter"
  | "business"
  | "performance";

function CheckoutContent() {
  const searchParams = useSearchParams();

  const selectedPlan =
    searchParams.get("plan");

  const planKey: PlanKey =
    selectedPlan && selectedPlan in plans
      ? (selectedPlan as PlanKey)
      : "advanced";

  const plan = plans[planKey];

  const [selectedHosting, setSelectedHosting] =
    useState<HostingId | null>(null);

  const hosting = useMemo(() => {
    return hostingPlans.find(
      (item) => item.id === selectedHosting
    );
  }, [selectedHosting]);

  const hostingPrice =
    hosting?.price || 0;

  const monthlyTotal =
    plan.price + hostingPrice;

  /*
   * THIS IS THE IMPORTANT PART.
   *
   * Without hosting:
   * use the normal base PayPal plan.
   *
   * With hosting:
   * use the PayPal plan that was created
   * specifically for Base Plan + Hosting.
   */
  const paypalPlanId = useMemo(() => {
    if (!hosting) {
      return plan.planId;
    }

    return plan.hostingPlanIds[
      hosting.price as 49 | 79 | 99
    ];
  }, [hosting, plan]);

  const paypalPlanName = hosting
    ? `${plan.name} + ${hosting.name}`
    : plan.name;

  return (
    <Shell>
      {/* HERO */}
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">
            Secure checkout
          </div>

          <h1>
            Start your managed website plan.
          </h1>

          <p className="lead">
            You're one step away from getting your
            website properly maintained, monitored
            and supported.
          </p>
        </div>
      </section>

      {/* CHECKOUT */}
      <section className="section">
        <div className="container">

          <Link
            href="/plans"
            className="checkoutBack"
          >
            ← Back to plans
          </Link>

          <div className="checkoutGrid">

            {/* LEFT */}
            <section className="checkoutSummary">

              <div className="eyebrow">
                WebOpsCare subscription
              </div>

              <h2>{plan.name}</h2>

              <p className="intro">
                {plan.description}
              </p>

              {/* BASE PLAN */}
              <div className="selectedPlan card soft">

                <div>
                  <span>
                    Selected plan
                  </span>

                  <strong>
                    {plan.name}
                  </strong>
                </div>

                <div className="selectedPrice">
                  <strong>
                    ${plan.price}
                  </strong>

                  <span>
                    /month
                  </span>
                </div>

              </div>

              <h3>
                What's included
              </h3>

              <ul className="features checkoutFeatures">
                {plan.features.map(
                  (feature) => (
                    <li key={feature}>
                      {feature}
                    </li>
                  )
                )}
              </ul>

              {/* HOSTING */}
              <div className="checkoutAddon">

                <div className="eyebrow">
                  Optional add-on
                </div>

                <h2>
                  Managed Website Hosting
                </h2>

                <p className="intro">
                  Keep your website hosted on
                  infrastructure managed alongside
                  your WebOpsCare subscription.
                </p>

                {/* NO HOSTING */}
                <button
                  type="button"
                  className={`hostingOption ${
                    selectedHosting === null
                      ? "hostingOptionActive"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedHosting(null)
                  }
                >

                  <div className="hostingOptionTop">

                    <div>
                      <span className="hostingRadio">
                        {selectedHosting === null
                          ? "✓"
                          : ""}
                      </span>

                      <strong>
                        No hosting
                      </strong>
                    </div>

                    <strong>
                      $0/mo
                    </strong>

                  </div>

                  <p>
                    I'll use my existing hosting
                    provider.
                  </p>

                </button>

                {/* HOSTING OPTIONS */}
                <div className="hostingOptions">

                  {hostingPlans.map(
                    (hostingPlan) => {

                      const active =
                        selectedHosting ===
                        hostingPlan.id;

                      return (
                        <button
                          type="button"
                          key={hostingPlan.id}
                          className={`hostingOption ${
                            active
                              ? "hostingOptionActive"
                              : ""
                          }`}
                          onClick={() =>
                            setSelectedHosting(
                              hostingPlan.id as HostingId
                            )
                          }
                        >

                          <div className="hostingOptionTop">

                            <div>
                              <span className="hostingRadio">
                                {active
                                  ? "✓"
                                  : ""}
                              </span>

                              <strong>
                                {hostingPlan.name}
                              </strong>
                            </div>


                          </div>
                            <div className="hostingPrice">
                              <strong>
                               {"      "} ${hostingPlan.price}
                              </strong>

                              <span>
                                /mo
                              </span>
                            </div>

                          <p>
                            {hostingPlan.description}
                          </p>

                          <ul className="hostingFeatures">

                            {hostingPlan.features.map(
                              (feature) => (
                                <li
                                  key={feature}
                                >
                                  {feature}
                                </li>
                              )
                            )}

                          </ul>

                        </button>
                      );
                    }
                  )}

                </div>

              </div>

            </section>

            {/* RIGHT */}
            <section className="paymentCard card">

              <div className="paymentHeader">

                <span>
                  Order summary
                </span>

                <strong>
                  Monthly
                </strong>

              </div>

              <h2>
                Complete your subscription
              </h2>

              {/* ORDER SUMMARY */}
              <div className="orderSummary">

                <div className="orderRow">
                  <span>
                    {plan.name}
                  </span>

                  <strong>
                    ${plan.price}/mo
                  </strong>
                </div>

                <div className="orderRow">

                  <span>
                    Hosting
                    {hosting
                      ? ` — ${hosting.name}`
                      : ""}
                  </span>

                  <strong>
                    {hosting
                      ? `$${hosting.price}/mo`
                      : "$0/mo"}
                  </strong>

                </div>

                <div className="orderDivider" />

                <div className="orderTotal">

                  <div>
                    <span>
                      Total
                    </span>

                    <small>
                      Recurring monthly
                    </small>
                  </div>

                  <strong>
                    ${monthlyTotal}/mo
                  </strong>

                </div>

              </div>

              <p className="intro">

                You'll securely approve your
                recurring{" "}

                <strong>
                  {paypalPlanName}
                </strong>{" "}

                subscription through PayPal.

              </p>

              {/* PAYPAL */}
              {paypalPlanId ? (

                <PayPalSubscription
                  key={paypalPlanId}
                  planId={paypalPlanId}
                  planName={paypalPlanName}
                />

              ) : (

                <div className="paymentWarning">

                  <strong>
                    PayPal plan ID is not configured.
                  </strong>

                  <p>
                    The selected combination does
                    not have a PayPal subscription
                    plan configured.
                  </p>

                </div>

              )}

              <div className="paymentTrust">

                <span>
                  ✓
                </span>

                <p>
                  Recurring subscription. You can
                  manage or cancel your subscription
                  through your PayPal account.
                </p>

              </div>

            </section>

          </div>

        </div>
      </section>
    </Shell>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            padding: "100px 20px",
            textAlign: "center",
          }}
        >
          Loading checkout details...
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}