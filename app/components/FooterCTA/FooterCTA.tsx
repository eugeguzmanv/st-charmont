import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/types";
import styles from "./FooterCTA.module.css";

export default function FooterCTA({ dict }: { dict: Dictionary }) {
  return (
    <footer id="contacto" className={styles.footer}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{dict.footerCta.heading}</h2>

        <p className={styles.invite}>{dict.footerCta.invite}</p>

        <div className={styles.actions}>
          <a
            href="https://wa.me/529991814673"
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.footerCta.whatsapp}
          </a>
          <a
            href="mailto:info@stcharmont.com"
            className={`${styles.button} ${styles.buttonSecondary}`}
          >
            {dict.footerCta.email}
          </a>
        </div>

        <div className={styles.media}>
          <Image
            src="/images/soul2.jpeg"
            alt={dict.footerCta.mediaAlt}
            width={1024}
            height={573}
            sizes="(max-width: 720px) 90vw, 680px"
            className={styles.mediaImg}
          />
        </div>

        <div className={styles.brand}>
          <span className={styles.brandName}>St. Charmont</span>
          <span className={styles.brandTag}>{dict.footerCta.brandTag}</span>
        </div>
      </div>
    </footer>
  );
}
