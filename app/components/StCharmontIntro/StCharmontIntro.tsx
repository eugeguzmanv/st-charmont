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
          <p className={styles.lead}>
            Donde la historia encuentra una nueva forma de ser vivida.
          </p>
          <p className={styles.body}>
            Entre la elegancia atemporal de una hacienda historica y una vision
            contemporanea del bienestar, surge St. Charmont: un destino
            concebido para quienes valoran la belleza, la privacidad y las
            experiencias extraordinarias.
          </p>
        </div>

        <div className={styles.media}>
          <Image
            src="/images/Copia de StCharmont1_Vermont.png"
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
