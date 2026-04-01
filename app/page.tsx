export const dynamic = "force-static";

const CONCEPTS = [
  {
    term: "Leverage",
    def: "A mechanism that lets you control a position larger than your deposited amount. Example: 10:1 leverage means a 1% market move against you results in a 10% loss of your deposit. Leverage amplifies losses exactly as much as it amplifies gains.",
  },
  {
    term: "Margin",
    def: "The minimum deposit a broker requires to open and keep a leveraged position open. If your account balance falls below the required margin level, the broker may automatically close your position at a loss.",
  },
  {
    term: "Spread",
    def: "The difference between the buy (ask) price and sell (bid) price shown by a broker. The spread is a cost paid on every trade. Even if a market moves slightly in your favour, you may still record a loss if the move does not cover the spread.",
  },
  {
    term: "Stop-Loss Order",
    def: "An instruction to close a position automatically if the price reaches a specified loss level. Stop-loss orders reduce but do not eliminate risk. In fast-moving or gapping markets, execution may occur at a worse price than the level set.",
  },
  {
    term: "Take-Profit Order",
    def: "An instruction to close a position automatically when it reaches a target profit level. Setting a take-profit does not guarantee execution at that exact price.",
  },
  {
    term: "Volatility",
    def: "A statistical measure of how much a market price fluctuates over a period of time. High volatility means larger, faster price swings in both directions, which increases both potential gains and potential losses.",
  },
  {
    term: "Pip",
    def: "The smallest standard price increment in a forex currency pair. For most pairs, one pip equals 0.0001. The monetary value of a pip depends on the trade size (lot size) and account currency.",
  },
  {
    term: "Going Long / Going Short",
    def: "Going long means opening a position that profits if the price rises. Going short means opening a position that profits if the price falls. Both directions carry full loss risk if the market moves against your position.",
  },
  {
    term: "Contract for Difference (CFD)",
    def: "A financial derivative in which you agree to exchange the difference in price of an asset from when the contract is opened to when it is closed. You do not own the underlying asset. CFDs are high-risk, complex instruments not suitable for all investors.",
  },
  {
    term: "Swap / Overnight Financing",
    def: "A daily charge (or credit) applied when a leveraged position is held open overnight. Swap rates can be negative (a cost to you) and can erode the value of a position held for multiple days even if the price does not move.",
  },
];

const ASSET_CLASSES = [
  {
    name: "Forex (Currency Pairs)",
    desc: "The foreign exchange market involves speculating on the relative value of one currency against another, such as EUR/USD. It is the largest financial market by volume, operating 24 hours a day from Monday to Friday. Currency values are highly sensitive to central bank decisions, inflation data, and geopolitical events.",
  },
  {
    name: "Commodities",
    desc: "Commodities include physical goods such as gold, silver, crude oil, and natural gas. Their prices are influenced by global supply and demand, weather conditions, geopolitical tensions, and macroeconomic reports. Commodity prices can be extremely volatile.",
  },
  {
    name: "Stock Indices",
    desc: "A stock index tracks the combined performance of a group of listed companies, such as the S&P 500 (US), FTSE 100 (UK), or DAX (Germany). A CFD on an index provides exposure to the overall direction of that market, not any single company.",
  },
  {
    name: "Shares (Equities)",
    desc: "Shares represent a fractional ownership stake in a publicly listed company. When accessed via CFDs, no actual ownership of shares takes place. The position profits or loses based purely on price movement, and leverage magnifies the risk.",
  },

];

const RISKS = [
  "Between 67% and 83% of retail investor accounts lose money when trading CFDs with leveraged products.",
  "You can lose more than your entire initial deposit, especially when using high leverage.",
  "Markets can move sharply against your position in seconds, with no warning.",
  "Past performance of any strategy, market, or instrument is not indicative of future results.",
  "Overnight financing (swap) charges can accumulate and cause losses even when the market moves in your favour.",
  "During major news events, prices can gap through stop-loss levels, resulting in worse execution than expected.",
  "CFDs and forex products are complex instruments. Complexity itself is a source of risk for inexperienced traders.",
  "Trading should never be undertaken with money that is needed to meet essential living expenses.",
  "Most retail traders who lose money do so consistently over extended periods, not from a single trade.",
  "Emotional decision-making (fear of missing out, revenge trading) is a well-documented cause of losses.",
];

