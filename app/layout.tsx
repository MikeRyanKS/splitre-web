import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "SplitRE — Commission Management Software for Real Estate Brokerages",
    template: "%s | SplitRE",
  },
  description:
    "SplitRE automates real estate commission calculations, agent cap tracking, and QuickBooks Online sync for independent brokerages. Replace your spreadsheets and pay agents correctly, every time.",
  metadataBase: new URL("https://splitre.app"),
  keywords: [
    "real estate commission management software",
    "commission calculation software for brokerages",
    "agent commission tracking",
    "real estate brokerage back office software",
    "QuickBooks real estate brokerage",
    "commission split calculator",
    "real estate cap tracking",
    "independent brokerage software",
  ],
  openGraph: {
    type: "website",
    siteName: "SplitRE",
    title: "SplitRE — Commission Management Software for Real Estate Brokerages",
    description:
      "Automate commission calculations, cap tracking, and QuickBooks sync for your independent real estate brokerage. Starts at $89/mo.",
    url: "https://splitre.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "SplitRE — Commission Management for Real Estate Brokerages",
    description:
      "Replace your commission spreadsheets. Automated calculations, cap tracking, and one-click QuickBooks sync.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
