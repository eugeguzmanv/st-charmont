"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { localeCookieName, type Locale } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import styles from "./SiteNav.module.css";

const SECTIONS = [
  { id: "intro", key: "intro" as const },
  { id: "vision", key: "vision" as const },
  { id: "offerings", key: "offerings" as const },
  { id: "visionarios", key: "visionarios" as const },
  { id: "alma", key: "soul" as const },
  { id: "wellness", key: "wellness" as const },
  { id: "hospitality", key: "hospitality" as const },
  { id: "location", key: "location" as const },
  { id: "legacy", key: "legacy" as const },
  { id: "contacto", key: "contact" as const },
];

export default function SiteNav() {
  const router = useRouter();
  const { locale, dict } = useLocale();
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    document.cookie = `${localeCookieName}=${nextLocale};path=/;max-age=31536000;SameSite=Lax`;
    router.push(`/${nextLocale}${window.location.hash}`);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  return (
    <nav className={styles.nav} aria-label={dict.nav.menu}>
      <button
        type="button"
        className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={styles.toggleBar} />
        <span className={styles.toggleBar} />
        <span className={styles.toggleBar} />
      </button>

      <div
        id="site-menu"
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true" />

        <div className={styles.menu}>
          <ul className={styles.links}>
            {SECTIONS.map(({ id, key }) => (
              <li key={id}>
                <a href={`#${id}`} className={styles.link} onClick={closeMenu}>
                  {dict.nav[key]}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.lang} role="group" aria-label={dict.nav.language}>
            <span className={styles.langLabel}>{dict.nav.language}</span>
            <button
              type="button"
              className={`${styles.langBtn} ${locale === "es" ? styles.langBtnActive : ""}`}
              aria-pressed={locale === "es"}
              onClick={() => switchLocale("es")}
            >
              {dict.nav.languageEs}
            </button>
            <button
              type="button"
              className={`${styles.langBtn} ${locale === "en" ? styles.langBtnActive : ""}`}
              aria-pressed={locale === "en"}
              onClick={() => switchLocale("en")}
            >
              {dict.nav.languageEn}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
