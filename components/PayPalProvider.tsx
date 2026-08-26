"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function PayPalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  if (!clientId) {
    console.error(
      "NEXT_PUBLIC_PAYPAL_CLIENT_ID is missing"
    );

    return <>{children}</>;
  }

  console.log(
    "PayPal SDK Client ID:",
    clientId
  );

  return (
    <PayPalScriptProvider
      options={{
        clientId,
        vault: true,
        intent: "subscription",
        currency: "USD",
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}