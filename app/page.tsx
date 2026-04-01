export const dynamic = "force-static";

const CONCEPTS = [
  {
    term: "Bull Market vs Bear Market",
    def: "A bull market describes a period when prices are rising and investor confidence is high. A bear market describes a period of falling prices — typically a decline of 20% or more from recent highs. Both conditions are a normal part of economic cycles.",
  },
  {
    term: "Market Capitalisation",
    def: "The total market value of a company's outstanding shares. Calculated by multiplying the share price by the number of shares in circulation. Companies are often classified as large-cap, mid-cap, or small-cap based on this figure.",
  },
  {
    term: "Dividend",
    def: "A portion of a company's profits distributed to shareholders. Not all companies pay dividends — growth companies often reinvest profits instead. Dividend yield is the annual dividend expressed as a percentage of the share price.",
  },
  {
    term: "Volatility",
    def: "A measure of how much the price of an asset fluctuates over a period of time. Higher volatility means larger price swings in both directions. Volatility is not inherently bad, but it increases the uncertainty of short-term outcomes.",
  },
  {
    term: "Diversification",
    def: "The practice of spreading investments across different asset types, sectors, and geographies to reduce the impact of any single poor-performing investment. Diversification reduces — but does not eliminate — investment risk.",
  },
  {
    term: "Liquidity",
    def: "How easily an asset can be bought or sold without significantly affecting its price. Highly liquid markets (e.g. major stock indices, government bonds) allow large transactions with minimal price impact. Illiquid assets may be difficult to sell quickly.",
  },
  {
    term: "Inflation",
    def: "The rate at which the general price level of goods and services rises over time, reducing the purchasing power of money. Inflation is a key factor in investment decisions, as returns need to exceed inflation to represent real gains.",
  },
  {
    term: "Asset Allocation",
    def: "The process of deciding how to divide an investment portfolio across different categories such as equities, bonds, and cash. Asset allocation is one of the most important factors in determining long-term investment outcomes.",
  },
  {
    term: "Compound Growth",
    def: "The process by which investment returns generate their own returns over time. Often described as 'interest on interest'. Compound growth is more powerful over longer time horizons and is a foundational principle of long-term investing.",
  },
  {
    term: "Risk vs Return",
    def: "A fundamental principle of investing: investments with higher potential returns typically carry higher risk of loss. Understanding and accepting the risk associated with any investment is essential before committing capital.",
  },
];

const ASSET_CLASSES = [
  {
    name: "Equities (Shares)",
    desc: "A share represents a fractional ownership stake in a publicly listed company. Shareholders may benefit from price appreciation and dividends. Equity markets are influenced by company performance, economic conditions, and investor sentiment. Share prices can rise and fall significantly.",
  },
  {
    name: "Bonds (Fixed Income)",
    desc: "A bond is a form of loan to a government or corporation in exchange for regular interest payments and the return of the principal at maturity. Bonds are generally considered lower risk than equities, but they are not risk-free. Bond prices move inversely to interest rates.",
  },
  {
    name: "Commodities",
    desc: "Commodities are physical goods such as gold, silver, crude oil, wheat, and natural gas. Their prices are driven by global supply and demand, macroeconomic data, and geopolitical events. Commodity prices can be highly volatile.",
  },
  {
    name: "Stock Indices",
    desc: "A stock index measures the combined performance of a selected group of companies, such as the S&P 500 (US), FTSE 100 (UK), or DAX (Germany). Indices serve as benchmarks for the overall health of a stock market or sector.",
  },
  {
    name: "Currency Markets",
    desc: "The global currency market involves the exchange of one currency for another. Exchange rates are influenced by interest rate differentials, inflation, political stability, and economic performance. Currency values fluctuate continuously.",
  },
];