const BEFORE_YOU_TRADE = [
  {
    title: "Verify the Broker Is Regulated",
    body: "Only use a broker that is authorised and supervised by a recognised financial regulatory authority in your country (for example: FCA in the UK, ASIC in Australia, CySEC in Cyprus, BaFin in Germany). You can search the regulator's official register to confirm. Never deposit funds with an unregulated entity.",
  },
  {
    title: "Practise on a Demo Account",
    body: "Most regulated brokers offer a free demo (paper trading) account that replicates live market conditions without real money. Spending significant time on a demo account is strongly recommended before risking any real capital.",
  },
  {
    title: "Only Use Capital You Can Afford to Lose",
    body: "Only allocate funds to trading that, if entirely lost, would not affect your standard of living, savings, rent, loan repayments, or any other financial obligation. Never borrow money to trade.",
  },
  {
    title: "Read the Key Information Document (KID)",
    body: "Regulated brokers are required by law to provide a Key Information Document (KID) or equivalent risk disclosure for each product. Read it fully. If you do not understand a product, do not trade it.",
  },
  {
    title: "Seek Independent Financial Advice",
    body: "This website does not provide financial advice. If you are unsure whether trading is appropriate for your personal financial circumstances, speak with a qualified, independently regulated financial adviser before committing any funds.",
  },
  {
    title: "Understand Tax Obligations",
    body: "Trading profits may be subject to capital gains tax or income tax depending on your country of residence and volume of activity. Consult a qualified tax professional regarding your specific obligations before trading.",
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
      {/* ESMA-style top risk banner */}
      <div
        style={{
          background: "#fef2f2",
          borderBottom: "3px solid #ef4444",
          padding: "12px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, fontSize: 13, color: "#7f1d1d", fontWeight: 700, lineHeight: 1.6 }}>
          &#9888;&nbsp; RISK WARNING: Between 67% and 83% of retail investor accounts lose money when trading CFDs and leveraged products.
          You may lose more than your initial investment. This site does not sell products, open accounts, or provide financial advice.
        </p>
      </div>

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
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#111827",
              letterSpacing: "-0.3px",
            }}
          >
            TradeSmart&nbsp;
            <span style={{ color: "#059669", fontWeight: 400 }}>Education</span>
          </span>
          <nav
            style={{
              display: "flex",
              gap: 20,
              fontSize: 13,
              flexWrap: "wrap",
            }}
          >
            <a href="#what-is-trading"  style={{ color: "#6b7280", textDecoration: "none" }}>What is Trading?</a>
            <a href="#asset-classes"    style={{ color: "#6b7280", textDecoration: "none" }}>Asset Classes</a>
            <a href="#key-concepts"     style={{ color: "#6b7280", textDecoration: "none" }}>Key Concepts</a>
            <a href="#risk-disclosure"  style={{ color: "#6b7280", textDecoration: "none" }}>Risk Disclosure</a>
            <a href="/terms"            style={{ color: "#6b7280", textDecoration: "none" }}>Terms</a>
            <a href="/privacy"          style={{ color: "#6b7280", textDecoration: "none" }}>Privacy</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          background: "#f9fafb",
          borderBottom: "1px solid #e5e7eb",
          padding: "52px 32px",
        }}
      >
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
            Free Educational Resource &mdash; No Products Sold &mdash; No Accounts Opened
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
            Understanding Online Trading &amp; Financial Markets
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
            This page provides free, impartial educational information explaining how financial markets work,
            what instruments are available to retail traders, and the significant risks involved.
          </p>

          {/* Disclaimer box */}
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
            informational purposes only. It does not constitute investment advice, a personal recommendation,
            or a solicitation to buy or sell any financial instrument. This website is not affiliated with
            any broker, trading platform, or financial services provider. Always seek independent financial
            advice from a qualified professional before making any investment decisions.
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 32px" }}>

        {/* What is Online Trading */}
        <section id="what-is-trading" style={{ padding: "52px 0 40px" }}>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: "#111827",
              marginBottom: 8,
              marginTop: 0,
            }}
          >
            What is Online Trading?
          </h2>
          <div
            style={{
              width: 44,
              height: 3,
              background: "#059669",
              borderRadius: 2,
              marginBottom: 24,
            }}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 28,
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                What is a Contract for Difference (CFD)?
              </h3>
              <p style={{ fontSize: 14, color: "#4b5563", margin: 0, lineHeight: 1.8 }}>
                A CFD is a financial derivative that allows a person to speculate on the price movement of
                an asset without owning the underlying asset. Profit or loss is determined by the difference
                between the opening and closing price of the position, multiplied by the position size.
              </p>
              <p style={{ fontSize: 14, color: "#4b5563", marginTop: 12, lineHeight: 1.8 }}>
                CFDs are leveraged instruments. Because a small deposit (margn) controls a larger position,
                losses can be proportionally much larger than the initial deposit. The majority of retail
                traders who use CFDs lose money.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                What is a Trading Platform?
              </h3>
              <p style={{ fontSize: 14, color: "#4b5563", margin: 0, lineHeight: 1.8 }}>
                A trading platform is software provided by a regulated broker that connects you to financial
                markets. Through the platform you can view live price quotes, place orders, and set risk
                management parameters such as stop-loss levels.
              </p>
              <p style={{ fontSize: 14, color: "#4b5563", marginTop: 12, lineHeight: 1.8 }}>
                Regulated brokers are licensed and supervised by a government-authorised financial authority.
                Before opening any account, you should independently verify the broker&apos;s regulatory
                status on the official register of the relevant authority in your country.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: 10,
                  marginTop: 0,
                }}
              >
                Who Participates in Financial Markets?
              </h3>
              <p style={{ fontSize: 14, color: "#4b5563", margin: 0, lineHeight: 1.8 }}>
                Participants include large institutional investors (banks, hedge funds, pension funds) and
                individual retail traders. Retail traders generally operate at a significant informational
                and technological disadvantage compared to professional institutions.
              </p>
              <p style={{ fontSize: 14, color: "#4b5563", marginTop: 12, lineHeight: 1.8 }}>
                Regulatory bodies in most countries require brokers to disclose the percentage of retail
                accounts that lose money. This figure is typically between 67% and 83% across regulated
                retail brokers offering CFD products.
              </p>
            </div>
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb" }} />

        {/* Asset Classes */}
        <section id="asset-classes" style={{ padding: "48px 0 40px" }}>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: "#111827",
              marginBottom: 8,
              marginTop: 0,
            }}
          >
            Common Asset Classes
          </h2>
          <div
            style={{
              width: 44,
              height: 3,
              background: "#059669",
              borderRadius: 2,
              marginBottom: 24,
            }}
          />
          <p
            style={{
              fontSize: 14,
              color: "#4b5563",
              maxWidth: 700,
              marginBottom: 28,
              lineHeight: 1.8,
            }}
          >
            The following are the main categories of financial instruments available through retail online
            trading platforms. Each carries distinct risk characteristics. This is a general educational
            overview only, not a recommendation to trade any particular asset.
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
                <h3
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#111827",
                    marginBottom: 10,
                    marginTop: 0,
                  }}
                >
                  {a.name}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "#4b5563",
                    margin: 0,
                    lineHeight: 1.8,
                  }}
                >
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb" }} />

        {/* Key Concepts */}
        <section id="key-concepts" style={{ padding: "48px 0 40px" }}>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: "#111827",
              marginBottom: 8,
              marginTop: 0,
            }}
          >
            Key Concepts &amp; Terminology
          </h2>
          <div
            style={{
              width: 44,
              height: 3,
              background: "#059669",
              borderRadius: 2,
              marginBottom: 24,
            }}
          />
          <p
            style={{
              fontSize: 14,
              color: "#4b5563",
              maxWidth: 700,
              marginBottom: 28,
              lineHeight: 1.8,
            }}
          >
            Understanding the following terms is essential before placing any trade. Many retail trading
            losses result directly from a failure to fully understand how leveraged products work before
            using them with real money.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {CONCEPTS.map((c) => (
              <div
                key={c.term}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 10,
                  padding: "18px 18px",
                }}
              >
                <p
                  style={{
                    margin: "0 0 6px",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#111827",
                  }}
                >
                  {c.term}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13,
                    color: "#6b7280",
                    lineHeight: 1.75,
                  }}
                >
                  {c.def}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb" }} />

        {/* Risks */}
        <section style={{ padding: "48px 0 40px" }}>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: "#111827",
              marginBottom: 8,
              marginTop: 0,
            }}
          >
            Understanding the Risks
          </h2>
          <div
            style={{
              width: 44,
              height: 3,
              background: "#dc2626",
              borderRadius: 2,
              marginBottom: 24,
            }}
          />
          <p
            style={{
              fontSize: 14,
              color: "#4b5563",
              maxWidth: 700,
              marginBottom: 28,
              lineHeight: 1.8,
            }}
          >
            The following risk factors are drawn from information published by financial regulators and
            are widely applicable to retail traders using leveraged online trading products. They are
            not exhaustive. Anyone considering trading should read the full risk disclosure section below.
          </p>
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 12,
            }}
          >
            {RISKS.map((r) => (
              <li
                key={r}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                  background: "#fff7f7",
                  border: "1px solid #fecaca",
                  borderRadius: 8,
                  padding: "14px 16px",
                  fontSize: 13,
                  color: "#374151",
                  lineHeight: 1.75,
                }}
              >
                <span
                  style={{
                    color: "#dc2626",
                    fontWeight: 700,
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  !
                </span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb" }} />

        {/* Before You Trade */}
        <section style={{ padding: "48px 0 40px" }}>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: "#111827",
              marginBottom: 8,
              marginTop: 0,
            }}
          >
            Before You Start Trading
          </h2>
          <div
            style={{
              width: 44,
              height: 3,
              background: "#059669",
              borderRadius: 2,
              marginBottom: 24,
            }}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {BEFORE_YOU_TRADE.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  borderRadius: 10,
                  padding: "22px 20px",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 8px",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#065f46",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13,
                    color: "#374151",
                    lineHeight: 1.8,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Full Risk Disclosure */}
      <section
        id="risk-disclosure"
        style={{
          background: "#fafafa",
          borderTop: "2px solid #e5e7eb",
          padding: "48px 32px",
        }}
      >
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 16,
              fontWeight: 800,
              color: "#111827",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: 20,
              marginTop: 0,
            }}
          >
            Full Risk Disclosure
          </h2>
          <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.95, margin: "0 0 12px" }}>
            Trading foreign exchange (forex), contracts for difference (CFDs), and other leveraged
            financial instruments on margin carries a high degree of risk and is not suitable for all
            investors. Between 67% and 83% of retail investor accounts lose money when trading these
            products. The high degree of leverage can work against you. Before deciding to trade
            leveraged products, you should carefully consider your investment objectives, level of
            experience, and risk appetite in full.
          </p>
          <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.95, margin: "0 0 12px" }}>
            You could sustain a loss of some or all of your initial investment. Therefore, you should not
            invest money that you cannot afford to lose entirely. You should be aware of all risks
            associated with leveraged products and, if you have any doubts, seek advice from an
            independent, authorised financial adviser.
          </p>
          <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.95, margin: "0 0 12px" }}>
            Past performance of any trading strategy, instrument, market, or approach is not indicative
            of future results. Any educational examples, simulated scenarios, or historical data presented
            on this website should not be interpreted as a guarantee or reliable indicator of future
            performance.
          </p>
          <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.95, margin: "0 0 12px" }}>
            This website is operated as an independent educational resource. It is not a broker, not a
            regulated financial entity, and is not affiliated with any broker, trading platform, signal
            service, fund manager, or financial product provider. No trading accounts are opened through
            this website. No financial products are sold here. Nothing on this website constitutes
            investment advice, a personal recommendation, or a solicitation to trade.
          </p>
          <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.95, margin: 0 }}>
            Regulatory requirements for retail trading and access to specific products vary by country
            and jurisdiction. It is your sole responsibility to ensure that any activity you undertake
            complies with the laws and regulations applicable in your jurisdiction. This website makes no
            representation that the content herein is appropriate or lawful to access in any particular country.
          </p>
        </div>
      </section>

      {/* Not-affiliated bar */}
      <div
        style={{
          background: "#f3f4f6",
          borderTop: "1px solid #e5e7eb",
          padding: "10px 32px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 11,
            color: "#6b7280",
            lineHeight: 1.6,
          }}
        >
          TradeSmart Education is an independent educational website. It is not a registered financial
          services provider and is not affiliated with any broker, trading platform, or investment firm.
          This site does not provide financial advice and does not accept money or open trading accounts.
        </p>
      </div>

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
            &copy; {new Date().getFullYear()} TradeSmart Education. Educational content only.
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