import type { Locale } from "@/lib/i18n/config";

const siteUrl = "https://stcharmont.com";
const siteName = "St. Charmont";

export function buildJsonLd(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/${locale}`,
        name: siteName,
        description,
        inLanguage: locale === "es" ? "es-MX" : "en-US",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/images/favicon.png`,
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
        description,
        url: `${siteUrl}/${locale}`,
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
}
