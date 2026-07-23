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
            Con más de 300 años de historia, Hacienda Noc-Ac da identidad a St. Charmont. Cuidadosamente restaurada, preserva su riqueza arquitectónica y cultural para integrarse a un proyecto donde la historia, la hospitalidad y el bienestar conviven en perfecta armonía.
            </p>
            <p className={styles.statement}>
              No es un elemento del proyecto. Es su razon de existir.
            </p>
          </div>
        </div>

        <ImageCarousel />
      </div>
    </section>
  );
}
