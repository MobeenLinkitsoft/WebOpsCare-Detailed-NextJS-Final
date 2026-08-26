import type { Metadata } from "next";
import PayPalProvider from "@/components/PayPalProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebOpsCare | Website Maintenance, Security & Support",
  description:
    "Managed website maintenance, security, backups, monitoring, performance and technical support.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PayPalProvider>{children}</PayPalProvider>
      </body>
    </html>
  );
}
