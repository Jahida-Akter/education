export const dynamic = "force-static";

const SECTIONS = [
  {
    title: "1. Who we are",
    body: "TradeSmart Education (\"we\", \"us\", \"our\") operates this website as a free educational resource about financial markets and online trading. We are not a regulated financial services firm. For questions about this Privacy Policy, contact us at: support@tradesmart-education.com",
  },
  {
    title: "2. What data do we collect?",
    body: "This site does not require registration, log-in, or the submission of any personal data. We do not operate contact forms or newsletter sign-ups. Standard web-server access logs automatically record: your IP address (or a partial IP address where required by law), the date and time of your visit, the pages you requested, your browser type and operating system, and the referring URL. These logs are used solely for security monitoring and operational purposes.",
  },
  {
    title: "3. Cookies and tracking",
    body: "This site does not set any advertising cookies, marketing cookies, or third-party tracking pixels. We do not use Google Analytics, Facebook Pixel, or any similar behavioural-tracking tool. Our hosting provider (Vercel) may log standard access data as described above.",
  },
  {
    title: "4. Legal basis for processing (GDPR)",
    body: "For visitors in the European Economic Area (EEA), UK, or Switzerland, we process server-log data on the basis of our legitimate interest in maintaining the security and integrity of this website (Article 6(1)(f) GDPR). No profiling or automated decision-making takes place.",
  },
  {
    title: "5. How we use data",
    body: "Server-log data is used exclusively to: (a) detect and prevent security threats; (b) debug technical errors; and (c) understand aggregate traffic patterns. We do not use log data to identify, track, or market to individual visitors.",
  },
  {
    title: "6. Data sharing and processors",
    body: "We do not sell, rent, or trade any personal data. Server infrastructure is hosted on Vercel, Inc. (United States). Vercel acts as a data processor under a Data Processing Agreement and may retain access logs in accordance with its own retention policies. No other third parties receive personal data from this site.",
  },
  {
    title: "7. International transfers",
    body: "Our hosting provider operates servers in the United States and other regions. For EEA/UK residents, such transfers are covered by appropriate safeguards (Standard Contractual Clauses). By using this site you acknowledge that your connection data may be processed outside your home country.",
  },
  {
    title: "8. Data retention",
    body: "Server access logs are retained for a maximum of 90 days for security purposes and are then automatically deleted or anonymised.",
  },
  {
    title: "9. Your rights (EEA, UK, Switzerland)",
    body: "Under GDPR and the UK GDPR you have the right to: access the personal data we hold about you; request rectification or erasure; object to or restrict processing; and lodge a complaint with your local supervisory authority. Because this site holds only transient server-log data which is inherently difficult to attribute to a specific individual, most requests can be fulfilled by simply ceasing to visit the site. To exercise any right, email us at support@tradesmart-education.com",
  },
  {
    title: "10. California residents (CCPA / CPRA)",
    body: "We do not sell or share personal information as defined by the California Consumer Privacy Act. California residents may contact us at support@tradesmart-education.com to exercise their rights under CCPA/CPRA.",
  },
  {
    title: "11. Children",
    body: "This site is not directed at children under 18. We do not knowingly collect any information from minors. If you believe a minor has submitted information to us, please contact us and we will promptly delete it.",
  },
  {
    title: "12. Third-party websites",
    body: "This site may contain links to third-party websites. We are not responsible for the privacy practices or content of any external site. We encourage you to review the privacy policy of each site you visit.",
  },
  {
    title: "13. Changes to this policy",
    body: "We may update this Privacy Policy at any time. The \"Last updated\" date at the top of this page reflects the most recent revision. Where changes are material, we will update that date prominently.",
  },
  {
    title: "14. Contact",
    body: "For any privacy-related enquiry or to exercise a data-subject right, contact: support@tradesmart-education.com",
  },
];

export default function PrivacyPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#ffffff", color: "#111827", fontFamily: "'Segoe UI', system-ui, Arial, sans-serif", lineHeight: 1.6 }}>

      <div style={{ background: "#fefce8", borderBottom: "2px solid #fde68a", padding: "10px 24px", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: 13, color: "#92400e", fontWeight: 600 }}>
          &#9888; This site is for educational purposes only. We do not provide financial advice or investment services.
        </p>
      </div>

      <header style={{ borderBottom: "1px solid #e5e7eb", padding: "14px 32px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <a href="/" style={{ fontSize: 18, fontWeight: 700, color: "#111827", letterSpacing: "-0.3px", textDecoration: "none" }}>
            TradeSmart <span style={{ color: "#059669", fontWeight: 400 }}>Education</span>
          </a>
          <nav style={{ display: "flex", gap: 20, fontSize: 13 }}>
            <a href="/"      style={{ color: "#6b7280", textDecoration: "none" }}>Home</a>
            <a href="/terms" style={{ color: "#6b7280", textDecoration: "none" }}>Terms of Service</a>
          </nav>
        </div>
      </header>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 32px" }}>
        <h1 style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 800, color: "#111827", marginBottom: 4 }}>Privacy Policy</h1>
        <p style={{ fontSize: 12, color: "#9ca3af", marginBottom: 40 }}>Last updated: April 2026</p>

        <div style={{ background: "#f0fdf4", border: "1px solid #86efac", borderRadius: 8, padding: "14px 18px", marginBottom: 36, fontSize: 13, color: "#14532d" }}>
          <strong>Summary:</strong> This educational website does not collect personal information. We do not use advertising or tracking cookies. Standard server access logs (IP, date, page) are retained for up to 90 days for security purposes only.
        </div>

        {SECTIONS.map((s) => (
          <div key={s.title} style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 8, marginTop: 0 }}>{s.title}</h2>
            <p style={{ fontSize: 14, color: "#4b5563", margin: 0, lineHeight: 1.8 }}>{s.body}</p>
          </div>
        ))}
      </div>

      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "20px 32px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12, fontSize: 12, color: "#9ca3af" }}>
          <span>&copy; {new Date().getFullYear()} TradeSmart Education. Educational content only.</span>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="/terms"   style={{ color: "#9ca3af", textDecoration: "none" }}>Terms</a>
            <a href="/privacy" style={{ color: "#9ca3af", textDecoration: "none" }}>Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}