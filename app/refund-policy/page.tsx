import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund / Cancellation Policy",
  description:
    "SplitRE refund and cancellation policy — 7-day refunds, no long-term contracts, and how automatic renewal and data retention actually work.",
  alternates: { canonical: "https://splitre.app/refund-policy" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "August 10, 2026";
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
              when you are entitled to a refund, exactly how automatic renewal and cancellation work, and what
              happens to your data after you cancel. It supplements, and is incorporated into, our{" "}
              <a href="/terms" className="text-indigo-600 hover:underline">Terms of Service</a>. If you have
              questions before or after making a payment, email us at{" "}
              <a href={`mailto:${BILLING_EMAIL}`} className="text-indigo-600 hover:underline">{BILLING_EMAIL}</a>.
            </p>
            <p className="mt-3 font-medium">
              This subscription renews automatically. Section 3 below explains that plainly, before anything
              about refunds — that&apos;s deliberate, and consistent with California&apos;s Automatic Renewal Law
              and similar laws in other states.
            </p>
          </section>

          {/* ─── 1. Free Trial ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Free trial</h2>
            <p>
              All new accounts include a 14-day free trial. No credit card is required
              to start a trial. Your card is only charged when you actively add a payment method and choose a
              paid plan — and doing that is also your affirmative consent to automatic renewal under Section 3.
              If you do nothing during the trial period, your
              account will be paused — you will not be charged.
            </p>
          </section>

          {/* ─── 2. Refund Eligibility ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Refund eligibility</h2>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">2.1 The window</h3>
            <p>
              Whether you&apos;re on a monthly or annual plan, you may request a refund of a payment within{" "}
              <strong>7 calendar days of the billing date for that payment</strong>. Requests made after 7
              calendar days of the relevant payment will not be approved for that period.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">2.2 Refund amount</h3>
            <p>
              Approved refunds are issued for the amount paid, <strong>less payment
              processing fees charged by Stripe, Inc.</strong> (typically 2.9% + $0.30
              per transaction for US cards, or the rate applicable to your transaction).
              These fees are non-recoverable from our payment processor regardless of
              the reason for the refund, so they cannot be included in the refund amount.
            </p>
            <p className="mt-3">
              Example: if you paid $35.00 and a refund is approved, you would receive
              approximately $33.68 back ($35.00 minus ~$1.32 in Stripe processing fees
              on a typical US card transaction). The exact fee deducted will be stated
              in your refund confirmation email.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">2.3 Situations where refunds are not available</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Requests made more than 7 calendar days after the applicable payment date</li>
              <li>Accounts suspended or terminated for violations of our Terms of Service</li>
              <li>Partial-period refunds for unused time within a billing period we&apos;ve already fully earned (we do not pro-rate — see Section 5 for how downgrades are handled instead)</li>
              <li>Add-ons or one-time fees, if any are introduced in the future and stated as non-refundable at the time of purchase</li>
            </ul>
          </section>

          {/* ─── 3. Automatic Renewal ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Automatic renewal — what you&apos;re agreeing to</h2>
            <p>
              <strong>Your subscription renews automatically at the end of every billing period — every 30 days
              on a monthly plan, or every 12 months on an annual plan — at the price shown for your plan at{" "}
              <a href="/pricing" className="text-indigo-600 hover:underline">splitre.app/pricing</a>, charged to
              the payment method on file, until you turn it off.</strong> By adding a payment method and
              choosing a plan (including converting a free trial to a paid plan), you affirmatively agree to
              this.
            </p>
            <p className="mt-3">
              <strong>To stop automatic renewal:</strong> switch off the <strong>Auto-renewal</strong> toggle at
              any time in <strong>app.splitre.app &rsaquo; Settings &rsaquo; Billing</strong>. There is no
              cancellation fee and no minimum commitment. See Section 4 for exactly what happens next.
            </p>
            <p className="mt-3">
              <strong>Reminders:</strong> we send an email reminder before your subscription renews, at least
              once a year regardless of billing frequency, and separately before any price increase (Section 6
              of our <a href="/terms" className="text-indigo-600 hover:underline">Terms of Service</a>) — so a
              renewal charge should never be a surprise.
            </p>
          </section>

          {/* ─── 4. Cancellation ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cancellation</h2>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">4.1 How to cancel</h3>
            <p>
              Turn off <strong>Auto-renewal</strong> in{" "}
              <strong>app.splitre.app &rsaquo; Settings &rsaquo; Billing</strong>, or email{" "}
              <a href={`mailto:${BILLING_EMAIL}`} className="text-indigo-600 hover:underline">{BILLING_EMAIL}</a>{" "}
              and we&apos;ll do it for you within 1 business day. Either way, this stops the <em>next</em>{" "}
              charge — see 4.2 for what happens to your current period.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">4.2 What happens to your access</h3>
            <p>
              Turning off auto-renewal does not end your current billing period early. You keep full,
              unrestricted access — creating deals, inviting agents, everything — through the last day
              you already paid for.
            </p>
            <p className="mt-3">
              <strong>At the end of that period, your account becomes locked</strong>, meaning you can no
              longer log in to the application at all, including to export data, until you resubscribe.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">4.3 What happens to your data</h3>
            <p>
              <strong>Your data is not deleted when you cancel, and there is no 30-day countdown on it.</strong>{" "}
              It&apos;s retained indefinitely once you&apos;re locked out, and reactivating your subscription at
              any time restores your account and all of your data exactly as you left it — deals, agents, cap
              history, everything.
            </p>
            <p className="mt-3">
              Because self-service export stops working the moment you&apos;re locked out,{" "}
              <strong>export a copy of your data before your final billing period ends</strong> if
              you&apos;re not planning to come back — go to{" "}
              <strong>app.splitre.app &rsaquo; Settings &rsaquo; Data Export</strong> and download the
              full export (deal records, agent roster, cap-progress history, and commission-plan
              definitions) while you still have access. If you&apos;ve already been locked out and need a
              copy, or want your data deleted rather than retained indefinitely, email{" "}
              <a href={`mailto:${LEGAL_EMAIL}`} className="text-indigo-600 hover:underline">{LEGAL_EMAIL}</a>{" "}
              — we&apos;ll export or delete it for you within 30 days of a request we can verify comes from you.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">4.4 Reactivation</h3>
            <p>
              Reactivate at any time by adding a payment method and choosing a plan again. Because voluntary
              cancellation doesn&apos;t trigger deletion, there&apos;s no window to beat — your data is there
              whenever you come back.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">4.5 This is different from a locked account due to non-payment</h3>
            <p>
              Section 6 below describes a <strong>separate</strong> situation — a payment that fails and is
              never fixed — which does eventually lead to automatic data deletion after a defined grace period.
              That is not what happens when you simply cancel; the two situations have different rules on
              purpose.
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
              Settings &rsaquo; Billing in the app.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">5.3 Agent limits on downgrade</h3>
            <p>
              If your current number of active agents exceeds the limit of your new plan, you will
              be notified at the time you schedule the downgrade. You have until the end of your
              current billing period to deactivate excess agents. Any active agents that remain
              over the new plan limit when the downgrade takes effect will be automatically locked
              (not deleted) on that date, and can be
              reactivated by deactivating other agents or upgrading your plan.
            </p>
          </section>

          {/* ─── 6. Failed Payments ─── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Failed payments and account suspension</h2>
            <p>
              This section — unlike Section 4 — is about a payment that didn&apos;t go through, not a choice
              to cancel.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">6.1 Retry period</h3>
            <p>
              If a payment fails, {APP_NAME} will automatically retry the charge up to four times
              over the following seven days. Your account remains fully active during this retry
              window. You will receive an email notification when the first failure occurs.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">6.2 Grace period</h3>
            <p>
              If all retries fail, your account enters a <strong>grace period</strong>:
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

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">6.3 Account lock and automatic deletion</h3>
            <p>
              If payment is not resolved by the end of the grace period, your account is locked, and —
              unlike a voluntary cancellation — this specifically starts a{" "}
              <strong>30-calendar-day</strong> countdown: you can still log in only to download
              your data or fix payment during that window, and after it closes, your data is{" "}
              <strong>permanently and automatically deleted</strong>. We will email you
              the exact deletion date when your account is locked.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-2">6.4 Restoring a locked account</h3>
            <p>
              At any point before the 30-day window closes, you can restore your
              account by updating your payment method in the billing portal. Once payment is
              processed, your account is unlocked immediately and all data is intact.
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
