import Hero from "../components/Hero/Hero";
import StCharmontIntro from "../components/StCharmontIntro/StCharmontIntro";
import Vision from "../components/Vision/Vision";
import Offerings from "../components/Offerings/Offerings";
import Visionarios from "../components/Visionarios/Visionarios";
import TheSoul from "../components/TheSoul/TheSoul";
import Wellness from "../components/Wellness/Wellness";
import Hospitality from "../components/Hospitality/Hospitality";
import Location from "../components/Location/Location";
import Legacy from "../components/Legacy/Legacy";
import FooterCTA from "../components/FooterCTA/FooterCTA";
import Footer from "../components/Footer";
import ContactPopup from "../components/ContactPopup/ContactPopup";
import SiteNav from "../components/SiteNav/SiteNav";
import { locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildJsonLd } from "@/lib/seo/json-ld";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!locales.includes(localeParam as Locale)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const jsonLd = buildJsonLd(locale, dict.meta.description);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main>
      <SiteNav />
      <Hero />
      <StCharmontIntro dict={dict} />
      <Vision dict={dict} />
      <Offerings />
      <Visionarios />
      <TheSoul dict={dict} />
      <Wellness dict={dict} />
      <Hospitality dict={dict} />
      <Location dict={dict} />
      <Legacy dict={dict} />
      <FooterCTA dict={dict} />
      <Footer dict={dict} />
      <ContactPopup />
    </main>
    </>
  );
}
