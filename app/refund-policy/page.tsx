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
            <p>
              The fastest way to request a refund is directly inside the app. After canceling your
              subscription (Settings › Billing › Cancel subscription), a refund request form will
              appear if you are within the 7-day window. Fill in the reason and submit — we will
              receive the request immediately.
            </p>
            <p className="mt-3">
              You can also email{" "}
              <a href={`mailto:${BILLING_EMAIL}`} className="text-indigo-600 hover:underline">{BILLING_EMAIL}</a>{" "}
              within 7 calendar days of the payment you are disputing. Include the email address
              on your {APP_NAME} account and the approximate date of the charge.
            </p>
            <p className="mt-3">
              We will confirm receipt within 1 business day and process approved refunds within
              2 business days. Refunds are returned to the original payment method via Stripe.
              Depending on your card issuer, the credit may take 5 to 10 business days to appear
              on your statement.
            </p>
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

          {/* ─── 5. Plan Changes ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Plan changes</h2>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">5.1 Upgrades</h3>
            <p>
              When you upgrade to a higher plan tier or switch from monthly to annual billing, the
              change takes effect immediately. You are charged a prorated amount for the remainder
              of your current billing period at the new plan rate, with a credit applied for unused
              days on your previous plan. The net charge appears on your card on the day of the
              upgrade.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">5.2 Downgrades</h3>
            <p>
              When you downgrade to a lower plan tier, or switch from annual to monthly billing,
              the change is <strong>scheduled to take effect at the end of your current billing
              period</strong>. You retain full access to your current plan until that date.
            </p>
            <p className="mt-3">
              <strong>No refund or credit is issued for unused time on your current plan when
              you schedule a downgrade.</strong> The amount you paid for the current period is
              fully earned at the time of payment and is not subject to pro-ration when a
              downgrade is requested mid-cycle.
            </p>
            <p className="mt-3">
              You may cancel a scheduled downgrade at any time before it takes effect by going to
              Settings › Billing in the app.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">5.3 Agent limits on downgrade</h3>
            <p>
              If your current number of active agents exceeds the limit of your new plan, you will
              be notified at the time you schedule the downgrade. You have until the end of your
              current billing period to deactivate excess agents. Any active agents that remain
              over the new plan limit when the downgrade takes effect will be automatically locked
              (access suspended) on that date. Locked agents remain in your account and can be
              reactivated by deactivating other agents or upgrading your plan.
            </p>
          </section>

          {/* ─── 6. Failed Payments ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Failed payments and account suspension</h2>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">6.1 Payment retry period</h3>
            <p>
              If a payment fails, {APP_NAME} will automatically retry the charge up to four times
              over the following seven days. Your account remains fully active during this retry
              window. You will receive an email notification when the first failure occurs.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">6.2 Grace period</h3>
            <p>
              If all retries fail, your account enters a grace period:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Monthly plans:</strong> 3-day grace period</li>
              <li><strong>Annual plans:</strong> 7-day grace period</li>
            </ul>
            <p className="mt-3">
              During the grace period, your account is accessible in read-only mode. You can view
              existing deals and agents and export your data, but new deal creation is disabled.
              You will receive a final notice email at the start of the grace period stating the
              date your account will be locked.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">6.3 Account lock and data retention</h3>
            <p>
              If payment is not resolved by the end of the grace period, your account is locked.
              You will not be able to access the application but you may still log in to download
              your data for <strong>30 calendar days</strong> from the date of the lock. After
              that 30-day window, all brokerage data is permanently deleted. We will email you
              the exact deletion date when your account is locked.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">6.4 Restoring a locked account</h3>
            <p>
              At any point before the 30-day data retention window expires, you can restore your
              account by updating your payment method in the billing portal. Once payment is
              processed, your account is unlocked immediately and all data is preserved.
            </p>
          </section>

          {/* ─── 7. Disputes ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Chargebacks and payment disputes</h2>
            <p>
              If you have a billing concern, please email{" "}
              <a href={`mailto:${BILLING_EMAIL}`} className="text-indigo-600 hover:underline">{BILLING_EMAIL}</a>{" "}
              before initiating a chargeback with your bank or card issuer. We can almost
              always resolve issues faster than the chargeback process, and we are committed
              to doing so. Chargebacks that are initiated without first contacting us may
              result in suspension of your account while the dispute is pending.
            </p>
          </section>

          {/* ─── 8. Changes ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. When we do, we will update the
              effective date above and notify active subscribers by email at least 14 days
              before changes take effect. The version in effect at the time of your payment
              governs refund eligibility for that payment.
            </p>
          </section>

          {/* ─── 9. Contact ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact us</h2>
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
