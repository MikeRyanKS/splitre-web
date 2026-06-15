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
const LEGAL_EMAIL = "legal@splitre.app";
const APP_NAME = "SplitRE";

export default function PrivacyPage() {
  return (
    <div className="bg-white py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Effective date: {EFFECTIVE_DATE}</p>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">

          <section>
            <p>
              {COMPANY} ("we," "us," or "our") operates {APP_NAME} at splitre.app and
              app.splitre.app (collectively, the "Service"). This Privacy Policy
              describes what information we collect, how we use it, with whom we share it,
              how long we keep it, and the rights you have over it. It applies to all
              visitors of our marketing website and to registered subscribers of the
              {" "}{APP_NAME} application.
            </p>
            <p className="mt-3">
              By using the Service you agree to the practices described in this policy. If you
              do not agree, please do not use the Service.
            </p>
          </section>

          {/* ─── 1. Information We Collect ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information we collect</h2>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">1.1 Account and billing information</h3>
            <p>
              When you sign up or manage your subscription we collect: your full name,
              email address, brokerage name, and billing details. Payment card numbers are
              processed directly by Stripe, Inc. and are never stored on our servers. We
              retain only the last four digits of your card, card type, and expiration date
              as returned by Stripe for display purposes.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">1.2 Brokerage data you enter</h3>
            <p>
              Commission plans, agent profiles (names, license numbers, split percentages,
              annual cap amounts), deal records (property addresses, sale prices, gross
              commission income, buyer/seller sides), earnings statements, and
              QuickBooks Online sync logs are stored on your behalf. This is your data;
              we act as a data processor, not a data controller, of anything you enter
              about your agents and transactions.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">1.3 Usage and log data</h3>
            <p>
              Our servers automatically record: IP address, browser type and version,
              operating system, referring URL, pages viewed, timestamps, and error events.
              We use this data to maintain uptime, diagnose bugs, and understand aggregate
              feature usage. Log data is retained for up to 90 days.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">1.4 Analytics</h3>
            <p>
              We use website analytics to understand how visitors interact with our
              marketing pages (splitre.app). Analytics data is collected in aggregate form
              and is not tied to individually identifiable visitors where avoidable. We
              do not deploy advertising networks or behavioral retargeting pixels on our
              website or inside the application.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">1.5 Cookies and local storage</h3>
            <p>
              We use strictly necessary cookies for session management and authentication
              tokens. We do not use third-party advertising cookies. The application may
              store user preferences (such as sidebar state or selected date ranges) in
              your browser&apos;s local storage; this data never leaves your device.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">1.6 Communications</h3>
            <p>
              If you email us at {LEGAL_EMAIL} or our support addresses, we retain the
              content of that correspondence to resolve your issue and improve the Service.
            </p>
          </section>

          {/* ─── 2. How We Use Your Information ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How we use your information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Provide, operate, and maintain the Service</li>
              <li>Process your subscription payments through Stripe</li>
              <li>Sync deal and commission data to QuickBooks Online at your direction</li>
              <li>
                Send transactional emails you have opted into by using the Service:
                deal-confirmed notifications, cap-reached alerts, QuickBooks sync
                failure warnings, and billing receipts. These emails are sent from
                noreply@splitre.app and are necessary for the Service to function.
              </li>
              <li>
                Send product update and marketing emails to active subscribers. You may
                opt out of marketing emails at any time using the unsubscribe link in any
                such email or by emailing {LEGAL_EMAIL}. Opting out of marketing emails
                does not affect transactional emails related to your account.
              </li>
              <li>Respond to support requests and enforce our Terms of Service</li>
              <li>Detect, investigate, and prevent fraud, abuse, or security incidents</li>
              <li>
                Analyze aggregate, de-identified usage patterns to improve existing
                features and prioritize new ones
              </li>
              <li>Comply with applicable law and legal process</li>
            </ul>
            <p className="mt-4 font-medium">
              We do not use your data to train AI or machine-learning models. We do
              not sell, rent, or share your personal data or brokerage data with
              third parties for their marketing purposes.
            </p>
          </section>

          {/* ─── 3. Sub-Processors ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Third-party sub-processors</h2>
            <p>
              We engage a limited number of trusted sub-processors to operate the Service.
              Each sub-processor is bound by data protection agreements and is permitted
              to use your data only to perform services on our behalf.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-800">Provider</th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-800">Purpose</th>
                    <th className="text-left py-2 font-semibold text-gray-800">Data location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2 pr-4 font-medium">Supabase, Inc.</td>
                    <td className="py-2 pr-4">Database hosting, authentication, row-level security</td>
                    <td className="py-2">United States</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Stripe, Inc.</td>
                    <td className="py-2 pr-4">Payment processing and subscription management</td>
                    <td className="py-2">United States</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Resend, Inc.</td>
                    <td className="py-2 pr-4">Transactional and marketing email delivery</td>
                    <td className="py-2">United States</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Cloudflare, Inc.</td>
                    <td className="py-2 pr-4">Content delivery network, DNS, DDoS protection</td>
                    <td className="py-2">Global edge (US primary)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Intuit Inc. (QuickBooks Online)</td>
                    <td className="py-2 pr-4">Accounting sync — accessed only using your own OAuth credentials at your instruction</td>
                    <td className="py-2">United States</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              We do not share your data with these providers beyond what is necessary to
              deliver the specific service they provide. If you disconnect your QuickBooks
              integration, we immediately stop transmitting data to Intuit on your behalf.
            </p>
          </section>

          {/* ─── 4. Data Security ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data security</h2>
            <p>
              We implement the following technical and organizational safeguards to protect
              your data:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>All data is encrypted in transit using TLS 1.2 or higher</li>
              <li>All data is encrypted at rest using AES-256</li>
              <li>Row-level security policies in our database ensure that your brokerage data is logically isolated from other customers&apos; data</li>
              <li>Production system access is limited to authorized personnel using multi-factor authentication</li>
              <li>Stripe handles all payment data; we never receive or store raw card numbers</li>
              <li>We perform regular dependency audits and apply security patches promptly</li>
            </ul>
            <p className="mt-4">
              Despite these measures, no system is perfectly secure. If you discover a
              security vulnerability, please report it promptly to{" "}
              <a href={`mailto:${LEGAL_EMAIL}`} className="text-indigo-600 hover:underline">{LEGAL_EMAIL}</a>{" "}
              so we can address it. We do not publicly disclose security issues until a fix
              is in place.
            </p>
          </section>

          {/* ─── 5. Data Retention ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data retention and deletion</h2>
            <p>
              We retain your account data for as long as your subscription is active.
              After cancellation or account termination:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                Your brokerage data (commission plans, deals, agent records) is preserved
                and accessible for 30 calendar days so you can export it. After that
                30-day window, all brokerage data is permanently deleted from our systems.
              </li>
              <li>
                You can export all your data at any time by going to{" "}
                <strong>app.splitre.app › Settings › Data Export</strong>. CSV downloads
                are available for deals, agent records, and commission plans.
              </li>
              <li>
                Billing records and invoices are retained for 7 years as required by
                US tax law.
              </li>
              <li>
                Server log data is retained for up to 90 days and then automatically
                purged.
              </li>
            </ul>
            <p className="mt-4">
              To request immediate deletion of your personal data (outside the standard
              30-day window), contact us at{" "}
              <a href={`mailto:${LEGAL_EMAIL}`} className="text-indigo-600 hover:underline">{LEGAL_EMAIL}</a>.
              We will process deletion requests within 30 days. Note that deletion of
              billing records may be limited by applicable tax and accounting law.
            </p>
          </section>

          {/* ─── 6. California Privacy Rights (CCPA) ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. California privacy rights (CCPA / CPRA)</h2>
            <p>
              If you are a California resident, the California Consumer Privacy Act (CCPA),
              as amended by the California Privacy Rights Act (CPRA), grants you the
              following rights with respect to your personal information:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-3">
              <li>
                <strong>Right to Know.</strong> You may request a disclosure of: (a) the
                categories of personal information we have collected about you; (b) the
                categories of sources from which we collected it; (c) the business purpose
                for collecting it; (d) the categories of third parties with whom we share
                it; and (e) the specific pieces of personal information we hold about you.
              </li>
              <li>
                <strong>Right to Delete.</strong> You may request deletion of personal
                information we have collected from you, subject to certain exceptions
                (such as information required to complete a transaction or comply with
                legal obligations).
              </li>
              <li>
                <strong>Right to Correct.</strong> You may request that we correct
                inaccurate personal information we hold about you.
              </li>
              <li>
                <strong>Right to Opt Out of Sale or Sharing.</strong> We do not sell or
                share your personal information for cross-context behavioral advertising.
                There is nothing to opt out of under this right, but we include this
                disclosure for transparency.
              </li>
              <li>
                <strong>Right to Non-Discrimination.</strong> We will not discriminate
                against you for exercising any of your CCPA rights.
              </li>
              <li>
                <strong>Right to Limit Use of Sensitive Personal Information.</strong>{" "}
                We do not use sensitive personal information for purposes beyond those
                necessary to provide the Service.
              </li>
            </ul>
            <p className="mt-4">
              <strong>How to submit a California rights request:</strong> Email{" "}
              <a href={`mailto:${LEGAL_EMAIL}`} className="text-indigo-600 hover:underline">{LEGAL_EMAIL}</a>{" "}
              with the subject line "California Privacy Rights Request." Include your name,
              email address associated with your account, and a description of the right
              you wish to exercise. We will verify your identity and respond within 45
              calendar days. If we need more time (up to an additional 45 days), we will
              notify you in writing.
            </p>
            <p className="mt-3">
              You may designate an authorized agent to make a request on your behalf by
              providing written authorization and verifying your identity directly with us.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">Categories of personal information collected</h3>
            <p>In the preceding 12 months, we have collected the following CCPA categories:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li><strong>Identifiers</strong> — name, email address, IP address, account ID</li>
              <li><strong>Commercial information</strong> — subscription plan, billing history, transaction records you enter</li>
              <li><strong>Internet or network activity</strong> — server logs, feature usage, error reports</li>
              <li><strong>Professional or employment-related information</strong> — brokerage name, agent data you enter</li>
            </ul>
            <p className="mt-3">
              We do not collect Social Security numbers, financial account credentials,
              biometric data, geolocation data, health information, or the contents of
              private communications.
            </p>
          </section>

          {/* ─── 7. Children's Privacy ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children&apos;s privacy</h2>
            <p>
              The Service is a business tool intended for use by adults (18 years of age
              or older). We do not knowingly collect personal data from children under 13.
              If you believe a child under 13 has provided us personal data, contact us at{" "}
              <a href={`mailto:${LEGAL_EMAIL}`} className="text-indigo-600 hover:underline">{LEGAL_EMAIL}</a>{" "}
              and we will promptly delete it.
            </p>
          </section>

          {/* ─── 8. Do Not Track ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Do Not Track signals</h2>
            <p>
              Some browsers send a "Do Not Track" (DNT) signal to websites. Because there
              is no common industry standard for responding to DNT signals, we do not
              currently alter our data collection practices in response to DNT signals.
              We do not engage in cross-site tracking regardless of DNT status.
            </p>
          </section>

          {/* ─── 9. Links to Other Sites ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Links to third-party sites</h2>
            <p>
              Our website and application may contain links to third-party websites
              (such as QuickBooks Online, Stripe billing portal, or external documentation).
              We are not responsible for the privacy practices of those sites and encourage
              you to review their privacy policies before sharing any personal information.
            </p>
          </section>

          {/* ─── 10. Changes ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we make material
              changes, we will update the effective date at the top of this page and notify
              active subscribers by email at least 14 days before the changes take effect.
              If you continue to use the Service after the effective date of the revised
              policy, you accept the updated terms.
            </p>
          </section>

          {/* ─── 11. Contact ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact us</h2>
            <p>
              For privacy-related questions, data access requests, or to exercise your
              rights, please contact:
            </p>
            <div className="mt-3 p-4 bg-gray-50 rounded-lg text-sm">
              <p className="font-semibold text-gray-900">{COMPANY}</p>
              <p>8 The Green, Suite 20261</p>
              <p>Dover, Delaware 19901</p>
              <p>United States</p>
              <p className="mt-2">
                Email:{" "}
                <a href={`mailto:${LEGAL_EMAIL}`} className="text-indigo-600 hover:underline">{LEGAL_EMAIL}</a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
