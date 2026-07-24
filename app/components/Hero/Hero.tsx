"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import WaxSeal from "../WaxSeal/WaxSeal";

const STORAGE_KEY = "st-charmont-envelope-opened";

function subscribeToOpened(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

function getOpenedSnapshot() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function getOpenedServerSnapshot() {
  return false;
}

function markEnvelopeOpened() {
  try {
    window.localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Ignore private-mode / storage quota failures.
  }
}

export default function Hero() {
  const alreadyOpened = useSyncExternalStore(
    subscribeToOpened,
    getOpenedSnapshot,
    getOpenedServerSnapshot,
  );
  const [openedNow, setOpenedNow] = useState(false);

  const open = alreadyOpened || openedNow;
  const skipIntro = alreadyOpened;

  useEffect(() => {
    // Read storage directly so refresh never locks during hydration handoff.
    const shouldLock = !open && !getOpenedSnapshot();
    document.body.style.overflow = shouldLock ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleOpen = () => {
    if (open) return;
    setOpenedNow(true);
    markEnvelopeOpened();
  };

  const handleScroll = () => {
    document
      .getElementById("intro")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className={`${styles.hero} ${open ? styles.open : ""} ${
        skipIntro ? styles.revealed : ""
      }`}
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
          onClick={handleOpen}
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

          <WaxSeal open={open} instant={skipIntro} />
        </button>

        <div className={styles.letter} aria-hidden={!open}>
          <Image
            src="/images/logo_hero2.png"
            alt="St. Charmont"
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
