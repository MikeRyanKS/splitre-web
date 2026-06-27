import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "SplitRE Terms of Service — your legal agreement with Keplify LLC governing use of the SplitRE commission management platform.",
  alternates: { canonical: "https://splitre.app/terms" },
};

const EFFECTIVE_DATE = "June 15, 2026";
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

          <section>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) form a binding legal agreement between you
              (&ldquo;Customer,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and <strong>{COMPANY}</strong>,
              a Delaware limited liability company (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;),
              governing your access to and use of {APP_NAME} at {APP_URL} and splitre.app (collectively,
              the &ldquo;Service&rdquo;). By creating an account, starting a free trial, or using
              the Service in any way, you agree to be bound by these Terms. If you are accepting
              on behalf of a business entity, you represent and warrant that you have the legal
              authority to bind that entity to these Terms.
            </p>
            <p className="mt-4">
              If you do not agree with any part of these Terms, you must not use the Service.
            </p>
          </section>

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. The Service</h2>
            <p>
              {APP_NAME} is a web-based software application that automates real estate commission
              calculations, annual agent cap tracking, and accounting integration with QuickBooks
              Online (&ldquo;QBO&rdquo;) for independent real estate brokerages operating in the
              United States. The Service is offered on a subscription basis in three tiers:
              Boutique, Independent, and Brokerage. All tiers include access to every feature;
              tiers differ only in the number of active agents permitted.
            </p>
            <p className="mt-3">
              We reserve the right to modify, discontinue, or update any feature of the Service
              at any time. Where changes materially reduce functionality, we will provide at least
              30 days&rsquo; written notice to active subscribers.
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
              and selected a subscription plan, your account will be automatically paused. Your
              brokerage data will be preserved for 30 days following the trial expiration, after
              which it may be permanently deleted. We will send you email reminders at 7 days and
              3 days before trial expiration.
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
            <p>
              Subscriptions are available on a monthly or annual billing cycle. Monthly plans are
              billed every 30 days from the date of activation. Annual plans are billed in full
              at the start of each 12-month term at the applicable annual rate.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">4.2 Payment Authorization</h3>
            <p>
              By subscribing, you authorize {COMPANY} and its payment processor (Stripe, Inc.) to
              charge your designated payment method on a recurring basis at the applicable rate
              for your selected plan and billing cycle. All prices are stated in US dollars and
              are exclusive of any applicable taxes. You are responsible for all taxes, duties,
              or government levies applicable to your subscription.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">4.3 Billing Failures</h3>
            <p>
              If a scheduled payment fails, we will notify you by email at the address on file
              and retry the charge up to three times over 7 calendar days. If payment is not
              collected within 7 days of the initial failure, your access to the Service will be
              suspended. Your data will be preserved during any suspension period. You may
              reactivate access at any time by updating your payment method and paying any
              outstanding balance through the billing portal at{" "}
              <strong>app.splitre.app &rsaquo; Settings &rsaquo; Billing</strong>.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">4.4 Plan Changes</h3>
            <p>
              <strong>Upgrades:</strong> Upgrading your subscription plan takes effect immediately.
              You will be charged a prorated amount for the remainder of your current billing
              period based on the price difference between your old and new plan.
            </p>
            <p className="mt-3">
              <strong>Downgrades:</strong> Downgrading your subscription plan takes effect at the
              start of your next billing cycle. You will retain access to your current plan
              features until the end of the paid period.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">4.5 Price Changes</h3>
            <p>
              We reserve the right to adjust subscription prices. We will provide at least 30 days&rsquo;
              written notice of any price increase to active subscribers before the new price
              takes effect. Your continued use of the Service after the notice period constitutes
              acceptance of the new pricing.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Agent Limits and Plan Enforcement</h2>
            <p>
              Each subscription tier permits a defined number of active agents on your account:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li><strong>Boutique:</strong> Up to 5 active agents</li>
              <li><strong>Independent:</strong> Up to 25 active agents</li>
              <li><strong>Brokerage:</strong> Unlimited active agents</li>
            </ul>
            <p className="mt-3">
              &ldquo;Active agents&rdquo; means any agent profile on your account that is not
              marked as inactive or archived. Inactive agents do not count toward your plan limit
              and retain their full commission and cap history.
            </p>
            <p className="mt-3">
              If the number of active agents on your account exceeds the limit for your current
              plan, we will notify you by email and display an in-application warning. You will
              have <strong>7 calendar days</strong> from the date of that notification to either
              (a) upgrade your plan to a tier that accommodates your agent count, or (b) reduce
              your active agent count to within your plan limit. During this 7-day grace period,
              full Service functionality is preserved.
            </p>
            <p className="mt-3">
              If you have not taken corrective action within 7 days, the ability to add new
              deals or new agents may be restricted until the overage is resolved. Existing deal
              data and agent records will remain accessible and intact. We will provide a reminder
              notice at day 5 of the grace period.
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
              accounts that we determine, in our sole discretion, have violated this Section.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Your Data and Content</h2>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">7.1 Ownership</h3>
            <p>
              You retain full ownership of all data, records, and content you upload or create
              within the Service, including commission plans, agent profiles, deal records, and
              QuickBooks sync logs (&ldquo;Customer Data&rdquo;). We do not claim any ownership
              interest in your Customer Data.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">7.2 License to Process</h3>
            <p>
              You grant us a limited, non-exclusive, worldwide, royalty-free license to host,
              store, process, and display your Customer Data solely as necessary to provide,
              maintain, and improve the Service and as described in our Privacy Policy. This
              license terminates upon deletion of your data in accordance with Section 11.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">7.3 Your Responsibilities</h3>
            <p>
              You are solely responsible for the accuracy and legality of all Customer Data you
              enter into the Service. If your Customer Data includes personal information about
              your agents (such as names, Social Security Numbers, or income data), you are
              responsible for ensuring you have the legal right to collect and process that
              information and for complying with all applicable privacy and employment laws.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">7.4 Aggregated Data</h3>
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
              The QuickBooks Online integration is provided as a convenience feature. To use it,
              you must authorize {APP_NAME} to access your QBO account using your own Intuit
              credentials through Intuit&rsquo;s OAuth authorization flow. You may revoke this
              authorization at any time through your QBO account settings.
            </p>
            <p className="mt-3">
              You are solely responsible for the accuracy of data you choose to sync to
              QuickBooks Online. {COMPANY} is not liable for (a) errors in your QBO records
              resulting from inaccurate data you entered into {APP_NAME}; (b) any QBO API
              changes, outages, or service interruptions caused by Intuit; or (c) any QBO account
              fees, reconciliation costs, or professional accounting fees arising from your use
              of the integration.
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
              <li>ANY WARRANTY THAT COMMISSION CALCULATIONS PRODUCED BY THE SERVICE WILL BE ACCURATE, COMPLETE, OR COMPLIANT WITH ANY PARTICULAR BROKERAGE AGREEMENT OR APPLICABLE LAW</li>
              <li>ANY WARRANTY THAT THE SERVICE WILL MEET YOUR SPECIFIC BUSINESS OR ACCOUNTING REQUIREMENTS</li>
            </ul>
            <p className="mt-4">
              {APP_NAME} is a calculation and automation tool. You are solely responsible for
              verifying that all commission calculations, cap tracking results, and financial
              records produced by the Service are accurate and consistent with the terms of your
              agreements with your agents. We strongly recommend that you have all commission
              calculations and accounting records reviewed by a licensed real estate attorney
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
            <h2 className="text-2xl font-bold text-gray-900 mb-3">13. Cancellation and Data Deletion</h2>
            <p>
              You may cancel your subscription at any time through{" "}
              <strong>app.splitre.app &rsaquo; Settings &rsaquo; Billing &rsaquo; Cancel Subscription</strong>{" "}
              or by emailing <a href={`mailto:${BILLING_EMAIL}`} className="text-indigo-600 hover:underline">{BILLING_EMAIL}</a>.
              Cancellation takes effect at the end of your current paid billing period. You will
              retain full access to the Service through the end of that period.
            </p>
            <p className="mt-3">
              Following cancellation, your account will enter a <strong>30-day data retention window</strong>.
              During this period, you may log in and export a complete backup of your brokerage data
              (commission plans, agent records, deal history, and cap data) by navigating to{" "}
              <strong>app.splitre.app &rsaquo; Settings &rsaquo; Data Export</strong> and selecting
              &ldquo;Download Full Export.&rdquo; Your export will be provided as a CSV archive.
            </p>
            <p className="mt-3">
              After the 30-day data retention window expires, all of your Customer Data will be
              permanently and irreversibly deleted from our systems and backups. This deletion
              cannot be undone. We will send a reminder email at 7 days and 3 days before
              permanent deletion occurs.
            </p>
            <p className="mt-3">
              For refunds applicable upon cancellation, see our{" "}
              <a href="/refund-policy" className="text-indigo-600 hover:underline">Refund and Cancellation Policy</a>.
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
              <li>Payment has not been received within 7 days of a billing failure after our standard retry attempts</li>
            </ul>
            <p className="mt-4">
              Where we terminate your account for cause, we will provide written notice stating
              the reason where possible. Where termination is for cause, you will not be entitled
              to a refund for any unused portion of your subscription period. The 30-day data
              export window described in Section 13 will still be made available following
              termination, except where termination arises from illegal activity or serious
              abuse of the Service.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">15. Governing Law</h2>
            <p>
              These Terms and any dispute arising from your use of the Service shall be governed
              by and construed in accordance with the laws of the State of Delaware, United States,
              without regard to its conflict-of-law principles.
            </p>
          </section>

          {/* 16 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">16. Dispute Resolution and Arbitration</h2>
            <p>
              <strong>PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS, INCLUDING
              YOUR RIGHT TO FILE A LAWSUIT IN COURT.</strong>
            </p>
            <p className="mt-3">
              <strong>Informal Resolution First.</strong> Before initiating any formal dispute
              process, you agree to contact us at{" "}
              <a href={`mailto:${LEGAL_EMAIL}`} className="text-indigo-600 hover:underline">{LEGAL_EMAIL}</a>{" "}
              and provide a written description of the dispute. We will have 30 days to attempt
              to resolve the dispute informally.
            </p>
            <p className="mt-3">
              <strong>Binding Arbitration.</strong> If the dispute is not resolved informally
              within 30 days, it shall be resolved by binding arbitration administered by the
              American Arbitration Association (&ldquo;AAA&rdquo;) under its Consumer or
              Commercial Arbitration Rules, as applicable. The arbitration shall be conducted
              in English. The arbitrator&rsquo;s decision shall be final and binding and may
              be entered as a judgment in any court of competent jurisdiction.
            </p>
            <p className="mt-3">
              <strong>Class Action Waiver.</strong> YOU AND {COMPANY.toUpperCase()} EACH WAIVE
              THE RIGHT TO BRING OR PARTICIPATE IN ANY CLASS ACTION, CLASS ARBITRATION, OR
              REPRESENTATIVE PROCEEDING. Each party may only bring claims in its individual
              capacity.
            </p>
            <p className="mt-3">
              <strong>Exceptions.</strong> Notwithstanding the above, either party may seek
              emergency injunctive or other equitable relief in any court of competent
              jurisdiction to prevent irreparable harm pending arbitration, or to enforce an
              arbitration award.
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
              {COMPANY} regarding the Service and supersede all prior agreements or communications.
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
              sale of assets.
            </p>
            <p className="mt-3">
              <strong>Force Majeure.</strong> We will not be liable for any delay or failure to
              perform resulting from causes beyond our reasonable control, including acts of God,
              natural disasters, war, terrorism, government actions, labor disputes, internet
              outages, or third-party service failures (including Stripe, Supabase, or Intuit).
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