const PRINCIPLES = [
  {
    title: "Do Your Research",
    body: "Before investing in anything, understand what you are buying, how it generates value, what risks are involved, and how it fits into your overall financial plan. Never invest in something you do not understand.",
  },
  {
    title: "Only Invest What You Can Afford to Lose",
    body: "Only allocate money to investments that, if entirely lost, would not affect your ability to meet essential living expenses, pay bills, or cover debt obligations. Never borrow money to invest.",
  },
  {
    title: "Understand Your Time Horizon",
    body: "The length of time you plan to hold an investment should influence which assets you consider. Short time horizons may not allow sufficient recovery time if markets decline. Long time horizons can absorb more short-term volatility.",
  },
  {
    title: "Be Aware of Costs",
    body: "Every investment carries costs including fees, charges, and taxes. These costs reduce your overall return. Always understand the full cost of an investment product before committing any capital.",
  },
  {
    title: "Seek Professional Advice",
    body: "This website does not provide financial advice. If you are uncertain about whether any investment is appropriate for your personal financial situation, consult a qualified, independently regulated financial adviser.",
  },
  {
    title: "Be Cautious of Promises",
    body: "Legitimate investments do not guarantee returns. Be extremely cautious of any offer that promises guaranteed profits, unusually high returns, or no risk. These are common characteristics of financial fraud.",
  },
];

