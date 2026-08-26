"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Shell from "@/components/Shell";

export default function CheckoutSuccess() {
  const searchParams = useSearchParams();

  const plan = searchParams.get("plan");
  const subscription = searchParams.get("subscription");

  return (
    <Shell>
      <section className="pageHero">
        <div className="container">
          <div className="eyebrow">Subscription confirmed</div>

          <h1>Welcome to WebOpsCare.</h1>

          <p className="lead">
            Your website operations plan is now active.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="successCard card">
            <div className="successIcon">✓</div>

            <div className="eyebrow">
              Payment successful
            </div>

            <h2>
              You're officially covered.
            </h2>

            <p className="intro">
              Your{" "}
              <strong>
                {plan || "managed website"}
              </strong>{" "}
              subscription has been successfully approved
              through PayPal.
            </p>

            {subscription && (
              <div className="subscriptionReference">
                <span>Subscription ID</span>

                <strong>{subscription}</strong>
              </div>
            )}

            <div className="successActions">
              <Link
                href="/dashboard"
                className="btn red"
              >
                Go to Client Portal →
              </Link>

              <Link
                href="/"
                className="btn light"
              >
                Back to website
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}