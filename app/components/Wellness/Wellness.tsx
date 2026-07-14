import Image from "next/image";
import styles from "./Wellness.module.css";

const ARTICLES = [
  {
    href: "https://www.fastcompany.com/40512467/utopic-wellness-communities-are-a-multibillion-dollar-real-estate-trend?utm_source=chatgpt.com",
    source: "Fast Company",
    image: "/images/articles/fastcompany.png",
    title:
      "Utopic wellness communities are a multibillion-dollar real estate trend",
    description:
      "Como las comunidades de wellness estan transformando el mercado inmobiliario de lujo en un destino integral de estilo de vida.",
  },
  {
    href: "https://www.treehugger.com/wellness-new-luxury-multimillion-dollar-condos-get-healthy-4855743?utm_source=chatgpt.com",
    source: "Treehugger",
    image: "/images/articles/treehugger.png",
    title:
      "Wellness Is the New Luxury, as Multimillion Dollar Condos Get Healthy",
    description:
      "El auge del real estate de bienestar: cuando el bienestar biologico se convierte en la maxima expresion del lujo moderno.",
  },
] as const;

export default function Wellness() {
  return (
    <section className={styles.wellness}>
      <div className={styles.inner}>
        <div className={styles.media}>
          <Image
            src="/images/Copia de STCHARMONT_MURO GRABADO.png"
            alt="Espacio de bienestar en St. Charmont"
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
            className={styles.mediaImg}
          />
        </div>
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

      <div className={styles.insights}>
        <h3 className={styles.insightTitle}>Wellness is the new luxury</h3>
        <p className={styles.insightText}>
          Descubre como el wellness se ha convertido en la maxima expresion de
          lujo moderno
        </p>

        <div className={styles.articles}>
          {ARTICLES.map((article) => (
            <a
              key={article.href}
              href={article.href}
              className={styles.article}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.articlePreview}>
                <Image
                  src={article.image}
                  alt=""
                  fill
                  sizes="(max-width: 860px) 100vw, 50vw"
                  className={styles.articleImage}
                />
                <span className={styles.articleOverlay} aria-hidden="true" />
              </div>
              <div className={styles.articleBody}>
                <span className={styles.articleSource}>{article.source}</span>
                <h4 className={styles.articleTitle}>{article.title}</h4>
                <p className={styles.articleDescription}>
                  {article.description}
                </p>
                <span className={styles.articleCta}>Leer articulo</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
