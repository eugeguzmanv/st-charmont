"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import styles from "./Hero.module.css";
import WaxSeal from "../WaxSeal/WaxSeal";

export default function Hero() {
  const { dict } = useLocale();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleScroll = () => {
    document
      .getElementById("intro")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className={`${styles.hero} ${open ? styles.open : ""}`}
      aria-label={dict.hero.ariaLabel}
    >
      <Image
        src="/images/background.jpeg"
        alt=""
        fill
        sizes="100vw"
        priority
        className={styles.background}
      />
      <div className={styles.stage}>
        <button
          type="button"
          className={styles.envelope}
          onClick={() => setOpen(true)}
          aria-label={dict.hero.openLabel}
          aria-expanded={open}
        >
          <span className={styles.body} aria-hidden="true">
            <span className={styles.brand}>
              <span className={styles.brandName}>St. Charmont</span>
              <span className={styles.brandSub}>{dict.hero.brandSub}</span>
            </span>
          </span>

          <span className={styles.interior} aria-hidden="true" />

          <span className={styles.flap} aria-hidden="true">
            <span className={styles.quote}>
              {dict.hero.quoteLine1}
              <br />
              {dict.hero.quoteLine2}
            </span>
            <span className={styles.quoteAuthor}>{dict.hero.quoteAuthor}</span>
          </span>

          <WaxSeal open={open} />
        </button>

        <div className={styles.letter} aria-hidden={!open}>
          <Image
            src="/images/logo_hero2.png"
            alt={dict.hero.logoAlt}
            width={1920}
            height={1080}
            sizes="(max-width: 800px) 72vw, 420px"
            className={styles.letterLogo}
            priority
          />
          <Image
            src="/images/texto_sobre.png"
            alt=""
            width={2534}
            height={527}
            sizes="(max-width: 800px) 72vw, 400px"
            className={styles.letterTextImg}
            aria-hidden="true"
          />
          <p className={styles.letterText}>{dict.hero.letterText}</p>
        </div>

        <p className={styles.prompt}>{dict.hero.prompt}</p>
      </div>

      <button
        type="button"
        className={styles.scrollCue}
        onClick={handleScroll}
        aria-label={dict.hero.discoverLabel}
      >
        <span className={styles.chevron} aria-hidden="true" />
        <span className={styles.chevron} aria-hidden="true" />
        <span className={styles.chevron} aria-hidden="true" />
      </button>
    </section>
  );
}
