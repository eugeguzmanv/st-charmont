"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ContactPopup.module.css";

export default function ContactPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const target = document.getElementById("alma");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [dismissed]);

  if (dismissed || !visible) return null;

  return (
    <aside
      className={styles.popup}
      role="dialog"
      aria-labelledby="contact-popup-title"
      aria-describedby="contact-popup-body"
    >
      <button
        type="button"
        className={styles.close}
        onClick={() => setDismissed(true)}
        aria-label="Cerrar notificacion"
      >
        <span aria-hidden="true">&times;</span>
      </button>

      <div className={styles.content}>
        <Image
          src="/images/wax_seal.png"
          alt=""
          width={168}
          height={167}
          sizes="72px"
          className={styles.seal}
        />
        <div className={styles.copy}>
          <h3 id="contact-popup-title" className={styles.title}>
            Queremos conocerte
          </h3>
          <p id="contact-popup-body" className={styles.body}>
            <a href="#contacto" className={styles.link}>
              Envíanos un mensaje y conoce tu nuevo estilo de vida.
            </a>
          </p>
        </div>
      </div>
    </aside>
  );
}
