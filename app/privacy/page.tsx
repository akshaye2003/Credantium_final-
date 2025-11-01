import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"

export default function PrivacyPolicyPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
              <p className="text-slate-300 mb-2">Effective Date: 20 Septemper 2025</p>
              <p className="text-slate-300 mb-8">Last Updated: 18 October 2025</p>

              <div className="prose prose-invert prose-slate max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Welcome to Credantium LLP ("Credantium", "we", "our", or "us").
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Credantium is an AI and automation company registered in India, with operations in the United Arab
                    Emirates, United Kingdom, Singapore, and India.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    We respect your privacy and are committed to protecting your personal data. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard information when you visit our website
                    https://credantium.com ("Website") or use our products and services ("Services").
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    By using our Website or Services, you consent to the terms of this Privacy Policy.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">2. Scope of This Policy</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">This Policy applies to:</p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                    <li>Visitors and users of our website.</li>
                    <li>Clients and prospective clients using our automation, AI, and workflow products.</li>
                    <li>Communication through emails, chatbots, or integrations we operate.</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed mb-4">This Policy is designed to comply with:</p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>India's Digital Personal Data Protection Act (DPDP Act, 2023)</li>
                    <li>EU and UK General Data Protection Regulation (GDPR)</li>
                    <li>UAE Personal Data Protection Law (PDPL, 2021)</li>
                    <li>Singapore Personal Data Protection Act (PDPA, 2012)</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">3. Information We Collect</h2>

                  <h3 className="text-xl font-semibold text-white mb-3 mt-6">A. Information You Provide Directly</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                    <li>Contact information: name, company name, email address, phone number, job title.</li>
                    <li>
                      Business information: workflow details, automation requirements, CRM or integration data provided
                      for audits or implementation.
                    </li>
                    <li>
                      Billing details: payment information, tax information, billing address (processed securely through
                      third-party gateways).
                    </li>
                    <li>Communications: messages, feedback, and support tickets.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-3 mt-6">B. Automatically Collected Information</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    When you use our Website, we automatically collect:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                    <li>IP address, browser type, device identifiers, and operating system.</li>
                    <li>Access times, referring URLs, and pages viewed.</li>
                    <li>Cookies and analytics data (Google Analytics, Vercel analytics, etc.).</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-3 mt-6">C. Third-Party Data</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">We may receive or process limited data from:</p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                    <li>
                      CRM or automation platforms (e.g., HubSpot, Zapier, WhatsApp API, OpenAI, Twilio, etc.) used by
                      your business.
                    </li>
                    <li>Partners or vendors assisting in service delivery.</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">
                    We do not store your customers' data unless explicitly required to provide a service, and always
                    under contractual protection.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">4. How We Use Your Information</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">We use collected data to:</p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                    <li>Provide and maintain our Services.</li>
                    <li>Communicate with you about audits, demos, updates, and support.</li>
                    <li>Customize and improve AI workflows and automation systems.</li>
                    <li>Process payments, contracts, and compliance documentation.</li>
                    <li>Conduct analytics, quality assurance, and performance monitoring.</li>
                    <li>Detect and prevent fraud, misuse, or security threats.</li>
                    <li>Comply with applicable legal and regulatory obligations.</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">We never sell personal data to third parties.</p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">5. Legal Basis for Processing (GDPR)</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    For users in the EU or UK, processing is based on:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>Consent – e.g., when you subscribe to updates or request a demo.</li>
                    <li>Contractual necessity – when processing is needed to deliver our services.</li>
                    <li>
                      Legitimate interest – improving our systems, ensuring security, or marketing to existing clients.
                    </li>
                    <li>Legal obligation – compliance with tax or data laws.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">6. Data Sharing and Disclosure</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">We may share data only with:</p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                    <li>
                      Service providers and contractors who assist with hosting, analytics, CRM, automation, or
                      communications (under strict confidentiality).
                    </li>
                    <li>
                      Affiliated companies or consultants in the UAE, UK, Singapore, or India, bound by this same
                      policy.
                    </li>
                    <li>Legal or regulatory authorities, if required by applicable law or to protect our rights.</li>
                    <li>
                      Business successors (e.g., during merger, acquisition, or restructuring), under confidentiality.
                    </li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">
                    We do not permit partners or subcontractors to use your data for their own purposes.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">7. International Data Transfers</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Your information may be stored and processed in multiple jurisdictions where we or our partners
                    operate, including India, UAE, UK, EU, and Singapore. Where required, we implement Standard
                    Contractual Clauses (SCCs) or equivalent safeguards to ensure lawful international data transfer.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">8. Data Retention</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    We retain personal data only as long as necessary to:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                    <li>Fulfil contractual obligations.</li>
                    <li>Comply with legal or regulatory requirements.</li>
                    <li>Resolve disputes or enforce agreements.</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">After that, data is securely deleted or anonymized.</p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">9. Security Measures</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    We implement appropriate technical and organizational measures, including:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                    <li>HTTPS/TLS encryption for data in transit.</li>
                    <li>Secure access control and authentication.</li>
                    <li>Regular vulnerability and compliance audits.</li>
                    <li>Minimal data collection and principle of least privilege.</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">
                    Despite these measures, no system is completely secure. By using our Services, you acknowledge and
                    accept this inherent risk.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">10. Your Rights</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Depending on your jurisdiction, you may have the right to:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                    <li>Access, correct, or update your personal information.</li>
                    <li>Request deletion or restriction of your data.</li>
                    <li>Withdraw consent at any time.</li>
                    <li>Request a copy of your data in portable format.</li>
                    <li>Object to automated decision-making or profiling.</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">
                    To exercise these rights, contact us at privacy@credantium.com. We respond within the timelines
                    required by law.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">11. Cookies and Tracking Technologies</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">We use cookies, pixels, and analytics tools to:</p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                    <li>Improve website performance and personalization.</li>
                    <li>Understand visitor behaviour and traffic patterns.</li>
                    <li>Deliver relevant marketing content.</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">
                    You can control or delete cookies in your browser settings.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">12. Children's Privacy</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Our Services are intended for businesses and professionals aged 18 or older. We do not knowingly
                    collect data from minors. If you believe a minor has provided personal information, please contact
                    us for immediate removal.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">13. Third-Party Services and Integrations</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Our Services may integrate with or link to third-party tools such as:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                    <li>WhatsApp Business API</li>
                    <li>Google Workspace / Cloud</li>
                    <li>Zapier, Make, HubSpot, CRMs</li>
                    <li>OpenAI or other AI model APIs</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">
                    We are not responsible for third-party privacy practices. Users are advised to review those
                    providers' policies before enabling integrations.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">14. Limitation of Liability</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">Credantium shall not be held liable for:</p>
                  <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
                    <li>
                      Any data loss, breach, or unauthorized access caused by third-party integrations or user
                      negligence.
                    </li>
                    <li>Indirect, incidental, or consequential damages arising from the use or misuse of data.</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">
                    Our total liability is limited to the fees paid for the specific service giving rise to the claim.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">15. Updates to This Policy</h2>
                  <p className="text-slate-300 leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in laws or our practices. The
                    revised version will be posted on our website with a new "Effective Date". Continued use of our
                    Services after such updates constitutes your consent to the revised policy.
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
