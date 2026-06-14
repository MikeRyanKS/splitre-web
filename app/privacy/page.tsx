import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "SplitRE Privacy Policy — how Keplify LLC collects, uses, and protects your brokerage data. Your data is never sold or shared with third parties.",
  alternates: { canonical: "https://splitre.app/privacy" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "June 14, 2026";
const COMPANY = "Keplify LLC";
const EMAIL = "mike@keplify.com";
const APP_NAME = "SplitRE";
const SITE = "splitre.app";

export default function PrivacyPage() {
  return (
    <div className="bg-white py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Effective date: {EFFECTIVE_DATE}</p>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">

          <section>
            <p>
              {COMPANY} ("we," "us," or "our") operates {APP_NAME} at {SITE} and
              app.splitre.app (collectively, the "Service"). This Privacy Policy explains
              what information we collect, how we use it, and the choices you have. By
              using the Service, you agree to this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Information we collect</h2>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Account information</h3>
            <p>
              When you create an account we collect your name, email address, brokerage
              name, and payment information (processed by Stripe — we never store card
              numbers).
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Brokerage data you enter</h3>
            <p>
              Commission plans, agent names and splits, deal details (addresses, sale
              prices, GCI amounts), and QuickBooks sync logs are stored on your behalf.
              This is your data; we act as a processor, not a controller, of anything
              you enter about your agents and transactions.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Usage data</h3>
            <p>
              We collect server logs, feature usage patterns, and error reports to
              improve the Service. This data is aggregated and not linked to individual
              users where avoidable.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Cookies and local storage</h3>
            <p>
              We use strictly necessary cookies for session management and
              authentication. We do not use advertising cookies or third-party tracking
              pixels. Analytics (if enabled) use privacy-preserving, aggregate-only
              data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. How we use your information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide and maintain the Service</li>
              <li>To process payments via Stripe</li>
              <li>To sync deal data to QuickBooks Online on your instruction</li>
              <li>To send transactional emails (deal confirmations, cap alerts, billing receipts) from noreply@splitre.app</li>
              <li>To respond to support requests you send to {EMAIL}</li>
              <li>To detect and prevent fraud or abuse</li>
              <li>To improve the Service using aggregated, de-identified usage data</li>
            </ul>
            <p className="mt-4">
              We do not use your data to train AI models. We do not sell, rent, or
              share your personal data or brokerage data with third parties for
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Third-party services</h2>
            <p>We use a limited number of trusted sub-processors:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li><strong>Supabase</strong> — database hosting and authentication (data stored in the US)</li>
              <li><strong>Stripe</strong> — payment processing (subject to Stripe's Privacy Policy)</li>
              <li><strong>Resend</strong> — transactional email delivery</li>
              <li><strong>Cloudflare</strong> — CDN, DNS, and DDoS protection</li>
              <li><strong>Intuit QuickBooks Online</strong> — only accessed using your own OAuth credentials at your instruction</li>
            </ul>
            <p className="mt-4">
              We do not share your data with these providers beyond what is necessary
              to operate the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Data security</h2>
            <p>
              All data is encrypted in transit (TLS 1.2+) and at rest (AES-256). We
              use row-level security in our database to ensure your brokerage data is
              fully isolated from other customers' data. Access to production systems
              is limited to authorized personnel.
            </p>
            <p className="mt-3">
              Despite these measures, no system is perfectly secure. If you discover a
              security vulnerability, please report it to {EMAIL}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Data retention</h2>
            <p>
              We retain your data for as long as your account is active. If your
              account is cancelled or paused, your data is preserved for 30 days, after
              which it may be deleted. You may request immediate deletion by contacting
              us at {EMAIL}. You can export all your data at any time using the CSV
              export feature.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Your rights</h2>
            <p>Depending on your location, you may have rights to:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data in a machine-readable format</li>
              <li>Object to certain uses of your data</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, email us at {EMAIL}. We respond within
              30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Children's privacy</h2>
            <p>
              The Service is intended for business use by adults (18+). We do not
              knowingly collect personal data from children under 13. If you believe a
              child has provided us personal data, contact us at {EMAIL} and we will
              delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we make
              material changes, we will update the effective date at the top and notify
              active subscribers by email at least 14 days before the changes take
              effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Contact</h2>
            <p>
              {COMPANY}<br />
              Incorporated in Delaware, USA<br />
              Email: <a href={`mailto:${EMAIL}`} className="text-indigo-600 hover:underline">{EMAIL}</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
