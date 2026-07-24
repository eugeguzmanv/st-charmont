import Image from "next/image";
import styles from "./StCharmontIntro.module.css";

export default function StCharmontIntro() {
  return (
    <section id="intro" className={styles.intro}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            ST. CHARMONT
            <span className={styles.subtitle}>Wellness &amp; Luxury</span>
          </h2>
          
          <p className={styles.body}>
          St. Charmont nace para crear un nuevo territorio de calma y permanencia en Yucatán. Un destino donde la arquitectura y la tierra se encuentran y el tiempo adquiere otra profundidad. En St. Charmont, la grandeza no se anuncia, se construye.
          </p>
        </div>

        <div className={styles.media}>
          <Image
            src="/images/STCHARMONT_MANIJA.png"
            alt="Hacienda historica de St. Charmont"
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
            className={styles.mediaImg}
          />
          <span className={styles.mediaLabel}>St. Charmont</span>
        </div>
      </div>
    </section>
  );
}
