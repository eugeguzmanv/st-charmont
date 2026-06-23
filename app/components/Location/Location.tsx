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

        <div
          className={styles.map}
          role="img"
          aria-label="Mapa estilizado de la ubicacion de St. Charmont en Yucatan"
        >
          <span className={`${styles.pin} ${styles.pinMerida}`}>
            <span className={styles.pinDot} />
            Merida
          </span>
          <span className={`${styles.pin} ${styles.pinCharmont}`}>
            <span className={`${styles.pinDot} ${styles.pinDotMain}`} />
            St. Charmont
          </span>
          <span className={`${styles.pin} ${styles.pinCoast}`}>
            <span className={styles.pinDot} />
            La Costa
          </span>
          <span className={styles.route} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
