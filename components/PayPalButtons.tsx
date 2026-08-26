"use client";
import { useEffect, useRef, useState } from "react";
declare global {
  interface Window {
    paypal?: any;
  }
}
export default function PayPalButtons({
  planId,
  planName,
}: {
  planId?: string;
  planName: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  
  useEffect(() => {
    alert(1);
  }, []);

  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
    if (!id || !planId) return;
    const old = document.getElementById(
      "paypal-sdk",
    ) as HTMLScriptElement | null;
    if (old) {
      if (window.paypal) setReady(true);
      else old.addEventListener("load", () => setReady(true));
      return;
    }
    const s = document.createElement("script");
    s.id = "paypal-sdk";
    s.src = `https://www.paypal.com/sdk/js?client-id=${id}&vault=true&intent=subscription`;
    s.async = true;
    s.onload = () => setReady(true);
    alert(s.src);
    document.body.appendChild(s);
  }, [planId]);
  useEffect(() => {
    if (!ready || !window.paypal || !ref.current || !planId) return;
    ref.current.innerHTML = "";
    const buttons = window.paypal.Buttons({
      style: { layout: "vertical", shape: "rect", label: "subscribe" },
      createSubscription: (_: unknown, actions: any) => {
        console.log("========== PAYPAL DEBUG ==========");
        console.log("PLAN ID:", planId);
        console.log("CLIENT ID:", process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID);
        console.log("==================================");

        return actions.subscription.create({
          plan_id: planId,
        });
      },
      onApprove: (data: any) =>
        alert(`Subscription started: ${data.subscriptionID}`),
      onError: (e: any) => {
        console.error(e);
        alert("PayPal checkout could not be completed.");
      },
    });
    buttons.render(ref.current);
    return () => {
      if (ref.current) ref.current.innerHTML = "";
    };
  }, [ready, planId]);
  return planId ? (
    <div ref={ref} />
  ) : (
    <a className="btn red full" href="/contact">
      Request {planName} plan
    </a>
  );
}
