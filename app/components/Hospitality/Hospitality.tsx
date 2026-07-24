import Image from "next/image";
import styles from "./Hospitality.module.css";

export default function Hospitality() {
  return (
    <section className={styles.hospitality}>
      <div className={styles.inner}>
        <div className={styles.content}>
          
          <h2 className={styles.heading}>HOSPITALIDAD DE CLASE MUNDIAL</h2>
          <p className={styles.subheading}>Una experiencia elevada.</p>
          <p className={styles.body}>
          St. Charmont integrará un resort concebido para acompañar la vida de residentes y visitantes con una hospitalidad discreta, precisa y profundamente serena. Un destino donde cada momento se distingue por calidad, cuidado y detalles que marcan la diferencia.</p>

 <p className={styles.body}>Aquí, la hospitalidad ocurre con la elegancia de lo silencioso.</p>

          
        </div>
        <div className={styles.media}>
          <Image
            src="/images/water.png"
            alt="Hotel de lujo de St. Charmont"
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
            className={styles.mediaImg}
          />
        </div>
      </div>
    </section>
  );
}
