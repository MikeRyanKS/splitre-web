import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "SplitRE Terms of Service — your legal agreement with Keplify LLC governing use of the SplitRE commission management platform.",
  alternates: { canonical: "https://splitre.app/terms" },
};

const EFFECTIVE_DATE = "August 23, 2026";
const COMPANY = "Keplify LLC";
const ADDRESS = "8 The Green, Suite 20261, Dover, DE 19901";
const LEGAL_EMAIL = "legal@splitre.app";
const BILLING_EMAIL = "billing@splitre.app";
const APP_NAME = "SplitRE";
const APP_URL = "https://app.splitre.app";

export default function TermsPage() {
  return (
    <div className="bg-white py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-1">Effective date: {EFFECTIVE_DATE}</p>
        <p className="text-sm text-gray-500 mb-10">
          Operated by {COMPANY} &mdash; {ADDRESS}
        </p>

        <div className="space-y-10 text-gray-700 leading-relaxed">

          {/* 0 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">0. Acceptance of These Terms</h2>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) form a binding legal agreement between you
              (&ldquo;Customer,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and <strong>{COMPANY}</strong>
              {" "}(&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our,&rdquo; or &ldquo;Company&rdquo;), governing your
              access to and use of {APP_NAME} at {APP_URL} and splitre.app (collectively, the &ldquo;Service&rdquo;).
            </p>
            <p className="mt-3">
              <strong>You accept these Terms — and our{" "}
              <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a> and{" "}
              <a href="/refund-policy" className="text-indigo-600 hover:underline">Refund / Cancellation Policy</a>,
              which are incorporated by reference — by doing any of the following:</strong> creating an account;
              checking a box or clicking a button presented alongside a link to these Terms during signup or
              checkout; starting a free trial; entering payment information; or otherwise accessing or using the
              Service in any way. Each is an independent, sufficient act of acceptance. If you do not agree, do not
              create an account, do not proceed past any screen referencing these Terms, and do not use the Service.
            </p>
            <p className="mt-3">
              If you are accepting on behalf of a business entity (a brokerage), you represent and warrant that you
              have the legal authority to bind that entity, and &ldquo;you&rdquo; and &ldquo;Customer&rdquo; then
              refer to that entity.
            </p>
            <p className="mt-3">
              <strong>United States only.</strong> The Service is offered solely to real estate brokerages and
              their authorized personnel located in, and operating under the laws of, the United States. We make no
              representation that the Service is appropriate, legally permitted, or available outside the United
              States; access from outside the US is at your own risk. We do not target, and do not knowingly collect
              personal information from, individuals in the European Economic Area, the United Kingdom, or
              Switzerland, and this Service is not designed to comply with the GDPR or UK GDPR.
            </p>
          </section>

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. The Service</h2>
            <p>
              {APP_NAME} is a web-based software application that automates real estate commission
              calculations, annual agent cap tracking, and CSV export formatted for QuickBooks
              Online (&ldquo;QBO&rdquo;) for independent real estate brokerages operating in the
              United States. The Service is offered on a subscription basis in three tiers — Boutique,
              Independent, and Brokerage, described in Section 4. All tiers include every feature;
              tiers differ only in the number of active agents permitted.
            </p>
            <p className="mt-3">
              We reserve the right to modify, discontinue, or update any feature of the Service
              at any time. Where a change materially reduces functionality you are actively using, we will
              provide at least 30 days&rsquo; written notice by email to active subscribers before it takes
              effect, except where an immediate change is required for security, legal compliance, or to
              prevent harm to the Service or its users.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Eligibility and Account Registration</h2>
            <p>
              The Service is intended solely for use by licensed real estate brokerages and their
              authorized personnel operating in the United States. You must be at least 18 years
              of age and have the legal capacity to enter into contracts in your jurisdiction to
              create an account.
            </p>
            <p className="mt-3">
              You agree to provide accurate, current, and complete information during registration
              and to keep that information updated. You are responsible for maintaining the
              confidentiality of your login credentials and for all activity that occurs under your
              account. You must notify us immediately at <a href={`mailto:${LEGAL_EMAIL}`} className="text-indigo-600 hover:underline">{LEGAL_EMAIL}</a> if
              you believe your account has been accessed without your authorization.
            </p>
            <p className="mt-3">
              Each account may serve one brokerage only. You may not share your account with
              third parties, sublicense access, or resell the Service.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Free Trial</h2>
            <p>
              New accounts receive a 14-day free trial with complete access to all features of
              the Service. No credit card or payment information is required to begin a trial.
              The trial period begins on the date your account is created and ends at 11:59 PM
              Eastern Time on the 14th calendar day.
            </p>
            <p className="mt-3">
              At the end of the trial period, if you have not provided a valid payment method
              and selected a subscription plan, your account is automatically paused — you are not
              charged. We will send you email reminders before the trial ends. A trial that converts
              to a paid subscription is an automatic renewal for purposes of Section 4.3 below, and by
              adding a payment method and selecting a plan you are giving the affirmative consent that
              section describes.
            </p>
            <p className="mt-3">
              We reserve the right to modify, shorten, or discontinue the free trial offer at
              any time without notice to prospective users. Existing trials in progress will not
              be shortened without notice.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Subscriptions and Billing</h2>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">4.1 Subscription Plans</h3>
            <table className="w-full text-sm border-collapse mt-2 mb-3">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-4 font-semibold text-gray-800">Tier</th>
                  <th className="text-left py-2 font-semibold text-gray-800">Active agent limit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="py-2 pr-4 font-medium">Boutique</td><td className="py-2">Up to 10</td></tr>
                <tr><td className="py-2 pr-4 font-medium">Independent</td><td className="py-2">Up to 30</td></tr>
                <tr><td className="py-2 pr-4 font-medium">Brokerage</td><td className="py-2">Unlimited</td></tr>
              </tbody>
            </table>
            <p>
              Subscriptions are billed monthly or annually. Monthly plans are billed every 30 days
              from activation. Annual plans are billed in full at the start of each 12-month term.
              Current prices for each tier and billing frequency are posted at{" "}
              <a href="/pricing" className="text-indigo-600 hover:underline">splitre.app/pricing</a>.
            </p>
            <p className="mt-3">
              &ldquo;Active agents&rdquo; means any agent profile on your account that is not
              marked as inactive or archived. Inactive agents do not count toward your plan limit
              and retain their full commission and cap history.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">4.2 Payment Authorization</h3>
            <p>
              By subscribing, you authorize {COMPANY} and its payment processor (Stripe, Inc.) to
              charge your designated payment method on a recurring basis at the applicable rate
              for your selected plan and billing cycle, until you turn off auto-renewal or your
              subscription otherwise ends under these Terms. All prices are stated in US dollars and
              are exclusive of any applicable taxes. You are responsible for all taxes, duties,
              or government levies applicable to your subscription other than our own income taxes.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">4.3 Automatic Renewal — Required Disclosures</h3>
            <p>
              <strong>This is an automatically renewing subscription.</strong> Unless you turn off
              auto-renewal before the end of your current billing period, your subscription
              automatically renews at the end of that period — every 30 days for monthly plans, or
              every 12 months for annual plans — and we charge your payment method on file the
              then-current price for your plan and billing frequency, with no further action
              required from you.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>
                <strong>To stop automatic renewal:</strong> switch off the <strong>Auto-renewal</strong> toggle
                at any time in <strong>app.splitre.app &rsaquo; Settings &rsaquo; Billing</strong>. This takes
                effect immediately as a matter of record, but your plan stays fully active and billing does not
                stop until the end of your current billing period — see Section 13.
              </li>
              <li>
                <strong>Reminder:</strong> we send an email reminder that your subscription is set to renew, at
                least annually and before any annual-plan renewal charge (see Section 4.6), so this is never a
                surprise.
              </li>
              <li>
                <strong>Free trial conversions</strong> are automatic renewals for this purpose, and Section 3
                describes the consent you give when you add payment information and select a plan.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">4.4 Billing Failures and Dunning</h3>
            <p>
              If a scheduled payment fails, we will notify you by email and retry the charge
              automatically up to four times over approximately 7 calendar days. Your account
              remains fully active during this retry window.
            </p>
            <p className="mt-3">
              If all retries fail, your account enters a grace period during which your account
              is accessible in read-only mode (you may view data and export, but not create new
              deals):
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Monthly plans:</strong> 3-day grace period</li>
              <li><strong>Annual plans:</strong> 7-day grace period</li>
            </ul>
            <p className="mt-3">
              If payment is not resolved by the end of the grace period, your account is
              <strong> locked</strong>, with the same 30-day data-retention treatment described in Section 13.1:
              your brokerage data is preserved for <strong>30 calendar days</strong> from the lock date, during
              which you may log in only to export your data and to restore access by updating your payment
              method. After that 30-day window, <strong>all brokerage data is permanently and automatically
              deleted</strong>. We will email you the exact deletion date when your account is locked, and
              again as it approaches.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">4.5 Plan Changes</h3>
            <p>
              <strong>Upgrades:</strong> Upgrading to a higher plan tier, or switching from monthly
              to annual billing, takes effect immediately. You will be charged a prorated amount for
              the remainder of your current billing period, with a credit applied for unused days
              on your previous plan.
            </p>
            <p className="mt-3">
              <strong>Downgrades:</strong> Downgrading to a lower plan tier, or switching from
              annual to monthly billing, is <strong>scheduled to take effect at the end of your
              current billing period</strong>. You retain full access to your current plan until
              that date. <strong>No refund or credit is issued for unused time on your current
              plan when you schedule a downgrade.</strong> You may cancel a scheduled downgrade
              at any time before it takes effect through Settings &rsaquo; Billing.
            </p>
            <p className="mt-3">
              If your active-agent count exceeds the new tier&rsquo;s limit when a scheduled downgrade
              takes effect, the excess agents are automatically locked (access suspended, history
              retained) rather than deleted; you can unlock them by deactivating other agents or
              upgrading again.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">4.6 Price Changes and Renewal Notices</h3>
            <p>
              We reserve the right to adjust subscription prices. We will provide at least 30 days&rsquo;
              — and no fewer than 7 days&rsquo; — written notice of any price increase to active subscribers
              before it takes effect, sent to your account email, stating the new price and how to cancel if
              you do not want to be charged at the new rate. Separately, and regardless of whether a price
              change is occurring, we send an annual reminder to active subscribers that their subscription
              renews automatically, consistent with California&rsquo;s Automatic Renewal Law and equivalent
              laws in other states. Your continued use of the Service after a price-increase notice&rsquo;s
              effective date constitutes acceptance of the new price for renewals from that point forward; it
              does not retroactively apply to periods already paid.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Agent Limits and Plan Enforcement</h2>
            <p>
              Each subscription tier permits the agent count set out in Section 4.1. If you schedule a plan
              downgrade and your current active agent count exceeds the new plan&rsquo;s limit, you will be
              notified at the time of scheduling. You have until the end of your current billing period to
              deactivate excess agents. Any agents still over the new limit when the downgrade takes effect will
              be automatically locked (access suspended); locked agents retain all their commission and cap
              history and can be reactivated by deactivating other agents or upgrading your plan. Locked agents
              do not themselves count toward your active agent limit.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Acceptable Use</h2>
            <p>You agree not to use the Service to:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Violate any applicable federal, state, or local law or regulation</li>
              <li>Process commissions or financial data for any brokerage other than the one registered under your account</li>
              <li>Reverse-engineer, decompile, disassemble, or otherwise attempt to derive the source code of the Service</li>
              <li>Use automated scripts, bots, scrapers, or crawlers to extract data from the Service</li>
              <li>Attempt to gain unauthorized access to any part of the Service, its servers, or any connected systems</li>
              <li>Upload, transmit, or introduce any virus, malware, ransomware, or other malicious code</li>
              <li>Interfere with or disrupt the performance, integrity, or availability of the Service or its infrastructure</li>
              <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity</li>
              <li>Use the Service in any manner that could subject {COMPANY} to legal liability</li>
              <li>Resell, sublicense, or otherwise commercialize access to the Service without prior written consent</li>
            </ul>
            <p className="mt-4">
              We reserve the right to investigate suspected violations and to suspend or terminate
              accounts that we determine, in our reasonable discretion, have violated this Section.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Your Data and Content</h2>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">7.1 Ownership</h3>
            <p>
              You retain full ownership of all data, records, and content you upload or create
              within the Service, including commission plans, agent profiles, and deal records
              (&ldquo;Customer Data&rdquo;). We do not claim any ownership
              interest in your Customer Data.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">7.2 License to Process</h3>
            <p>
              You grant us a limited, non-exclusive, worldwide, royalty-free license to host,
              store, process, and display your Customer Data solely as necessary to provide,
              maintain, and improve the Service and as described in our Privacy Policy. This
              license terminates upon deletion of your data under Section 13 or Section 4.4.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">7.3 Your Responsibilities</h3>
            <p>
              You are solely responsible for the accuracy and legality of all Customer Data you
              enter into the Service. If your Customer Data includes personal information about
              your agents (such as names, license numbers, or income data), you are
              responsible for ensuring you have the legal right to collect and process that
              information and for complying with all applicable privacy, employment, and independent-contractor
              laws that apply to <em>you</em> as the brokerage — including any state-specific requirements
              around the timing, itemization, and documentation of commission payments to your agents.
              {" "}{APP_NAME} is a calculation and record-keeping tool; it does not determine, and is not
              responsible for, whether your commission structures or payment practices comply with the law
              governing your brokerage.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">7.4 CCPA / State-Law Service-Provider Terms</h3>
            <p>
              Where Customer Data includes personal information of a California resident (including an agent,
              employee, or contractor of your brokerage) subject to the California Consumer Privacy Act, as
              amended by the California Privacy Rights Act (&ldquo;CCPA&rdquo;), or an equivalent comprehensive
              privacy law of another US state, the following terms apply and are intended to satisfy the
              contractual requirements for our processing to be treated as that of a &ldquo;service
              provider,&rdquo; &ldquo;processor,&rdquo; or equivalent term under the applicable law:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>We will process that personal information only to provide the Service to you and for no other commercial purpose of our own;</li>
              <li>We will not sell or share that personal information, and will not retain, use, or disclose it outside our direct business relationship with you, except as permitted by the applicable law or as you separately direct;</li>
              <li>We will not combine that personal information with personal information we receive from or on behalf of another customer or source, except as permitted by the applicable law;</li>
              <li>We will provide reasonable assistance to you in responding to a verified consumer request to know, delete, correct, or opt out, to the extent that request concerns data we process on your behalf; and</li>
              <li>Upon termination of the Service, we will delete or return that personal information as described in Section 13, except where retention is required by law.</li>
            </ul>
            <p className="mt-3">
              By using the Service to process such data, you acknowledge these terms as our written
              service-provider agreement for purposes of the applicable law, and you certify that you
              understand these restrictions apply to our processing.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">7.5 Aggregated Data</h3>
            <p>
              We may collect and use de-identified, aggregated data derived from your use of the
              Service (such as feature usage patterns and system performance metrics) for the
              purposes of improving the Service, provided that such data cannot reasonably be
              used to identify you or your agents.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">8. QuickBooks Online Integration</h2>
            <p>
              The QuickBooks Online export feature is provided as a convenience. You are solely
              responsible for the accuracy of data you choose to export or enter into QuickBooks Online.
              {" "}{COMPANY} is not liable for (a) errors in your QBO records
              resulting from inaccurate data you entered into {APP_NAME}; (b) any QBO API
              changes, outages, or service interruptions caused by Intuit; or (c) any QBO account
              fees, reconciliation costs, or professional accounting fees arising from your use
              of the export.
            </p>
            <p className="mt-3">
              The {APP_NAME} QuickBooks integration supports QuickBooks Online (Simple Start,
              Essentials, Plus, and Advanced). QuickBooks Desktop is not supported.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Intellectual Property</h2>
            <p>
              The Service, including all software, code, algorithms, user interfaces, text,
              graphics, logos, and trademarks, is owned by {COMPANY} and protected by United
              States and international intellectual property laws. &ldquo;SplitRE&rdquo; and the
              SplitRE logo are trademarks of {COMPANY}. Nothing in these Terms grants you any
              right, title, or interest in any {COMPANY} intellectual property except the limited
              right to use the Service as described in these Terms.
            </p>
            <p className="mt-3">
              If you provide us with feedback, suggestions, or ideas regarding the Service
              (&ldquo;Feedback&rdquo;), you grant us a perpetual, irrevocable, worldwide,
              royalty-free license to use, incorporate, and commercialize that Feedback without
              any obligation to compensate you.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED
              BY APPLICABLE LAW, {COMPANY.toUpperCase()} EXPRESSLY DISCLAIMS ALL WARRANTIES,
              INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT</li>
              <li>ANY WARRANTY THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS</li>
              <li>ANY WARRANTY THAT COMMISSION CALCULATIONS PRODUCED BY THE SERVICE WILL BE ACCURATE, COMPLETE, OR COMPLIANT WITH ANY PARTICULAR BROKERAGE AGREEMENT, STATE REAL ESTATE LICENSING LAW, OR WAGE-AND-HOUR LAW</li>
              <li>ANY WARRANTY THAT THE SERVICE WILL MEET YOUR SPECIFIC BUSINESS, ACCOUNTING, OR REGULATORY REQUIREMENTS</li>
            </ul>
            <p className="mt-4">
              {APP_NAME} is a calculation and automation tool, <strong>not</strong> a source of legal, tax,
              accounting, or real estate regulatory advice. You are solely responsible for
              verifying that all commission calculations, cap tracking results, and financial
              records produced by the Service are accurate and consistent with the terms of your
              agreements with your agents and with applicable law. We strongly recommend that you have all
              commission structures and payment practices reviewed by a licensed attorney
              or certified public accountant before relying on them for agent payments or
              financial reporting.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">11. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL {COMPANY.toUpperCase()},
              ITS MEMBERS, MANAGERS, OFFICERS, EMPLOYEES, AGENTS, LICENSORS, OR SERVICE
              PROVIDERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE,
              OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Loss of profits, revenue, or business opportunities</li>
              <li>Commission overpayments or underpayments to agents</li>
              <li>Errors or omissions in QuickBooks Online records</li>
              <li>Loss or corruption of data</li>
              <li>Agent attrition or employment-related claims arising from commission errors</li>
              <li>Cost of substitute services</li>
            </ul>
            <p className="mt-4">
              THE FOREGOING LIMITATIONS APPLY REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT,
              TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE) AND EVEN IF {COMPANY.toUpperCase()}
              HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="mt-4">
              OUR TOTAL CUMULATIVE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO
              THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE TOTAL SUBSCRIPTION FEES ACTUALLY
              PAID BY YOU TO US IN THE 12 CALENDAR MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING
              RISE TO THE CLAIM.
            </p>
            <p className="mt-4">
              Some jurisdictions do not allow the exclusion of certain warranties or the limitation
              of certain types of damages. To the extent such limitations are not permitted by
              applicable law, the above limitations will apply to the maximum extent permitted.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">12. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless {COMPANY} and its members,
              managers, officers, employees, and agents from and against any and all claims,
              damages, losses, costs, and expenses (including reasonable attorneys&rsquo; fees)
              arising out of or related to:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Your use of or access to the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any applicable law or regulation</li>
              <li>Any claim by one of your agents or employees arising from commission calculations, cap tracking, or payments processed using the Service</li>
              <li>Your Customer Data, including any claim that it infringes the intellectual property or privacy rights of a third party</li>
            </ul>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">13. Cancellation, Suspension, and Data Retention</h2>
            <p>
              This Section governs two different things — <strong>voluntary cancellation</strong> (something
              you choose to do) and <strong>suspension for non-payment</strong> (something that happens if a
              payment fails and is never fixed). They have different consequences. Read the one that applies
              to you.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">13.1 Voluntary Cancellation</h3>
            <p>
              You may stop your subscription from renewing at any time, at no cost and with no minimum
              commitment, by switching off <strong>Auto-renewal</strong> in{" "}
              <strong>app.splitre.app &rsaquo; Settings &rsaquo; Billing</strong>, or by emailing{" "}
              <a href={`mailto:${BILLING_EMAIL}`} className="text-indigo-600 hover:underline">{BILLING_EMAIL}</a>.
              This takes effect as a cancellation of the <em>next</em> charge — you keep full, unrestricted access
              to the Service through the end of your current paid billing period, exactly as if you
              hadn&rsquo;t canceled.
            </p>
            <p className="mt-3">
              At the end of that period, your account becomes <strong>locked</strong>: you may log in only to
              export your data (Settings &rsaquo; Data Export) and to resubscribe — full read/write access to
              the Service is not available until you do. Your brokerage data is preserved for{" "}
              <strong>30 calendar days</strong> from the lock date. Reactivating your subscription at any time
              before then restores full access to everything exactly as you left it.
            </p>
            <p className="mt-3">
              After that 30-day window, <strong>all brokerage data is permanently and automatically
              deleted</strong>. We will email you the exact deletion date when your account is locked, and
              again as it approaches. If you want your data deleted sooner than the 30-day window, or exported
              on your behalf, contact{" "}
              <a href={`mailto:${LEGAL_EMAIL}`} className="text-indigo-600 hover:underline">{LEGAL_EMAIL}</a>{" "}
              — we will act on a verified request from an authorized account owner within 30 days of receiving it.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">13.2 Suspension for Non-Payment</h3>
            <p>
              If a payment fails and is never resolved, the separate process in Section 4.4 applies: a retry
              window, then a grace period, then locking with the same{" "}
              <strong>automatic 30-day deletion timer</strong> described in Section 13.1. See Section 4.4 for
              the full sequence.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">13.3 Refunds</h3>
            <p>
              See our{" "}
              <a href="/refund-policy" className="text-indigo-600 hover:underline">Refund and Cancellation Policy</a>{" "}
              for when a refund is available upon cancellation.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">14. Termination by Us</h2>
            <p>
              We reserve the right to suspend or terminate your account, with or without notice,
              if we determine in our reasonable discretion that:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>You have materially violated these Terms</li>
              <li>Your use of the Service creates legal, financial, or reputational risk to us or to other users</li>
              <li>We are required to do so by applicable law or court order</li>
              <li>Payment has not been received after our standard retry and grace-period process in Section 4.4</li>
            </ul>
            <p className="mt-4">
              Where we terminate your account for cause, we will provide written notice stating
              the reason where possible. Where termination is for cause, you will not be entitled
              to a refund for any unused portion of your subscription period. The data-export and
              retention treatment of Section 13.1 still applies following termination, except where
              termination arises from illegal activity or serious abuse of the Service, in which case
              we may delete data immediately to the extent permitted by law.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">15. Governing Law and Venue</h2>
            <p>
              These Terms, and any dispute arising from your use of the Service that is not subject to
              arbitration under Section 16, are governed by and construed in accordance with the laws of the
              State of Delaware, United States, without regard to its conflict-of-law principles. Subject to
              Section 16, the state and federal courts located in Delaware have exclusive jurisdiction over any
              such dispute, and you consent to personal jurisdiction there.
            </p>
          </section>

          {/* 16 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">16. Dispute Resolution and Arbitration</h2>
            <p>
              <strong>PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS, INCLUDING
              YOUR RIGHT TO FILE A LAWSUIT IN COURT AND TO A JURY TRIAL.</strong>
            </p>
            <p className="mt-3">
              <strong>16.1 Informal Resolution First.</strong> Before initiating any formal dispute
              process, you agree to contact us at{" "}
              <a href={`mailto:${LEGAL_EMAIL}`} className="text-indigo-600 hover:underline">{LEGAL_EMAIL}</a>{" "}
              and provide a written description of the dispute. We will have 30 days to attempt
              to resolve the dispute informally.
            </p>
            <p className="mt-3">
              <strong>16.2 Binding Arbitration.</strong> If the dispute is not resolved informally
              within 30 days, it shall be resolved by binding, individual arbitration administered by the
              American Arbitration Association (&ldquo;AAA&rdquo;) under its Commercial Arbitration Rules (or,
              if you are acting as an individual rather than a business, its Consumer Arbitration Rules),
              conducted in English. The arbitrator&rsquo;s decision shall be final and binding and may
              be entered as a judgment in any court of competent jurisdiction.
            </p>
            <p className="mt-3">
              <strong>16.3 Your Right to Opt Out.</strong> You may opt out of this arbitration agreement
              entirely. To do so, send written notice to{" "}
              <a href={`mailto:${LEGAL_EMAIL}`} className="text-indigo-600 hover:underline">{LEGAL_EMAIL}</a>{" "}
              within <strong>30 days of the date you first agree to these Terms</strong>, stating your name, the
              email address on your account, and that you are opting out of arbitration. If you opt out,
              disputes between us will proceed in the courts described in Section 15, and every other part of
              these Terms remains in effect.
            </p>
            <p className="mt-3">
              <strong>16.4 Class Action Waiver.</strong> YOU AND {COMPANY.toUpperCase()} EACH WAIVE
              THE RIGHT TO BRING OR PARTICIPATE IN ANY CLASS ACTION, CLASS ARBITRATION, OR
              REPRESENTATIVE PROCEEDING. Each party may only bring claims in its individual
              capacity. If this waiver is found unenforceable as to a particular claim, that claim (and only
              that claim) will proceed in court rather than in arbitration, and the rest of this Section
              remains in effect.
            </p>
            <p className="mt-3">
              <strong>16.5 Exceptions.</strong> Notwithstanding the above, either party may seek
              emergency injunctive or other equitable relief in any court of competent
              jurisdiction to prevent irreparable harm pending arbitration, or to enforce an
              arbitration award, without that being a waiver of this arbitration agreement.
            </p>
          </section>

          {/* 17 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">17. Changes to These Terms</h2>
            <p>
              We may revise these Terms from time to time. When we make material changes, we will
              update the effective date at the top of this page and notify active subscribers by
              email to their registered email address at least <strong>30 days</strong> before the
              new Terms take effect. The email will summarize what has changed.
            </p>
            <p className="mt-3">
              If you continue to use the Service after the effective date of the revised Terms,
              you are agreeing to be bound by those changes. If you do not agree to the revised
              Terms, you must stop using the Service before the effective date and may cancel
              your account in accordance with Section 13.
            </p>
          </section>

          {/* 18 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">18. General Provisions</h2>
            <p>
              <strong>Entire Agreement.</strong> These Terms, together with our Privacy Policy
              and Refund and Cancellation Policy, constitute the entire agreement between you and
              {" "}{COMPANY} regarding the Service and supersede all prior agreements or communications.
            </p>
            <p className="mt-3">
              <strong>Severability.</strong> If any provision of these Terms is found to be
              unenforceable, that provision will be modified to the minimum extent necessary to
              make it enforceable, and the remaining provisions will continue in full force.
            </p>
            <p className="mt-3">
              <strong>Waiver.</strong> Our failure to enforce any right or provision of these
              Terms shall not constitute a waiver of that right or provision.
            </p>
            <p className="mt-3">
              <strong>Assignment.</strong> You may not assign or transfer your rights under these
              Terms without our prior written consent. We may assign our rights and obligations
              under these Terms to an affiliate or in connection with a merger, acquisition, or
              sale of assets, and will notify active subscribers if this happens.
            </p>
            <p className="mt-3">
              <strong>Force Majeure.</strong> We will not be liable for any delay or failure to
              perform resulting from causes beyond our reasonable control, including acts of God,
              natural disasters, war, terrorism, government actions, labor disputes, internet
              outages, or third-party service failures (including Stripe, Supabase, or Intuit).
            </p>
            <p className="mt-3">
              <strong>No Third-Party Beneficiaries.</strong> These Terms are between you and {COMPANY} and
              create no rights for any other person or entity, including your agents.
            </p>
          </section>

          {/* 19 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">19. Contact</h2>
            <p>For legal notices or disputes:</p>
            <address className="not-italic mt-3 text-gray-700">
              <strong>{COMPANY}</strong><br />
              8 The Green, Suite 20261<br />
              Dover, DE 19901<br />
              United States<br />
              Email: <a href={`mailto:${LEGAL_EMAIL}`} className="text-indigo-600 hover:underline">{LEGAL_EMAIL}</a><br />
              Billing queries: <a href={`mailto:${BILLING_EMAIL}`} className="text-indigo-600 hover:underline">{BILLING_EMAIL}</a>
            </address>
          </section>

        </div>
      </div>
    </div>
  );
}
