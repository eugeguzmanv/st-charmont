import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const siteUrl = "https://stcharmont.com";

const siteName = "St. Charmont";
const defaultTitle =
  "St. Charmont | Residencias de Lujo, Hotel y Spa en Mérida, Yucatán";
const defaultDescription =
  "St. Charmont es un destino residencial y de hospitalidad de lujo en Mérida, Yucatán: hacienda histórica, branded residences, hotel de clase mundial y spa integral donde historia, bienestar y elegancia atemporal convergen.";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: defaultDescription,
      inLanguage: "es-MX",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/icon.png`,
      email: "info@stcharmont.com",
      telephone: "+52-999-181-4673",
      sameAs: [
        "https://www.instagram.com/st.charmont/",
        "https://www.facebook.com/share/1Jqmhe5jFV/?mibextid=wwXIfr",
        "https://gruposalomon.com/inicio/",
      ],
    },
    {
      "@type": "LodgingBusiness",
      "@id": `${siteUrl}/#lodging`,
      name: siteName,
      description: defaultDescription,
      url: siteUrl,
      image: `${siteUrl}/images/background.jpeg`,
      email: "info@stcharmont.com",
      telephone: "+52-999-181-4673",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle 5 Num. 140 x 12 y 14, Frac. Residencial Montecristo",
        addressLocality: "Mérida",
        addressRegion: "Yucatán",
        addressCountry: "MX",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Spa", value: true },
        {
          "@type": "LocationFeatureSpecification",
          name: "Branded Residences",
          value: true,
        },
        { "@type": "LocationFeatureSpecification", name: "Hotel", value: true },
        {
          "@type": "LocationFeatureSpecification",
          name: "Wellness",
          value: true,
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: "St. Charmont" }, { name: "Grupo Salomón" }],
  creator: siteName,
  publisher: siteName,
  category: "Real Estate",
  keywords: [
    "St. Charmont",
    "residencias de lujo Mérida",
    "branded residences Yucatán",
    "hotel de lujo Mérida",
    "spa Mérida",
    "wellness Yucatán",
    "hacienda histórica",
    "bienes raíces de lujo",
    "hospitalidad de lujo",
    "Grupo Salomón",
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/images/background.jpeg",
        alt: "St. Charmont — destino de wellness y lujo en Yucatán",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/background.jpeg"],
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
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/icon.png",
    shortcut: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
