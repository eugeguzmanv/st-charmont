import Image from "next/image";
import styles from "./TheSoul.module.css";
import ImageCarousel from "./ImageCarousel";

const SOUL_HERO_IMAGE =
  "/images/WhatsApp Image 2026-07-22 at 10.15.43 AM.jpeg";

export default function TheSoul() {
  return (
    <section id="alma" className={styles.soul}>
      <div className={styles.mediaBand}>
        <Image
          src={SOUL_HERO_IMAGE}
          alt="Patio nocturno con velas en la hacienda de St. Charmont"
          fill
          sizes="100vw"
          className={styles.mediaImg}
        />
      </div>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.intro}>
            <h2 className={styles.heading}>EL ALMA DE ST. CHARMONT</h2>
            <p className={styles.subheading}>La Hacienda</p>
          </div>
          <div className={styles.details}>
            <p className={styles.body}>
            Con más de tres siglos de historia, Hacienda Noc Ac es el origen vivo de St. Charmont. Restaurada con respeto, conserva su arquitectura y su memoria para dialogar con un proyecto donde la hospitalidad y el bienestar conviven de forma natural.
            </p>
            
          </div>
        </div>

        <ImageCarousel />
      </div>
    </section>
  );
}
