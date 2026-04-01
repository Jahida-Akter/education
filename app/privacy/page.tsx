export const dynamic = "force-static";

export default function PrivacyPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#ffffff", color: "#111827", fontFamily: "'Segoe UI', system-ui, Arial, sans-serif", lineHeight: 1.7 }}>

      <header style={{ borderBottom: "1px solid #e5e7eb", padding: "14px 32px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <a href="/" style={{ fontSize: 18, fontWeight: 700, color: "#111827", textDecoration: "none" }}>
            TradeSmart <span style={{ color: "#059669", fontWeight: 400 }}>Education</span>
          </a>
          <nav style={{ display: "flex", gap: 20, fontSize: 13 }}>
            <a href="/"      style={{ color: "#6b7280", textDecoration: "none" }}>Home</a>
            <a href="/terms" style={{ color: "#6b7280", textDecoration: "none" }}>Terms of Service</a>
          </nav>
        </div>
      </header>

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "52px 32px 64px" }}>

        <h1 style={{ fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 800, color: "#111827", marginBottom: 4, marginTop: 0 }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: 13, color: "#9ca3af", marginBottom: 40 }}>
          Effective Date: April 1, 2026 &nbsp;&middot;&nbsp; Last updated: April 1, 2026
        </p>

        <p style={{ fontSize: 14, color: "#4b5563", marginBottom: 36, lineHeight: 1.85 }}>
          Welcome to TradeSmart Education (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting your
          personal data and being transparent about how we handle information when you visit this website.
          This Privacy Policy explains what data we collect, why we collect it, how we use it, and your rights
          in relation to it.
        </p>

        {/* 1 */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 14, marginTop: 0, paddingBottom: 8, borderBottom: "1px solid #f3f4f6" }}>
            1. Information We Collect
          </h2>

          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#374151", marginBottom: 8, marginTop: 16 }}>a) Personal Information</h3>
          <p style={{ fontSize: 14, color: "#4b5563", margin: "0 0 8px", lineHeight: 1.8 }}>
            This website does not operate registration forms, newsletter sign-ups, or account creation. We
            do not actively solicit personal information from visitors.
          </p>
          <p style={{ fontSize: 14, color: "#4b5563", margin: 0, lineHeight: 1.8 }}>
            If you contact us by email, we will receive the information you choose to provide in that message
            (such as your name and email address). We use this solely to respond to your enquiry.
          </p>

          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#374151", marginBottom: 8, marginTop: 20 }}>b) Usage Data</h3>
          <p style={{ fontSize: 14, color: "#4b5563", margin: "0 0 8px", lineHeight: 1.8 }}>
            When you visit this website, our hosting infrastructure automatically records standard server
            access log data, which may include:
          </p>
          <ul style={{ fontSize: 14, color: "#4b5563", paddingLeft: 22, marginBottom: 0, lineHeight: 2 }}>
            <li>Your IP address (may be partially anonymised where required by law)</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent</li>
            <li>Date and time of your visit</li>
            <li>Referring URL</li>
          </ul>

          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#374151", marginBottom: 8, marginTop: 20 }}>c) Cookies &amp; Tracking Technologies</h3>
          <p style={{ fontSize: 14, color: "#4b5563", margin: 0, lineHeight: 1.8 }}>
            This website does not use advertising cookies, remarketing pixels, or behavioural tracking tools.
            We do not use Google Analytics, Meta Pixel, or equivalent third-party tracking scripts.
            Standard server-side access logs (described above) are the only form of data collection on this site.
          </p>
        </section>

        {/* 2 */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 14, marginTop: 0, paddingBottom: 8, borderBottom: "1px solid #f3f4f6" }}>
            2. How We Use Your Information
          </h2>
          <p style={{ fontSize: 14, color: "#4b5563", margin: "0 0 8px", lineHeight: 1.8 }}>We use the data we collect to:</p>
          <ul style={{ fontSize: 14, color: "#4b5563", paddingLeft: 22, marginBottom: 0, lineHeight: 2 }}>
            <li>Ensure the website operates correctly and securely</li>
            <li>Detect and prevent malicious activity, abuse, or security threats</li>
            <li>Monitor aggregate traffic patterns to improve content and performance</li>
            <li>Respond to enquiries sent to us directly by email</li>
          </ul>
          <p style={{ fontSize: 14, color: "#4b5563", marginTop: 12, marginBottom: 0, lineHeight: 1.8 }}>
            We do not use your data for targeted advertising, profiling, or to build marketing lists.
          </p>
        </section>

        {/* 3 */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 14, marginTop: 0, paddingBottom: 8, borderBottom: "1px solid #f3f4f6" }}>
            3. Legal Basis for Processing (GDPR)
          </h2>
          <p style={{ fontSize: 14, color: "#4b5563", margin: "0 0 12px", lineHeight: 1.8 }}>
            If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, we process
            your data under the following legal bases:
          </p>
          <ul style={{ fontSize: 14, color: "#4b5563", paddingLeft: 22, marginBottom: 0, lineHeight: 2 }}>
            <li><strong>Legitimate interests</strong> — Processing server access logs to maintain the security and stability of this website (Article 6(1)(f) GDPR).</li>
            <li><strong>Consent</strong> — If you contact us directly and provide personal information, you do so voluntarily.</li>
            <li><strong>Legal obligations</strong> — Where we are required by law to retain or disclose data.</li>
          </ul>
          <p style={{ fontSize: 14, color: "#4b5563", marginTop: 12, marginBottom: 0, lineHeight: 1.8 }}>
            No automated decision-making or profiling takes place on this website.
          </p>
        </section>

        {/* 4 */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 14, marginTop: 0, paddingBottom: 8, borderBottom: "1px solid #f3f4f6" }}>
            4. Data Sharing
          </h2>
          <p style={{ fontSize: 14, color: "#4b5563", margin: "0 0 12px", lineHeight: 1.8 }}>
            <strong>We do not sell, rent, or trade your personal data.</strong>
          </p>
          <p style={{ fontSize: 14, color: "#4b5563", margin: "0 0 8px", lineHeight: 1.8 }}>We may share data only in the following limited circumstances:</p>
          <ul style={{ fontSize: 14, color: "#4b5563", paddingLeft: 22, marginBottom: 0, lineHeight: 2 }}>
            <li><strong>Service providers</strong> — Our website is hosted on Vercel, Inc. (United States), which processes server access logs on our behalf as a data processor under a Data Processing Agreement.</li>
            <li><strong>Legal requirements</strong> — Where disclosure is required by applicable law, court order, or a request from a competent regulatory authority.</li>
            <li><strong>Business transfers</strong> — In the event of a merger, acquisition, or sale of assets, data may be transferred to the relevant successor entity.</li>
          </ul>
          <p style={{ fontSize: 14, color: "#4b5563", marginTop: 12, marginBottom: 0, lineHeight: 1.8 }}>
            No other third parties receive personal data from this website.
          </p>
        </section>

        {/* 5 */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 14, marginTop: 0, paddingBottom: 8, borderBottom: "1px solid #f3f4f6" }}>
            5. Data Retention
          </h2>
          <p style={{ fontSize: 14, color: "#4b5563", margin: "0 0 8px", lineHeight: 1.8 }}>
            We retain data only for as long as necessary for the purposes described above:
          </p>
          <ul style={{ fontSize: 14, color: "#4b5563", paddingLeft: 22, marginBottom: 0, lineHeight: 2 }}>
            <li><strong>Server access logs</strong> — Retained for a maximum of 90 days for security monitoring, then automatically deleted or anonymised.</li>
            <li><strong>Email correspondence</strong> — Retained for the duration needed to resolve your enquiry, plus a reasonable period for follow-up (typically up to 12 months).</li>
          </ul>
        </section>

        {/* 6 */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 14, marginTop: 0, paddingBottom: 8, borderBottom: "1px solid #f3f4f6" }}>
            6. Your Rights
          </h2>
          <p style={{ fontSize: 14, color: "#4b5563", margin: "0 0 12px", lineHeight: 1.8 }}>
            Depending on your location, you may have the following rights regarding your personal data:
          </p>
          <ul style={{ fontSize: 14, color: "#4b5563", paddingLeft: 22, marginBottom: 12, lineHeight: 2 }}>
            <li><strong>Right of access</strong> — Request a copy of the personal data we hold about you.</li>
            <li><strong>Right to rectification</strong> — Request correction of inaccurate or incomplete data.</li>
            <li><strong>Right to erasure</strong> — Request deletion of your personal data.</li>
            <li><strong>Right to restriction</strong> — Request that we limit how we process your data.</li>
            <li><strong>Right to object</strong> — Object to processing based on legitimate interests.</li>
            <li><strong>Right to data portability</strong> — Receive your data in a structured, machine-readable format.</li>
          </ul>
          <p style={{ fontSize: 14, color: "#4b5563", margin: "0 0 8px", lineHeight: 1.8 }}>
            To exercise any of these rights, contact us at:{" "}
            <a href="mailto:support@tradesmart-education.com" style={{ color: "#059669" }}>
              support@tradesmart-education.com
            </a>
          </p>
          <p style={{ fontSize: 14, color: "#4b5563", margin: 0, lineHeight: 1.8 }}>
            If you are in the EEA or UK and are not satisfied with our response, you have the right to
            lodge a complaint with your local data protection supervisory authority.
          </p>
        </section>

        {/* 7 */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 14, marginTop: 0, paddingBottom: 8, borderBottom: "1px solid #f3f4f6" }}>
            7. Data Security
          </h2>
          <p style={{ fontSize: 14, color: "#4b5563", margin: 0, lineHeight: 1.8 }}>
            We implement appropriate technical and organisational measures to protect your data against
            unauthorised access, loss, alteration, or disclosure. These include HTTPS/TLS encryption for
            all traffic in transit and access controls on server infrastructure. However, no method of
            transmission or storage over the internet is 100% secure. We take all reasonable steps to
            protect your data but cannot guarantee absolute security.
          </p>
        </section>

        {/* 8 */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 14, marginTop: 0, paddingBottom: 8, borderBottom: "1px solid #f3f4f6" }}>
            8. Third-Party Services
          </h2>
          <p style={{ fontSize: 14, color: "#4b5563", margin: "0 0 12px", lineHeight: 1.8 }}>
            This website is hosted by <strong>Vercel, Inc.</strong>, which may process server-side access
            data as described above. Vercel&apos;s privacy practices are governed by their own Privacy Policy,
            available at vercel.com/legal/privacy-policy.
          </p>
          <p style={{ fontSize: 14, color: "#4b5563", margin: 0, lineHeight: 1.8 }}>
            This website does not embed or use third-party advertising platforms (including Meta/Facebook
            Pixel, Google Ads tags, or similar tracking scripts). If this changes, this policy will be
            updated accordingly before any such tools are activated.
          </p>
        </section>

        {/* 9 */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 14, marginTop: 0, paddingBottom: 8, borderBottom: "1px solid #f3f4f6" }}>
            9. Cookies
          </h2>
          <p style={{ fontSize: 14, color: "#4b5563", margin: "0 0 12px", lineHeight: 1.8 }}>
            This website does not set advertising or tracking cookies. No cookie consent banner is displayed
            because no non-essential cookies are used.
          </p>
          <p style={{ fontSize: 14, color: "#4b5563", margin: 0, lineHeight: 1.8 }}>
            Your browser may store standard session data as part of normal HTTPS communication. You can
            control cookie behaviour through your browser settings at any time, though disabling all
            cookies may affect how some websites (not this one) function.
          </p>
        </section>

        {/* 10 */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 14, marginTop: 0, paddingBottom: 8, borderBottom: "1px solid #f3f4f6" }}>
            10. International Data Transfers
          </h2>
          <p style={{ fontSize: 14, color: "#4b5563", margin: 0, lineHeight: 1.8 }}>
            Our hosting provider, Vercel, operates infrastructure in the United States and other regions.
            If you are accessing this website from the EEA, UK, or Switzerland, your connection data may
            be processed outside your jurisdiction. Such transfers are covered by appropriate safeguards
            including Standard Contractual Clauses (SCCs) under Vercel&apos;s Data Processing Agreement.
          </p>
        </section>

        {/* 11 */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 14, marginTop: 0, paddingBottom: 8, borderBottom: "1px solid #f3f4f6" }}>
            11. Children&apos;s Privacy
          </h2>
          <p style={{ fontSize: 14, color: "#4b5563", margin: 0, lineHeight: 1.8 }}>
            This website is intended for individuals aged 18 and over. We do not knowingly collect personal
            data from anyone under the age of 18. If you believe a minor has provided personal information
            through this website, please contact us and we will delete it promptly.
          </p>
        </section>

        {/* 12 */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 14, marginTop: 0, paddingBottom: 8, borderBottom: "1px solid #f3f4f6" }}>
            12. Changes to This Policy
          </h2>
          <p style={{ fontSize: 14, color: "#4b5563", margin: 0, lineHeight: 1.8 }}>
            We may update this Privacy Policy from time to time to reflect changes in our practices or
            applicable law. When we do, we will update the &quot;Last updated&quot; date at the top of this page.
            We encourage you to review this page periodically. Continued use of this website after changes
            are posted constitutes acceptance of the updated policy.
          </p>
        </section>

        {/* 13 */}
        <section style={{ marginBottom: 0 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 14, marginTop: 0, paddingBottom: 8, borderBottom: "1px solid #f3f4f6" }}>
            13. Contact Us
          </h2>
          <p style={{ fontSize: 14, color: "#4b5563", margin: "0 0 12px", lineHeight: 1.8 }}>
            If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle
            your data, please contact us:
          </p>
          <ul style={{ fontSize: 14, color: "#4b5563", paddingLeft: 22, marginBottom: 0, lineHeight: 2 }}>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@tradesmart-education.com" style={{ color: "#059669" }}>
                support@tradesmart-education.com
              </a>
            </li>
          </ul>
          <p style={{ fontSize: 14, color: "#4b5563", marginTop: 12, marginBottom: 0, lineHeight: 1.8 }}>
            We aim to respond to all privacy-related requests within 30 days. For complex requests we
            may extend this to 45 days and will notify you accordingly.
          </p>
        </section>

      </div>

      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "20px 32px" }}>
        <div
          style={{
            maxWidth: 820,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            fontSize: 12,
            color: "#9ca3af",
          }}
        >
          <span>&copy; {new Date().getFullYear()} TradeSmart Education. Educational content only. Not a regulated entity.</span>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="/terms"   style={{ color: "#9ca3af", textDecoration: "none" }}>Terms of Service</a>
            <a href="/privacy" style={{ color: "#9ca3af", textDecoration: "none" }}>Privacy Policy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}