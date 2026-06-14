import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "SplitRE Terms of Service — your agreement with Keplify LLC when using SplitRE commission management software.",
  alternates: { canonical: "https://splitre.app/terms" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "June 14, 2026";
const COMPANY = "Keplify LLC";
const EMAIL = "mike@keplify.com";
const APP_NAME = "SplitRE";

export default function TermsPage() {
  return (
    <div className="bg-white py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">Effective date: {EFFECTIVE_DATE}</p>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">

          <section>
            <p>
              These Terms of Service ("Terms") govern your use of {APP_NAME} (the
              "Service"), operated by {COMPANY}, a Delaware limited liability company
              ("we," "us," or "our"). By creating an account or using the Service, you
              agree to these Terms. If you are using the Service on behalf of a
              business, you represent that you have authority to bind that business.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. The Service</h2>
            <p>
              {APP_NAME} is a web-based commission management tool for real estate
              brokerages. It calculates agent commission splits, tracks annual caps, and
              integrates with QuickBooks Online. The Service is provided on a
              subscription basis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Account registration</h2>
            <p>
              You must provide accurate information when creating an account. You are
              responsible for maintaining the security of your password and for all
              activity that occurs under your account. Notify us immediately at{" "}
              {EMAIL} if you believe your account has been compromised.
            </p>
            <p className="mt-3">
              One account may be used by one brokerage. You may not share your account
              with other brokerages or resell access to the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Free trial</h2>
            <p>
              New accounts receive a 14-day free trial with full access to all
              features. No credit card is required to start a trial. At the end of the
              trial, you must add a payment method to continue using the Service.
              Trial accounts that are not converted are paused and data is retained for
              30 days, then may be deleted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Subscriptions and billing</h2>
            <p>
              Subscriptions are billed monthly or annually in advance based on your
              chosen plan. All prices are in US dollars. By subscribing, you authorize
              us (via Stripe) to charge your payment method on a recurring basis.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Upgrades</h3>
            <p>
              Upgrading your plan takes effect immediately. You will be charged the
              prorated difference for the remainder of your current billing period.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Downgrades and cancellation</h3>
            <p>
              You may cancel or downgrade at any time from your billing settings.
              Cancellations and downgrades take effect at the end of your current
              billing period. No refunds are issued for unused portions of a billing
              period except where required by applicable law.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Past-due accounts</h3>
            <p>
              If a payment fails, we will retry the charge and notify you by email. If
              the account remains unpaid for 7 days, access to the Service may be
              suspended. Your data is preserved during suspension.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Use the Service for any unlawful purpose</li>
              <li>Attempt to reverse-engineer or extract source code from the Service</li>
              <li>Use automated scripts to scrape, crawl, or otherwise extract data from the Service</li>
              <li>Interfere with or disrupt the integrity or performance of the Service</li>
              <li>Upload malicious code or content of any kind</li>
              <li>Impersonate another user or brokerage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Your data</h2>
            <p>
              You retain all ownership of the data you enter into the Service, including
              commission plans, agent information, and deal records. You grant us a
              limited, non-exclusive license to process your data solely to provide the
              Service. We do not claim any ownership of your data.
            </p>
            <p className="mt-3">
              You are responsible for ensuring that any personal data you enter about
              your agents (names, income) is handled in accordance with applicable
              privacy laws. See our Privacy Policy for how we protect that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">7. QuickBooks integration</h2>
            <p>
              The QuickBooks Online integration requires you to authorize {APP_NAME}{" "}
              using your own Intuit credentials. You are responsible for the accuracy
              of the data you sync to QuickBooks. We are not responsible for any errors
              in your QuickBooks records resulting from incorrect data you entered into{" "}
              {APP_NAME}, or from any Intuit API outage or change.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Intellectual property</h2>
            <p>
              The Service, including all software, design, trademarks, and content
              created by us, is owned by {COMPANY} and protected by US and
              international intellectual property laws. "SplitRE" is a trademark of{" "}
              {COMPANY}. Nothing in these Terms grants you ownership of any part of
              the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Disclaimer of warranties</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES
              OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE
              UNINTERRUPTED, ERROR-FREE, OR THAT COMMISSION CALCULATIONS WILL SATISFY
              ANY SPECIFIC LEGAL OR ACCOUNTING REQUIREMENT.
            </p>
            <p className="mt-3">
              SplitRE is a calculation tool. You are responsible for verifying that
              commission calculations comply with any agreements between your brokerage
              and your agents, and with applicable law. We recommend consulting a
              licensed accountant or attorney for compliance questions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Limitation of liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, {COMPANY.toUpperCase()} SHALL NOT
              BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING
              OUT OF OR RELATED TO THESE TERMS OR YOUR USE OF THE SERVICE, EVEN IF WE
              HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="mt-3">
              OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING UNDER THESE TERMS SHALL
              NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless {COMPANY}, its officers,
              directors, employees, and agents from any claim, liability, damage, or
              expense (including reasonable legal fees) arising from your use of the
              Service, your violation of these Terms, or your infringement of any
              third-party right.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">12. Termination</h2>
            <p>
              We may suspend or terminate your access to the Service at our discretion
              if you violate these Terms or if we believe your use poses a risk to
              other users or the Service. We will provide reasonable notice where
              possible. Upon termination, your right to use the Service ends immediately,
              and we will retain your data for 30 days before deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">13. Changes to these Terms</h2>
            <p>
              We may update these Terms from time to time. When we make material
              changes, we will update the effective date at the top and notify active
              subscribers by email at least 14 days before the changes take effect.
              Continued use of the Service after that date constitutes acceptance of
              the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">14. Governing law and disputes</h2>
            <p>
              These Terms are governed by the laws of the State of Delaware, USA,
              without regard to its conflict-of-law provisions. Any dispute arising
              from these Terms or the Service shall be resolved by binding arbitration
              under the rules of the American Arbitration Association (AAA), conducted
              in English. Class action lawsuits and class-wide arbitration are not
              permitted. Notwithstanding the foregoing, either party may seek
              injunctive or other equitable relief in any court of competent
              jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">15. Contact</h2>
            <p>
              {COMPANY}<br />
              Incorporated in Delaware, USA<br />
              Email:{" "}
              <a href={`mailto:${EMAIL}`} className="text-indigo-600 hover:underline">
                {EMAIL}
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
