import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Instrument_Sans, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const splineSansMono = Spline_Sans_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-spline-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F2519",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hanshatradecom.com"),
  title: "Hansha Tradecom Pvt. Ltd. | Rice Bran, DDGS, Broken Rice and Agri Commodities, Kolkata",
  description:
    "Hansha Tradecom Pvt. Ltd. supplies raw and de-oiled rice bran (DORB), rice DDGS, corn DDGS, broken rice, paddy husk and grain packaging in bulk from Kolkata. Established 2003.",
  keywords: [
    "Hansha Tradecom",
    "Rice Bran Kolkata",
    "De-oiled Rice Bran DORB",
    "Rice DDGS",
    "Corn DDGS",
    "Broken Rice Exporter Kolkata",
    "Paddy Husk Bulk",
    "Grain Packaging Kolkata",
    "Agri Commodities Strand Road",
  ],
  authors: [{ name: "Hansha Tradecom Pvt. Ltd." }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/brand/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/images/brand/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/images/brand/favicon-48x48.png", type: "image/png", sizes: "48x48" },
    ],
    apple: [
      { url: "/images/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/images/brand/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/images/brand/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Hansha Tradecom Pvt. Ltd. | Bulk Supply from Rice Mills of Bengal",
    description:
      "Bulk supplier of rice bran, DORB, DDGS, broken rice, paddy husk and grain packaging from Strand Road, Kolkata since 2003.",
    url: "https://hanshatradecom.com",
    siteName: "Hansha Tradecom Pvt. Ltd.",
    images: [
      {
        url: "/images/brand/hansha-tradecom-logo.png",
        width: 512,
        height: 512,
        alt: "Hansha Tradecom Pvt. Ltd. Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    name: "Hansha Tradecom Pvt. Ltd.",
    description:
      "Bulk supplier and exporter of raw rice bran, de-oiled rice bran (DORB), rice DDGS, corn DDGS, broken rice, paddy husk and grain packaging in Kolkata.",
    url: "https://hanshatradecom.com",
    logo: "https://hanshatradecom.com/images/brand/hansha-tradecom-logo.png",
    image: "https://hanshatradecom.com/images/brand/hansha-tradecom-logo.png",
    telephone: "+91-8043840241",
    email: "info@hanshatradecom.com",
    foundingDate: "2003-12-19",
    taxID: "19AACCB6350P1Z8",
    address: {
      "@type": "PostalAddress",
      streetAddress: "55/1A Strand Road, 2nd Floor, RNO-204",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      postalCode: "700006",
      addressCountry: "IN",
    },
  };

  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${instrumentSans.variable} ${splineSansMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
