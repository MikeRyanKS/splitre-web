import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "SplitRE — Commission Calculations on Autopilot",
    template: "%s | SplitRE",
  },
  description: "SplitRE automates commission calculations and QuickBooks sync for independent real estate brokerages. Eliminate spreadsheets, pay agents correctly, every time.",
  metadataBase: new URL("https://splitre.com"),
  openGraph: {
    type: "website",
    siteName: "SplitRE",
    title: "SplitRE — Commission Calculations on Autopilot",
    description: "Automate commission calculations and QuickBooks sync for your real estate brokerage.",
    url: "https://splitre.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "SplitRE — Commission Calculations on Autopilot",
    description: "Automate commission calculations and QuickBooks sync for your real estate brokerage.",
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
