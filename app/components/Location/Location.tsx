import Image from "next/image";
import styles from "./Location.module.css";

export default function Location() {
  return (
    <section className={styles.location}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.kicker}>06</span>
          <h2 className={styles.heading}>ENTRE MERIDA Y LA COSTA</h2>
          <p className={styles.subheading}>Una ubicacion privilegiada.</p>
          <p className={styles.body}>
            Estrategicamente ubicado en uno de los corredores mas prometedores
            de Yucatan, St. Charmont ofrece la combinacion perfecta entre
            privacidad, conectividad y acceso a los principales destinos de la
            region. Un lugar pensado para quienes entienden que la verdadera
            exclusividad tambien depende de donde se encuentra.
          </p>
        </div>

        <div className={styles.map}>
          <Image
            src="/images/map.png"
            alt="Mapa de la ubicacion de St. Charmont en Yucatan"
            width={819}
            height={1024}
            sizes="(max-width: 860px) 90vw, 50vw"
            className={styles.mapImg}
          />
        </div>
      </div>
    </section>
  );
}
