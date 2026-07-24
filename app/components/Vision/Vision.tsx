import styles from "./Vision.module.css";

export default function Vision() {
  return (
    <section className={styles.vision}>
      <div className={styles.inner}>
        
        <h2 className={styles.heading}>UNA VISIÓN EXTRAORDINARIA</h2>
        <p className={styles.subheading}>Más que un lugar. Un estilo de vida.</p>
        <p className={styles.body}>
        St. Charmont nace con la intención de crear uno de los destinos residenciales y de hospitalidad más exclusivos de Yucatán. Un entorno donde la arquitectura, la naturaleza, el bienestar y el servicio convergen para ofrecer una experiencia única, diseñada para disfrutarse generación tras generación.
        </p>
      </div>
    </section>
  );
}
