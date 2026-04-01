export const dynamic = "force-static";

const SECTIONS = [
  {
    title: "1. About this site",
    body: "TradeSmart Education (\"we\", \"us\") operates this website as a free, independent educational resource about online trading and financial markets. We are not a broker, investment adviser, financial planner, or trading signal provider. We are not regulated by the FCA, ASIC, CySEC, SEC, CFTC, or any other financial regulatory authority. Nothing on this site constitutes financial advice, investment advice, or a solicitation to trade any financial instrument.",
  },
  {
    title: "2. Educational content only",
    body: "All content on this site is provided for educational and informational purposes only. It does not constitute a personal recommendation, investment advice, or a guarantee of any outcome. Any references to trading strategies, instruments, or market examples are for illustrative purposes only. Past performance is not indicative of future results.",
  },
  {
    title: "3. Risk warning",
    body: "Trading contracts for difference (CFDs), foreign exchange (forex), and other leveraged financial instruments involves significant risk of loss. You may lose more than your initial deposit. Leveraged products are not suitable for all investors. Only trade with capital you can afford to lose entirely. Seek independent financial advice before committing any funds to trading.",
  },
  {
    title: "4. No guarantees or warranties",
    body: "This site is provided on an \"as is\" and \"as available\" basis without warranties of any kind. We do not guarantee the accuracy, completeness, or currentness of any content. We may update, correct, or remove content at any time without notice.",
  },
  {
    title: "5. Third-party links",
    body: "This site may contain links to external websites or platforms. We are not responsible for the accuracy, content, privacy practices, or regulatory status of any third-party website. Links do not constitute an endorsement or recommendation.",
  },
  {
    title: "6. Eligibility",
    body: "This site is intended for adults aged 18 or older. It is your responsibility to ensure that accessing educational content about trading is lawful in your jurisdiction.",
  },
  {
    title: "7. Intellectual property",
    body: "All content, text, graphics, and design on this site is our property and is protected by applicable copyright law. You may not reproduce, scrape, or redistribute any content without prior written permission.",
  },
  {
    title: "8. Limitation of liability",
    body: "To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, or consequential loss or damage arising from your use of this site or reliance on any content herein.",
  },
  {
    title: "9. Privacy",
    body: "Your use of this site is subject to our Privacy Policy. This site does not collect personal data beyond standard server logs. Please review our Privacy Policy to understand how we handle any data.",
  },
  {
    title: "10. Cookies",
    body: "This site does not set any advertising or tracking cookies. Standard server-side access logs may record your IP address for security and operational purposes.",
  },
  {
    title: "11. Changes",
    body: "We may update these Terms at any time. The \"Last updated\" date reflects the most recent revision. Continued use of the site constitutes acceptance of any changes.",
  },
  {
    title: "12. Contact",
    body: "For any questions about these Terms, contact us at: support@tradesmart-education.com",
  },
];

export default function TermsPage() {
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
            <a href="/"        style={{ color: "#6b7280", textDecoration: "none" }}>Home</a>
            <a href="/privacy" style={{ color: "#6b7280", textDecoration: "none" }}>Privacy Policy</a>
          </nav>
        </div>
      </header>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 32px" }}>
        <h1 style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 800, color: "#111827", marginBottom: 4 }}>Terms of Service</h1>
        <p style={{ fontSize: 12, color: "#9ca3af", marginBottom: 40 }}>Last updated: April 2026</p>

        <div style={{ background: "#fef3c7", border: "1px solid #fcd34d", borderRadius: 8, padding: "14px 18px", marginBottom: 36, fontSize: 13, color: "#78350f" }}>
          <strong>Important:</strong> This website provides educational information only. It is not a financial services site and does not offer investment advice, trading signals, or account management services.
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