export default function EducationPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#111827",
        fontFamily: "'Segoe UI', system-ui, Arial, sans-serif",
        lineHeight: 1.6,
      }}
    >
      {/* Nav */}
      <header style={{ borderBottom: "1px solid #e5e7eb", padding: "14px 32px" }}>
        <div
          style={{
            maxWidth: 920,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 700, color: "#111827", letterSpacing: "-0.3px" }}>
            TradeSmart&nbsp;<span style={{ color: "#059669", fontWeight: 400 }}>Education</span>
          </span>
          <nav style={{ display: "flex", gap: 20, fontSize: 13, flexWrap: "wrap" }}>
            <a href="#how-markets-work" style={{ color: "#6b7280", textDecoration: "none" }}>How Markets Work</a>
            <a href="#asset-classes"    style={{ color: "#6b7280", textDecoration: "none" }}>Asset Classes</a>
            <a href="#key-concepts"     style={{ color: "#6b7280", textDecoration: "none" }}>Key Concepts</a>
            <a href="#before-you-invest" style={{ color: "#6b7280", textDecoration: "none" }}>Before You Invest</a>
            <a href="/terms"            style={{ color: "#6b7280", textDecoration: "none" }}>Terms</a>
            <a href="/privacy"          style={{ color: "#6b7280", textDecoration: "none" }}>Privacy</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: "#f9fafb", borderBottom: "1px solid #e5e7eb", padding: "52px 32px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <p
            style={{
              margin: "0 0 10px",
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#059669",
            }}
          >
            Free Financial Literacy Resource &mdash; No Products Sold &mdash; No Accounts Opened
          </p>
          <h1
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(24px, 4vw, 38px)",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.2,
            }}
          >
            Understanding Financial Markets &amp; Investing
          </h1>
          <p
            style={{
              margin: "0 0 24px",
              fontSize: 15,
              color: "#4b5563",
              maxWidth: 640,
              lineHeight: 1.8,
            }}
          >
            This page provides free, impartial educational information about how financial markets and
            investing work. It is designed for general financial literacy and does not promote any
            specific product, platform, or service.
          </p>

          <div
            style={{
              background: "#fef3c7",
              border: "1px solid #fbbf24",
              borderLeft: "4px solid #f59e0b",
              borderRadius: 6,
              padding: "14px 20px",
              fontSize: 13,
              color: "#78350f",
              maxWidth: 680,
              lineHeight: 1.7,
            }}
          >
            <strong>Important Notice:</strong> All content on this page is provided for educational and
            informational purposes only. It does not constitute investment advice, a personal
            recommendation, or a solicitation to buy or sell any financial instrument. This website is
            not affiliated with any broker, investment platform, or financial services provider. Always
            seek independent advice from a qualified professional before making any financial decisions.
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 32px" }}>

        {/* How Markets Work */}
        <section id="how-markets-work" style={{ padding: "52px 0 40px" }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#111827", marginBottom: 8, marginTop: 0 }}>
            How Financial Markets Work
          </h2>
          <div style={{ width: 44, height: 3, background: "#059669", borderRadius: 2, marginBottom: 24 }} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 28,
            }}
          >
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 10, marginTop: 0 }}>
                What Are Financial Markets?
              </h3>
              <p style={{ fontSize: 14, color: "#4b5563", margin: "0 0 12px", lineHeight: 1.8 }}>
                Financial markets are places — physical or electronic — where buyers and sellers exchange
                financial assets such as shares, bonds, and commodities. Prices are determined by
                supply and demand and reflect the collective expectations of all participants.
              </p>
              <p style={{ fontSize: 14, color: "#4b5563", margin: 0, lineHeight: 1.8 }}>
                Major financial markets include stock exchanges (such as the New York Stock Exchange or
                London Stock Exchange), bond markets, and commodity markets. Together they play a
                central role in how economies allocate capital.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 10, marginTop: 0 }}>
                Why Do Prices Move?
              </h3>
              <p style={{ fontSize: 14, color: "#4b5563", margin: "0 0 12px", lineHeight: 1.8 }}>
                Asset prices change continuously in response to new information. Key drivers include
                company earnings reports, economic data releases (such as employment or inflation figures),
                central bank interest rate decisions, geopolitical events, and changes in investor sentiment.
              </p>
              <p style={{ fontSize: 14, color: "#4b5563", margin: 0, lineHeight: 1.8 }}>
                No model or analysis can predict future price movements with certainty. Markets are
                influenced by countless factors simultaneously, including human psychology and
                unpredictable events.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 10, marginTop: 0 }}>
                Who Participates in Markets?
              </h3>
              <p style={{ fontSize: 14, color: "#4b5563", margin: "0 0 12px", lineHeight: 1.8 }}>
                Participants range from large institutional investors — including pension funds, insurance
                companies, and investment banks — to individual retail investors. Institutional
                participants typically have greater resources, information, and analytical capabilities
                than individual investors.
              </p>
              <p style={{ fontSize: 14, color: "#4b5563", margin: 0, lineHeight: 1.8 }}>
                Retail investors can access markets through regulated investment platforms and brokers.
                Before using any platform, it is important to verify it is authorised by a recognised
                financial regulatory authority in your country.
              </p>
            </div>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb" }} />

        {/* Asset Classes */}
        <section id="asset-classes" style={{ padding: "48px 0 40px" }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#111827", marginBottom: 8, marginTop: 0 }}>
            Types of Financial Assets
          </h2>
          <div style={{ width: 44, height: 3, background: "#059669", borderRadius: 2, marginBottom: 24 }} />
          <p style={{ fontSize: 14, color: "#4b5563", maxWidth: 700, marginBottom: 28, lineHeight: 1.8 }}>
            The following are the main categories of financial assets that investors and institutions
            buy and sell in global markets. Each has a different risk and return profile.
            This is a general educational overview only.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {ASSET_CLASSES.map((a) => (
              <div
                key={a.name}
                style={{
                  background: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: 10,
                  padding: "22px 20px",
                }}
              >
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111827", marginBottom: 10, marginTop: 0 }}>
                  {a.name}
                </h3>
                <p style={{ fontSize: 13, color: "#4b5563", margin: 0, lineHeight: 1.8 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb" }} />

        {/* Key Concepts */}
        <section id="key-concepts" style={{ padding: "48px 0 40px" }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#111827", marginBottom: 8, marginTop: 0 }}>
            Key Financial Concepts
          </h2>
          <div style={{ width: 44, height: 3, background: "#059669", borderRadius: 2, marginBottom: 24 }} />
          <p style={{ fontSize: 14, color: "#4b5563", maxWidth: 700, marginBottom: 28, lineHeight: 1.8 }}>
            The following terms appear frequently when reading about financial markets and investing.
            Understanding them helps you make more informed decisions and evaluate information critically.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {CONCEPTS.map((c) => (
              <div key={c.term} style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: "18px 18px" }}>
                <p style={{ margin: "0 0 6px", fontSize: 14, fontWeight: 700, color: "#111827" }}>{c.term}</p>
                <p style={{ margin: 0, fontSize: 13, color: "#6b7280", lineHeight: 1.75 }}>{c.def}</p>
              </div>
            ))}
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb" }} />

        {/* General investment risks */}
        <section style={{ padding: "48px 0 40px" }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#111827", marginBottom: 8, marginTop: 0 }}>
            Understanding Investment Risk
          </h2>
          <div style={{ width: 44, height: 3, background: "#4b5563", borderRadius: 2, marginBottom: 24 }} />
          <p style={{ fontSize: 14, color: "#4b5563", maxWidth: 700, marginBottom: 28, lineHeight: 1.8 }}>
            All investments carry some degree of risk. Understanding the types of risk involved is an
            essential part of financial literacy. The following are widely recognised principles of
            investment risk, applicable to any asset class.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {[
              { h: "Capital Risk", b: "The value of any investment can fall as well as rise. You may get back less than you originally invested. This applies to shares, bonds, funds, and most other investment types." },
              { h: "Market Risk", b: "Broad market movements — driven by economic conditions, political events, or changes in investor sentiment — can affect the value of investments regardless of individual company performance." },
              { h: "Inflation Risk", b: "If the return on an investment does not keep pace with inflation, the real purchasing power of your money decreases over time, even if the nominal value appears to grow." },
              { h: "Liquidity Risk", b: "Some investments may be difficult to sell quickly or at a fair price. This is particularly relevant for smaller companies, certain bond types, and alternative assets." },
              { h: "Concentration Risk", b: "Holding a large proportion of your portfolio in a single asset, company, or sector increases the potential impact of any single investment performing poorly." },
              { h: "Behavioural Risk", b: "Emotional reactions to market movements — such as panic selling during downturns or overconfidence during rallies — are a well-documented cause of poor investment outcomes." },
            ].map((r) => (
              <div
                key={r.h}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  padding: "16px 16px",
                  fontSize: 13,
                  color: "#374151",
                  lineHeight: 1.75,
                }}
              >
                <p style={{ margin: "0 0 6px", fontWeight: 700, color: "#111827", fontSize: 14 }}>{r.h}</p>
                <p style={{ margin: 0 }}>{r.b}</p>
              </div>
            ))}
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb" }} />

        {/* Before You Invest */}
        <section id="before-you-invest" style={{ padding: "48px 0 40px" }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#111827", marginBottom: 8, marginTop: 0 }}>
            Before You Invest
          </h2>
          <div style={{ width: 44, height: 3, background: "#059669", borderRadius: 2, marginBottom: 24 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {PRINCIPLES.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  borderRadius: 10,
                  padding: "22px 20px",
                }}
              >
                <h3 style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 700, color: "#065f46" }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, fontSize: 13, color: "#374151", lineHeight: 1.8 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Disclaimer */}
      <section
        style={{
          background: "#f9fafb",
          borderTop: "2px solid #e5e7eb",
          padding: "40px 32px",
        }}
      >
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 13,
              fontWeight: 800,
              color: "#6b7280",
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              marginBottom: 16,
              marginTop: 0,
            }}
          >
            Disclaimer
          </h2>
          <p style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.95, margin: "0 0 10px" }}>
            The content on this website is intended solely for general educational and informational
            purposes about financial markets and investing concepts. It does not constitute investment
            advice, a personal recommendation, or an offer to buy or sell any financial product or
            instrument. No part of this content should be relied upon as the basis for any financial
            decision.
          </p>
          <p style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.95, margin: "0 0 10px" }}>
            This website is an independent educational resource. It is not a regulated financial
            services firm. It is not affiliated with any broker, investment platform, fund manager,
            or financial product provider. No investment accounts are opened through this website and
            no financial products are sold here.
          </p>
          <p style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.95, margin: 0 }}>
            All investments carry risk. The value of investments can fall as well as rise and you may
            receive back less than you invest. Past performance is not a reliable indicator of future
            results. If you are unsure whether any financial product or activity is appropriate for
            your personal circumstances, please seek advice from a qualified, independently regulated
            financial adviser.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "20px 32px" }}>
        <div
          style={{
            maxWidth: 920,
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
          <span>
            &copy; {new Date().getFullYear()} TradeSmart Education. General financial education only.
            Not financial advice. Not a regulated entity.
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="/terms"   style={{ color: "#9ca3af", textDecoration: "none" }}>Terms of Service</a>
            <a href="/privacy" style={{ color: "#9ca3af", textDecoration: "none" }}>Privacy Policy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}