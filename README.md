# WebOpsCare — Detailed Next.js Website

This is an original WebOpsCare implementation inspired by the information architecture and service categories visible on the referenced website. It is NOT a verbatim copy of that site's text, branding, testimonials, images, or source code.

## Included routes

- /
- /about
- /services
- /services/security
- /services/wordpress
- /services/shopify
- /services/ecommerce
- /services/management
- /services/performance
- /process
- /plans
- /works
- /guides
- /guides/maintenance-cost
- /guides/security-basics
- /guides/hosting-vs-maintenance
- /guides/website-support
- /audit
- /checklist
- /faq
- /contact
- /login
- /dashboard
- /case-studies/healthcare
- /terms
- /privacy

## Install

npm install
npm run dev

## Production

npm run build
npm start

## PayPal

Create recurring PayPal Products/Plans and put their Plan IDs into .env.local:

NEXT_PUBLIC_PAYPAL_CLIENT_ID=...
NEXT_PUBLIC_PAYPAL_PLAN_ESSENTIAL=...
NEXT_PUBLIC_PAYPAL_PLAN_ADVANCED=...
NEXT_PUBLIC_PAYPAL_PLAN_ELEVATE=...

The browser uses only the public PayPal client ID. Production subscription verification and webhooks should be implemented server-side before accepting real subscriptions.

## Before launch

1. Replace illustrative metrics and case studies with verified information.
2. Add your real company address/contact details.
3. Connect forms to a CRM/email/database.
4. Connect /login to the Phase 2 authentication/client portal.
5. Add server-side PayPal webhook handling.
6. Add your legally reviewed Terms, Privacy, Refund and Cookie policies.
7. Add real emergency-support staffing and only advertise response commitments you can actually provide.
8. Replace placeholder domain/email values.
