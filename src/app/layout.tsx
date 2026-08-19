import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Hansha Tradecom Pvt. Ltd. | Rice Bran, DDGS, Broken Rice and Agri Commodities, Kolkata",
  description:
    "Hansha Tradecom Pvt. Ltd. supplies raw and de-oiled rice bran, rice DDGS, corn DDGS, broken rice, paddy husk and grain packaging in bulk from Kolkata. Established 2003.",
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
  openGraph: {
    title: "Hansha Tradecom Pvt. Ltd. | Bulk Supply from Rice Mills of Bengal",
    description:
      "Bulk supplier of rice bran, DORB, DDGS, broken rice, paddy husk and grain packaging from Strand Road, Kolkata since 2003.",
    url: "https://hanshatradecom.com",
    siteName: "Hansha Tradecom Pvt. Ltd.",
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
