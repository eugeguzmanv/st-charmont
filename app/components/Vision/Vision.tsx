import styles from "./Vision.module.css";

export default function Vision() {
  return (
    <section className={styles.vision}>
      <div className={styles.inner}>
        <span className={styles.kicker}>02</span>
        <h2 className={styles.heading}>UNA VISION EXTRAORDINARIA</h2>
        <p className={styles.subheading}>Mas que un lugar. Un estilo de vida.</p>
        <p className={styles.body}>
          St. Charmont nace con la intencion de crear uno de los destinos
          residenciales y de hospitalidad mas exclusivos de Yucatan. Un entorno
          donde la arquitectura, la naturaleza, el bienestar y el servicio
          convergen para ofrecer una experiencia unica, disenada para
          disfrutarse generacion tras generacion.
        </p>
      </div>
    </section>
  );
}
