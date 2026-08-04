import type { Locale } from "./config";

export type NavItem = {
  id: string;
  label: string;
};

export type OfferingTab = {
  id: "hotel" | "residences" | "spa";
  label: string;
  title: string;
  body: string;
};

export type TeamMember = {
  name: string;
  role: string;
  avatar: string;
};

export type Article = {
  href: string;
  source: string;
  title: string;
  description: string;
};

export type DayHours = {
  day: string;
  hours: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogImageAlt: string;
    keywords: string[];
  };
  nav: {
    intro: string;
    vision: string;
    offerings: string;
    visionarios: string;
    soul: string;
    wellness: string;
    hospitality: string;
    location: string;
    legacy: string;
    contact: string;
    language: string;
    languageEs: string;
    languageEn: string;
    menu: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    ariaLabel: string;
    brandSub: string;
    quoteLine1: string;
    quoteLine2: string;
    quoteAuthor: string;
    letterText: string;
    prompt: string;
    openLabel: string;
    discoverLabel: string;
    logoAlt: string;
  };
  intro: {
    subtitle: string;
    body: string;
    mediaAlt: string;
    mediaLabel: string;
  };
  vision: {
    heading: string;
    body: string;
  };
  offerings: {
    sectionLabel: string;
    tablistLabel: string;
    tabs: OfferingTab[];
  };
  visionarios: {
    heading: string;
    subheading: string;
    team: TeamMember[];
  };
  soul: {
    heading: string;
    subheading: string;
    body: string;
    imageAlt: string;
    carousel: {
      label: string;
      prev: string;
      next: string;
      select: string;
      goTo: string;
      slideStatus: string;
      slideAlt: string;
    };
  };
  wellness: {
    heading: string;
    subheading: string;
    body: string;
    insightTitle: string;
    insightText: string;
    readArticle: string;
    mediaAlt: string;
    articles: Article[];
  };
  hospitality: {
    heading: string;
    subheading: string;
    body1: string;
    body2: string;
    mediaAlt: string;
  };
  location: {
    heading: string;
    subheading: string;
    body: string;
    mapAlt: string;
  };
  legacy: {
    heading: string;
    subheading: string;
    body: string;
  };
  footerCta: {
    heading: string;
    invite: string;
    whatsapp: string;
    email: string;
    brandTag: string;
    mediaAlt: string;
  };
  footer: {
    logoAlt: string;
    facebookLabel: string;
    instagramLabel: string;
    projectLabel: string;
    companyName: string;
    visitGrupoSalomon: string;
    grupoSalomonAlt: string;
    contactTitle: string;
    hoursLabel: string;
    days: DayHours[];
    address: string;
    disclaimer: string;
    rights: string;
  };
  contactPopup: {
    closeLabel: string;
    title: string;
    body: string;
  };
};

export type LocaleParams = {
  locale: Locale;
};
