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
    "SplitRE automates real estate commission calculations, agent cap tracking, and bookkeeper-ready CSV exports for independent brokerages. Replace spreadsheets and pay agents correctly, every time. Plans from $62/mo (annual).",
  metadataBase: new URL("https://splitre.app"),
  applicationName: "SplitRE",
  authors: [{ name: "Keplify LLC", url: "https://splitre.app" }],
  creator: "Keplify LLC",
  publisher: "Keplify LLC",
  keywords: [
    "real estate commission management software",
    "commission calculation software for brokerages",
    "agent commission tracking",
    "real estate brokerage back office software",
    "QuickBooks real estate brokerage",
    "commission split calculator",
    "real estate cap tracking",
    "independent brokerage software",
    "real estate commission split software",
    "brokerage commission tracking",
    "annual cap tracking real estate",
    "commission disbursement software",
  ],
  openGraph: {
    type: "website",
    siteName: "SplitRE",
    title: "SplitRE — Commission Management Software for Real Estate Brokerages",
    description:
      "Automate commission calculations, cap tracking, and bookkeeper CSV exports for your independent real estate brokerage. No per-agent fees. Starts at $62/mo (annual).",
    url: "https://splitre.app",
    locale: "en_US",
    images: [
      {
        url: "/screenshots/splitre-real-estate-brokerage-dashboard.png",
        width: 1200,
        alt: "SplitRE real estate commission management dashboard showing agent cap progress and broker revenue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@splitre",
    title: "SplitRE — Commission Management for Real Estate Brokerages",
    description:
      "Replace your commission spreadsheets. Automated calculations, cap tracking, and bookkeeper-ready CSV exports. From $62/mo (annual).",
    images: ["/screenshots/splitre-real-estate-brokerage-dashboard.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ url: "/icon-512.png", sizes: "512x512" }],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Keplify LLC",
  legalName: "Keplify LLC",
  url: "https://splitre.app",
  logo: "https://splitre.app/logo.svg",
  foundingDate: "2024",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressRegion: "DE",
      addressCountry: "US",
    },
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "mike@keplify.com",
    contactType: "customer support",
    availableLanguage: "English",
  },
  sameAs: [
    "https://x.com/splitre",
    "https://linkedin.com/company/splitre",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
