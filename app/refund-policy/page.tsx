import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund / Cancellation Policy",
  description:
    "SplitRE refund and cancellation policy — 7-day refunds, no long-term contracts, and a 30-day data export window after cancellation.",
  alternates: { canonical: "https://splitre.app/refund-policy" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "June 14, 2026";
const COMPANY = "Keplify LLC";
const BILLING_EMAIL = "billing@splitre.app";
const LEGAL_EMAIL = "legal@splitre.app";
const APP_NAME = "SplitRE";

export default function RefundPolicyPage() {
  return (
    <div className="bg-white py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Refund / Cancellation Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Effective date: {EFFECTIVE_DATE}</p>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">

          <section>
            <p>
              {COMPANY} wants you to feel confident using {APP_NAME}. This policy explains
              when you are entitled to a refund, how cancellation works, and what happens
              to your data after you cancel. If you have questions before or after making
              a payment, email us at{" "}
              <a href={`mailto:${BILLING_EMAIL}`} className="text-indigo-600 hover:underline">{BILLING_EMAIL}</a>.
            </p>
          </section>

          {/* ─── 1. Free Trial ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Free trial</h2>
            <p>
              All new accounts include a 14-day free trial. No credit card is required
              to start a trial. Your card is only charged when you actively choose a paid
              plan after the trial ends. If you do nothing during the trial period, your
              account will be paused — you will not be charged.
            </p>
          </section>

          {/* ─── 2. Refund Eligibility ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Refund eligibility</h2>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">2.1 Monthly subscriptions</h3>
            <p>
              If you are on a monthly plan and are not satisfied with {APP_NAME}, you may
              request a refund within <strong>7 calendar days of the billing date</strong>{" "}
              for that month&apos;s charge. Refund requests received after 7 calendar days
              will not be approved for the period already paid.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">2.2 Annual subscriptions</h3>
            <p>
              If you are on an annual plan, you may request a refund within{" "}
              <strong>7 calendar days of your most recent annual payment</strong>. Refund
              requests received after 7 calendar days of the annual payment date will not
              be approved.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">2.3 Refund amount</h3>
            <p>
              Approved refunds are issued for the amount paid, <strong>less payment
              processing fees charged by Stripe, Inc.</strong> (typically 2.9% + $0.30
              per transaction for US cards, or the rate applicable to your transaction).
              These fees are non-recoverable from our payment processor regardless of
              the reason for the refund, so they cannot be included in the refund amount.
            </p>
            <p className="mt-3">
              Example: if you paid $89.00 and a refund is approved, you would receive
              approximately $85.82 back ($89.00 minus ~$2.88 in Stripe processing fees
              on a typical US card transaction). The exact fee deducted will be stated
              in your refund confirmation email.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">2.4 Situations where refunds are not available</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Requests made more than 7 calendar days after the applicable payment date</li>
              <li>Accounts suspended or terminated for violations of our Terms of Service</li>
              <li>Partial-month or partial-year refunds for unused time within a billing period (we do not pro-rate)</li>
              <li>Add-ons or one-time fees, if any are introduced in the future and stated as non-refundable at the time of purchase</li>
            </ul>
          </section>

          {/* ─── 3. How to Request ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How to request a refund</h2>
            <p>To request a refund:</p>
            <ol className="list-decimal pl-5 mt-3 space-y-2">
              <li>
                Email{" "}
                <a href={`mailto:${BILLING_EMAIL}`} className="text-indigo-600 hover:underline">{BILLING_EMAIL}</a>{" "}
                within 7 calendar days of the payment you are disputing.
              </li>
              <li>
                Include the email address on your {APP_NAME} account and the approximate
                date of the charge. You do not need to provide a reason, but doing so
                helps us improve the product.
              </li>
              <li>
                We will confirm receipt within 1 business day and process approved refunds
                within 5 business days. Refunds are returned to the original payment method
                via Stripe. Depending on your card issuer, the credit may take 5 to 10
                business days to appear on your statement.
              </li>
            </ol>
          </section>

          {/* ─── 4. Cancellation ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cancellation</h2>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">4.1 How to cancel</h3>
            <p>
              You may cancel your subscription at any time by going to{" "}
              <strong>app.splitre.app › Settings › Billing</strong> and clicking
              "Cancel subscription." Cancellation takes effect at the end of your current
              billing period. You will not be charged for the next period. There are no
              cancellation fees and no minimum commitment.
            </p>
            <p className="mt-3">
              Alternatively, you can email{" "}
              <a href={`mailto:${BILLING_EMAIL}`} className="text-indigo-600 hover:underline">{BILLING_EMAIL}</a>{" "}
              and we will process your cancellation within 1 business day.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">4.2 Access after cancellation</h3>
            <p>
              After you cancel, your subscription remains active and fully functional
              through the end of the paid billing period. At the end of that period,
              your account will be downgraded to read-only mode. You will be able to
              view and export your data but will not be able to create new deals or
              invite agents.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">4.3 Data export window</h3>
            <p>
              After your subscription ends, your brokerage data is preserved for{" "}
              <strong>30 calendar days</strong>. During this window, you can download all
              your data by going to{" "}
              <strong>app.splitre.app › Settings › Data Export</strong>. The export
              includes:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>All deal records (CSV)</li>
              <li>Agent roster and commission plans (CSV)</li>
              <li>Earnings statements (PDF)</li>
              <li>QuickBooks sync history (CSV)</li>
            </ul>
            <p className="mt-3">
              After the 30-day window closes, all brokerage data is permanently and
              irreversibly deleted from our systems. We cannot recover data after deletion.
              We strongly recommend exporting your data before the window expires. We will
              send reminder emails at 7 days and 3 days before the deletion date.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">4.4 Reactivation</h3>
            <p>
              If you reactivate your subscription within the 30-day data export window,
              your account and all brokerage data are fully restored with no interruption.
              Reactivation after the 30-day window is possible but your data will have
              been deleted and cannot be recovered.
            </p>
          </section>

          {/* ─── 5. Disputes ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Chargebacks and payment disputes</h2>
            <p>
              If you have a billing concern, please email{" "}
              <a href={`mailto:${BILLING_EMAIL}`} className="text-indigo-600 hover:underline">{BILLING_EMAIL}</a>{" "}
              before initiating a chargeback with your bank or card issuer. We can almost
              always resolve issues faster than the chargeback process, and we are committed
              to doing so. Chargebacks that are initiated without first contacting us may
              result in suspension of your account while the dispute is pending.
            </p>
          </section>

          {/* ─── 6. Changes ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. When we do, we will update the
              effective date above and notify active subscribers by email at least 14 days
              before changes take effect. The version in effect at the time of your payment
              governs refund eligibility for that payment.
            </p>
          </section>

          {/* ─── 7. Contact ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact us</h2>
            <p>For billing and refund inquiries:</p>
            <div className="mt-3 p-4 bg-gray-50 rounded-lg text-sm">
              <p className="font-semibold text-gray-900">{COMPANY}</p>
              <p>8 The Green, Suite 20261</p>
              <p>Dover, Delaware 19901</p>
              <p>United States</p>
              <p className="mt-2">
                Billing:{" "}
                <a href={`mailto:${BILLING_EMAIL}`} className="text-indigo-600 hover:underline">{BILLING_EMAIL}</a>
              </p>
              <p>
                Legal:{" "}
                <a href={`mailto:${LEGAL_EMAIL}`} className="text-indigo-600 hover:underline">{LEGAL_EMAIL}</a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
