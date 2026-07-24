import styles from "./Legacy.module.css";

export default function Legacy() {
  return (
    <section className={styles.legacy}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>PERMANENCIA</h2>
        <p className={styles.subheading}>Diseñado para trascender.</p>
        <p className={styles.body}>
        Algunas propiedades generan valor. Otras crean historia. St. Charmont ha sido concebido para convertirse en un referente de elegancia, bienestar y patrimonio en Yucatán; un destino admirado hoy y apreciado por generaciones.
        </p>
      </div>
    </section>
  );
}
