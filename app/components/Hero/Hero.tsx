"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

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
      <div className={styles.stage}>
        <button
          type="button"
          className={styles.envelope}
          onClick={() => setOpen(true)}
          aria-label="Abrir la invitacion"
          aria-expanded={open}
        >
          <span className={styles.back} aria-hidden="true" />
          <span className={styles.front} aria-hidden="true" />
          <span className={styles.flap} aria-hidden="true">
            <span className={styles.seal}>SC</span>
          </span>
        </button>

        <div className={styles.letter} aria-hidden={!open}>
          <span className={styles.letterMark}>St. Charmont</span>
          <p className={styles.letterText}>
            Tiene el honor de invitarle a descubrir una nueva expresion del
            lujo, el bienestar y el legado en el corazon de Yucatan.
          </p>
          <span className={styles.letterFlourish}>&mdash;</span>
        </div>

        <p className={styles.prompt}>Toca para abrir</p>
      </div>

      <button
        type="button"
        className={styles.scrollCue}
        onClick={handleScroll}
        aria-label="Continuar"
      >
        <span>Descubrir</span>
        <span className={styles.scrollLine} aria-hidden="true" />
      </button>
    </section>
  );
}
