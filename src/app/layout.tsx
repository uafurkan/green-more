import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import MobileOrderBar from "@/components/MobileOrderBar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  style: ["italic"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "green&more — Yeşilden fazlası",
  description:
    "green&more bir salata dükkânı değil; hızlı ama gerçek bir mutfak. Her sos günlük yapılır, her tabak elde kurulur, her malzeme adıyla yazılır.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${bricolage.variable} ${dmSans.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-full flex flex-col bg-gm-bg text-gm-ink">
        <Header />
        <div className="h-[clamp(64px,7vw,82px)]" />
        <main className="flex-1">{children}</main>
        <Newsletter />
        <Footer />
        <MobileOrderBar />
      </body>
    </html>
  );
}
