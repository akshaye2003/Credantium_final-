import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />

          <div className="max-w-4xl mx-auto px-6 py-24">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
              <p className="text-slate-300 mb-8">Last Updated: 31 October 2025</p>

              <div className="prose prose-invert prose-slate max-w-none">
                <p className="text-slate-300 leading-relaxed mb-8">
                  Welcome to Credantium. Please read these Terms of Service ("Terms") carefully before using our
                  website, software, automation workflows, AI models, or any related services ("Services"). By accessing
                  or using our Services, you agree to be bound by these Terms. If you do not agree, do not use our
                  Services.
                </p>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Definitions</h2>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>Company: Credantium LLP ( India)</li>
                    <li>User: Any individual or organization accessing or using the Services</li>
                    <li>Deliverables: Automations, scripts, AI outputs, dashboards, code, and related assets</li>
                    <li>Third-Party Platforms: Any external services integrated with Credantium's Services</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">2. No Guarantees and Service Availability</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    All Services are provided on an "as is" and "as available" basis. Credantium does not guarantee:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                    <li>Business results, increased revenue, or performance improvements</li>
                    <li>Accuracy or reliability of AI-generated outputs</li>
                    <li>Continuous uptime or error-free operation</li>
                    <li>Compatibility with third-party system changes</li>
                    <li>Security from cyber threats or unauthorized access</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">
                    Users must verify all outputs before relying on them.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">3. User Responsibilities</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">Users agree to:</p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                    <li>Ensure all data and actions comply with applicable laws and terms of third-party platforms</li>
                    <li>Monitor automations and review AI outputs</li>
                    <li>Use the Services only for legal and authorized purposes</li>
                    <li>Maintain account security and access control</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">
                    Credantium is not responsible for misuse, unauthorized access due to user negligence, or data loss
                    on external systems.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Integrations</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Credantium integrates with external systems purely as a convenience. We are not liable for:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                    <li>Account suspensions or penalties by third-party platforms</li>
                    <li>API failures, rate limits, or system changes</li>
                    <li>Data loss or corruption from external systems</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">The User assumes all related risks.</p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Intellectual Property</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    All proprietary software, automation logic, models, and systems remain exclusive property of
                    Credantium. Users receive a non-exclusive, revocable license to use Deliverables only within their
                    organization.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Users may not reverse-engineer, resell, sublicense, or distribute our Deliverables without written
                    consent.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    User-owned data remains their property, but Credantium may process it solely to deliver the
                    Services.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">6. AI Output Disclaimer</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    AI-generated content may be incorrect, outdated, or harmful if used without review. Users accept
                    full responsibility for:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                    <li>Verification of all outputs</li>
                    <li>Legal and compliance checks</li>
                    <li>Use of AI-generated messages, data, or decisions</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">
                    Credantium disclaims liability for any damages caused by reliance on AI content.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">To the maximum extent permitted by law:</p>
                  <p className="text-slate-300 leading-relaxed mb-4">Credantium shall not be liable for:</p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                    <li>Loss of profits, business, or revenue</li>
                    <li>Damages from automation errors</li>
                    <li>Reputational harm or loss of customers</li>
                    <li>Regulatory fines or legal penalties</li>
                    <li>Indirect, incidental, or consequential damages</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">
                    Total liability is limited to the fees paid in the 30 days preceding the claim.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">8. Indemnification</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Users agree to defend, indemnify, and hold Credantium harmless from any claims, disputes, losses, or
                    regulatory actions resulting from:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>User's data or account configurations</li>
                    <li>User's legal or compliance violations</li>
                    <li>Automations interacting with third-party systems</li>
                    <li>Misuse of the Services</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">9. Data and Security</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    We use reasonable industry safeguards, but cannot guarantee absolute protection. Users are
                    responsible for:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>Backing up important data</li>
                    <li>Ensuring lawful collection and usage of personal data</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">10. Termination</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Credantium may suspend or terminate access at any time without notice, including for:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                    <li>Security concerns</li>
                    <li>Violation of these Terms</li>
                    <li>Platform misuse or illegal activity</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">Users remain responsible for fees already incurred.</p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">11. Governing Law & Dispute Resolution</h2>
                  <p className="text-slate-300 leading-relaxed">
                    These Terms are governed by UAE federal laws. All disputes are resolved exclusively through binding
                    arbitration in Dubai, UAE. Class actions are waived.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Information</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Phone - +44 7553149830, +971 556508717, +91 9446094512
                    <br />
                    Email: credantium@gmail.com
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">13. Acceptance of Terms</h2>
                  <p className="text-slate-300 leading-relaxed">
                    By accessing or using Credantium's Services, the User acknowledges and agrees to these Terms in
                    full.
                  </p>
                </section>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </div>
  )
}
