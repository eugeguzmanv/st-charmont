import styles from "./Wellness.module.css";

export default function Wellness() {
  return (
    <section className={styles.wellness}>
      <div className={styles.inner}>
        <div
          className={styles.media}
          role="img"
          aria-label="Espacio de bienestar en St. Charmont"
        />
        <div className={styles.content}>
          <span className={styles.kicker}>04</span>
          <h2 className={styles.heading}>WELLNESS BY DESIGN</h2>
          <p className={styles.subheading}>El lujo de sentirse bien.</p>
          <p className={styles.body}>
            En St. Charmont, el bienestar no es una amenidad. Es una filosofia
            presente en cada experiencia, cada espacio y cada detalle. Disenado
            para fomentar el equilibrio entre cuerpo, mente y entorno, el
            proyecto invita a vivir con mayor plenitud, conexion y serenidad.
          </p>
        </div>
      </div>
    </section>
  );
}
