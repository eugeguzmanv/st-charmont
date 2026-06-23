import styles from "./Hospitality.module.css";

export default function Hospitality() {
  return (
    <section className={styles.hospitality}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.kicker}>05</span>
          <h2 className={styles.heading}>HOSPITALIDAD DE CLASE MUNDIAL</h2>
          <p className={styles.subheading}>Una experiencia elevada.</p>
          <p className={styles.body}>
            St. Charmont integrara un hotel de lujo concebido para complementar
            la experiencia de sus residentes y visitantes. Un referente de
            hospitalidad que enriquecera la vida cotidiana mediante experiencias
            exclusivas, servicio excepcional y una conexion autentica con el
            patrimonio de la hacienda.
          </p>
        </div>
        <div
          className={styles.media}
          role="img"
          aria-label="Hotel de lujo de St. Charmont"
        />
      </div>
    </section>
  );
}
