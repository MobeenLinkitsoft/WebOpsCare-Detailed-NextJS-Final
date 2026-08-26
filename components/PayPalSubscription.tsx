// "use client";

// import {
//   PayPalButtons,
// } from "@paypal/react-paypal-js";

// import { useRouter } from "next/navigation";

// interface Props {
//   planId: string;
//   planName: string;
// }

// export default function PayPalSubscription({
//   planId,
//   planName,
// }: Props) {
//   const router = useRouter();

//   console.log(
//     "========================================"
//   );

//   console.log(
//     "PAYPAL SUBSCRIPTION COMPONENT"
//   );

//   console.log(
//     "Plan Name:",
//     planName
//   );

//   console.log(
//     "Plan ID:",
//     planId
//   );

//   console.log(
//     "Client ID:",
//     process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
//   );

//   console.log(
//     "========================================"
//   );

//   if (!planId) {
//     return (
//       <div className="paymentWarning">
//         PayPal plan ID is missing.
//       </div>
//     );
//   }

//   return (
//     <div>
//       <PayPalButtons
//         style={{
//           layout: "vertical",
//           shape: "rect",
//           label: "subscribe",
//         }}

//         createSubscription={(_, actions) => {
//           console.log(
//             "========== CREATING PAYPAL SUBSCRIPTION =========="
//           );

//           console.log(
//             "PLAN ID:",
//             planId
//           );

//           console.log(
//             "CLIENT ID:",
//             process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
//           );

//           return actions.subscription.create({
//             plan_id: planId,
//           });
//         }}

//         onApprove={async (data) => {
//           console.log(
//             "PAYPAL SUBSCRIPTION APPROVED"
//           );

//           console.log(
//             "Subscription ID:",
//             data.subscriptionID
//           );

//           const subscriptionId =
//             data.subscriptionID || "";

//           router.push(
//             `/checkout/success?plan=${encodeURIComponent(
//               planName
//             )}&subscription=${encodeURIComponent(
//               subscriptionId
//             )}`
//           );
//         }}

//         onCancel={() => {
//           console.log(
//             "PayPal subscription cancelled"
//           );
//         }}

//         onError={(error) => {
//           console.error(
//             "========================================"
//           );

//           console.error(
//             "PAYPAL SUBSCRIPTION ERROR"
//           );

//           console.error(
//             error
//           );

//           console.error(
//             "Plan ID:",
//             planId
//           );

//           console.error(
//             "Client ID:",
//             process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
//           );

//           console.error(
//             "========================================"
//           );
//         }}
//       />
//     </div>
//   );
// }


"use client";

import { PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";

interface Props {
  planId: string;
  planName: string;
}

export default function PayPalSubscription({
  planId,
  planName,
}: Props) {
  const router = useRouter();

  console.log(
    "========== PAYPAL SUBSCRIPTION =========="
  );

  console.log("Plan:", planName);
  console.log("PayPal Plan ID:", planId);

  console.log(
    "========================================="
  );

  return (
    <div>
      <PayPalButtons
        style={{
          layout: "vertical",
          shape: "rect",
          label: "subscribe",
        }}

        createSubscription={(_, actions) => {
          console.log(
            "Creating PayPal subscription..."
          );

          console.log(
            "Using PayPal Plan ID:",
            planId
          );

          return actions.subscription.create({
            plan_id: planId,
          });
        }}

        onApprove={async (data) => {
          const subscriptionId =
            data.subscriptionID;

          console.log(
            "PayPal subscription approved:",
            subscriptionId
          );

          router.push(
            `/checkout/success?plan=${encodeURIComponent(
              planName
            )}&subscription=${encodeURIComponent(
              subscriptionId || ""
            )}`
          );
        }}

        onCancel={() => {
          console.log(
            "PayPal subscription cancelled"
          );
        }}

        onError={(error) => {
          console.error(
            "PayPal subscription error:",
            error
          );
        }}
      />
    </div>
  );
}