import Image from "next/image";
import styles from "./TheSoul.module.css";

export default function TheSoul() {
  return (
    <section className={styles.soul}>
      <div className={styles.media}>
        <Image
          src="/images/Screenshot 2026-06-23 171047.png"
          alt="Hacienda historica restaurada de St. Charmont"
          fill
          sizes="100vw"
          className={styles.mediaImg}
        />
      </div>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.heading}>EL ALMA DE ST. CHARMONT</h2>
          <p className={styles.subheading}>La Hacienda</p>
          <p className={styles.body}>
            En el corazon del proyecto se encuentra una hacienda historica
            cuidadosamente restaurada para preservar su esencia y proyectarla
            hacia el futuro. Sus espacios, jardines y arquitectura daran vida a
            experiencias que celebran la cultura, la hospitalidad y el arte de
            vivir bien.
          </p>
          <p className={styles.statement}>
            No es un elemento del proyecto. Es su razon de existir.
          </p>
        </div>
      </div>
    </section>
  );
}
