import Image from "next/image";
import styles from "./FooterCTA.module.css";

export default function FooterCTA() {
  return (
    <footer id="contacto" className={styles.footer}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Bienvenido a una nueva expresion del lujo.
        </h2>

        <p className={styles.invite}>
          Solicita informacion exclusiva sobre el lanzamiento.
        </p>

        <div className={styles.actions}>
          <a
            href="https://wa.me/529991814673"
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            href="mailto:info@stcharmont.com"
            className={`${styles.button} ${styles.buttonSecondary}`}
          >
            E-Mail
          </a>
        </div>

        <div className={styles.media}>
          <Image
            src="/images/soul2.jpeg"
            alt="Interior de lujo en St. Charmont"
            width={1024}
            height={573}
            sizes="(max-width: 720px) 90vw, 680px"
            className={styles.mediaImg}
          />
        </div>

        <div className={styles.brand}>
          <span className={styles.brandName}>St. Charmont</span>
          <span className={styles.brandTag}>Proximamente</span>
        </div>
      </div>
    </footer>
  );
}
