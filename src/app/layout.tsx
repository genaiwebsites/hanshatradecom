import type { Metadata, Viewport } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0F2519",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hanshatradecom.com"),
  alternates: {
    canonical: "https://hanshatradecom.com",
  },
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
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://hanshatradecom.com/#website",
        url: "https://hanshatradecom.com",
        name: "Hansha Tradecom Pvt. Ltd.",
        alternateName: "Hansha Tradecom",
        description:
          "Bulk supplier and exporter of rice bran, DORB, DDGS, broken rice, paddy husk and industrial grain packaging in Kolkata.",
        inLanguage: "en-IN",
        publisher: {
          "@id": "https://hanshatradecom.com/#organization",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://hanshatradecom.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://hanshatradecom.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Products",
            item: "https://hanshatradecom.com#products",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Quality & Assays",
            item: "https://hanshatradecom.com#quality",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Logistics",
            item: "https://hanshatradecom.com#logistics",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Contact Desk",
            item: "https://hanshatradecom.com#contact",
          },
        ],
      },
      {
        "@type": "WholesaleStore",
        "@id": "https://hanshatradecom.com/#organization",
        name: "Hansha Tradecom Pvt. Ltd.",
        legalName: "Hansha Tradecom Private Limited",
        description:
          "Bulk supplier and exporter of raw rice bran, de-oiled rice bran (DORB), rice DDGS, corn DDGS, broken rice, paddy husk and grain packaging in Kolkata.",
        url: "https://hanshatradecom.com",
        logo: "https://hanshatradecom.com/images/brand/hansha-tradecom-logo.png",
        image: "https://hanshatradecom.com/images/brand/hansha-tradecom-logo.png",
        telephone: "+91-8043840241",
        email: "info@hanshatradecom.com",
        foundingDate: "2003-12-19",
        taxID: "19AACCB6350P1Z8",
        identifier: "U15497WB2003PTC096805",
        currenciesAccepted: "INR",
        paymentAccepted: "Bank Transfer, RTGS, NEFT, Letter of Credit",
        priceRange: "$$",
        areaServed: [
          "West Bengal",
          "Bihar",
          "Odisha",
          "Jharkhand",
          "Assam",
          "India",
        ],
        knowsAbout: [
          "Raw Rice Bran Sourcing",
          "De-Oiled Rice Bran (DORB)",
          "Rice Distillers Dried Grains (DDGS)",
          "Corn DDGS Animal Feed",
          "Broken Rice Food & Brewery Grade",
          "Paddy Husk Industrial Boiler Fuel",
          "PP Woven Sacks & Jute Gunny Bags",
        ],
        founder: {
          "@type": "Person",
          name: "Mukesh Kumar Choudhary",
          jobTitle: "Founder & Managing Director",
        },
        employee: [
          {
            "@type": "Person",
            name: "Subhash Bansal",
            jobTitle: "Chairman & Managing Director",
          },
          {
            "@type": "Person",
            name: "Hansraj Choudhary",
            jobTitle: "Head of Finance & Accounts (CA)",
          },
          {
            "@type": "Person",
            name: "Prateek Bansal",
            jobTitle: "Head of Business Development",
          },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-8043840241",
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["en", "hi", "bn"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "55/1A Strand Road, 2nd Floor, RNO-204",
          addressLocality: "Kolkata",
          addressRegion: "West Bengal",
          postalCode: "700006",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "22.5833",
          longitude: "88.3516",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "11:00",
          closes: "19:00",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://hanshatradecom.com/#products",
        name: "Bulk Agricultural Commodities & Packaging",
        itemListElement: [
          {
            "@type": "Product",
            name: "Raw Rice Bran",
            sku: "HSN-2302-2020",
            image: "https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/176ff7156-01ea-45ec-9085-845325221697.png",
            description:
              "Fresh mill-run bran for oil extraction and feed blending. 99% purity, 12-14% crude oil content.",
            category: "Feed Ingredient",
            brand: {
              "@id": "https://hanshatradecom.com/#organization",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              price: "Contact for bulk quotation",
              seller: {
                "@id": "https://hanshatradecom.com/#organization",
              },
            },
          },
          {
            "@type": "Product",
            name: "De-Oiled Rice Bran (DORB)",
            sku: "HSN-2302-2010",
            image: "https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/157c39e89-c69c-4fe2-b45f-6220e67b9309.png",
            description:
              "Solvent-extracted bran for cattle and poultry rations. Max 1.5% oil, high fibre protein meal.",
            category: "Feed Ingredient",
            brand: {
              "@id": "https://hanshatradecom.com/#organization",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              price: "Contact for bulk quotation",
              seller: {
                "@id": "https://hanshatradecom.com/#organization",
              },
            },
          },
          {
            "@type": "Product",
            name: "Dry Rice DDGS",
            sku: "HSN-2302",
            image: "https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/186ffe3cc-822c-468a-ab3a-024bfad471fe.png",
            description:
              "Protein-rich distillers dried grains with solubles from rice fermentation. 28-30% crude protein.",
            category: "Feed Ingredient",
            brand: {
              "@id": "https://hanshatradecom.com/#organization",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              price: "Contact for bulk quotation",
              seller: {
                "@id": "https://hanshatradecom.com/#organization",
              },
            },
          },
          {
            "@type": "Product",
            name: "Corn DDGS",
            sku: "HSN-2302-1090",
            image: "https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/14c712b11-873e-4d01-87fe-92475d8a68f3.png",
            description:
              "Yellow grade maize distillers grains, high energy protein supplement for livestock rations.",
            category: "Feed Ingredient",
            brand: {
              "@id": "https://hanshatradecom.com/#organization",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              price: "Contact for bulk quotation",
              seller: {
                "@id": "https://hanshatradecom.com/#organization",
              },
            },
          },
          {
            "@type": "Product",
            name: "Broken Rice",
            sku: "HSN-1006",
            image: "https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/18f315526-31de-4cf4-93a1-d31b728ee68b.png",
            description:
              "Sortex cleaned white broken rice for food processing, brewing and starch manufacturing.",
            category: "Food Grain",
            brand: {
              "@id": "https://hanshatradecom.com/#organization",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              price: "Contact for bulk quotation",
              seller: {
                "@id": "https://hanshatradecom.com/#organization",
              },
            },
          },
          {
            "@type": "Product",
            name: "Paddy Husk",
            sku: "HSN-1213",
            image: "https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/178bc9683-671f-4e56-b3e6-81de757243cf.png",
            description:
              "Finely processed rice husk for biomass boiler fuel and industrial refractory insulation.",
            category: "Biomass",
            brand: {
              "@id": "https://hanshatradecom.com/#organization",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              price: "Contact for bulk quotation",
              seller: {
                "@id": "https://hanshatradecom.com/#organization",
              },
            },
          },
          {
            "@type": "Product",
            name: "HDPE / PP Rice Bags",
            sku: "HSN-6305",
            image: "https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/17adac194-be91-40b9-9b92-ceeef543d3b2.png",
            description:
              "Woven HDPE and PP sacks for bulk grain packaging. 5-50 kg capacity with custom branding.",
            category: "Packaging",
            brand: {
              "@id": "https://hanshatradecom.com/#organization",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              price: "Contact for bulk quotation",
              seller: {
                "@id": "https://hanshatradecom.com/#organization",
              },
            },
          },
          {
            "@type": "Product",
            name: "Jute Gunny Bags",
            sku: "HSN-6305",
            image: "https://image.qwenlm.ai/public_source/2092d8c3-e42a-4fb6-b0b0-96381a21d545/1c867db16-92ae-4b4e-9cd1-7df8781374dd.png",
            description:
              "Natural biodegradable fibre gunny bags from Bengal jute mills. 50 kg standard A-Twill & B-Twill.",
            category: "Packaging",
            brand: {
              "@id": "https://hanshatradecom.com/#organization",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              price: "Contact for bulk quotation",
              seller: {
                "@id": "https://hanshatradecom.com/#organization",
              },
            },
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://hanshatradecom.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What bulk commodities does Hansha Tradecom supply?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Hansha Tradecom supplies raw rice bran, de-oiled rice bran (DORB), dry rice DDGS, corn DDGS, broken rice, paddy husk, HDPE/PP sacks, and jute gunny bags.",
            },
          },
          {
            "@type": "Question",
            name: "Where does Hansha Tradecom procure its grain commodities?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Directly contracted at the mill gates across the Bengal and Bihar grain belt, including Burdwan, Midnapore, Hooghly, and Birbhum.",
            },
          },
          {
            "@type": "Question",
            name: "How is product quality and assay verified?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Every consignment undergoes batch sampling with counter samples retained. Moisture, protein, fat/oil, and sand/silica are verified at partner testing laboratories, with a Certificate of Analysis (COA) issued per dispatch.",
            },
          },
          {
            "@type": "Question",
            name: "What logistics corridors are available for domestic and export dispatches?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Hansha Tradecom operates road multi-axle truck freight, railway rake loading, and maritime export dispatches via Kolkata Port Trust (Syama Prasad Mookerjee Port) and Haldia Deepwater Terminal.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${syne.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
