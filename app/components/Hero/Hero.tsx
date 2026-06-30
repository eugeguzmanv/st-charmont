"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import WaxSeal from "../WaxSeal/WaxSeal";

export default function Hero() {
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
      aria-label="Bienvenida"
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
          aria-label="Abrir la invitacion"
          aria-expanded={open}
        >
          <span className={styles.body} aria-hidden="true">
            <span className={styles.brand}>
              <span className={styles.brandName}>St. Charmont</span>
              <span className={styles.brandSub}>Hotel Residences &amp; Spa</span>
            </span>
          </span>

          <span className={styles.interior} aria-hidden="true" />

          <span className={styles.flap} aria-hidden="true">
            <span className={styles.quote}>
              La paz no se busca,
              <br />
              se encuentra dentro&hellip;
            </span>
            <span className={styles.quoteAuthor}>&mdash; Omar Salom&oacute;n</span>
          </span>

          <WaxSeal open={open} />
        </button>

        <div className={styles.letter} aria-hidden={!open}>
          <Image
            src="/images/logo.png"
            alt="St. Charmont"
            width={1753}
            height={1112}
            sizes="(max-width: 600px) 68vw, 340px"
            className={styles.letterLogo}
            priority
          />
          <p className={styles.letterText}>
            Pensado exclusivamente para quienes valoran los detalles que
            trascienden con el tiempo.
          </p>
        </div>

        <p className={styles.prompt}>Toca para abrir</p>
      </div>

      <button
        type="button"
        className={styles.scrollCue}
        onClick={handleScroll}
        aria-label="Descubrir"
      >
        <span className={styles.chevron} aria-hidden="true" />
        <span className={styles.chevron} aria-hidden="true" />
        <span className={styles.chevron} aria-hidden="true" />
      </button>
    </section>
  );
}
