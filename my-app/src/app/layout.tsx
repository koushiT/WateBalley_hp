import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "合同会社ウォーターバレイ | ITソリューション・マーケティング・リユース・貿易事業",
  description: "合同会社ウォーターバレイは、ITソリューション、マーケティング・広告、リユース・リサイクル、国際貿易の多角的事業を展開する企業です。デジタル技術と確かな実績でお客様のビジネスを次のステージへ導きます。",
  keywords: "合同会社ウォーターバレイ, ITソリューション, 広告代理業, デジタルマーケティング, リユース事業, 国際貿易",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${notoSansJP.variable}`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
