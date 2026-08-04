import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/types";
import styles from "./Wellness.module.css";

const ARTICLE_IMAGES = [
  "/images/articles/fastcompany.png",
  "/images/articles/treehugger.png",
] as const;

export default function Wellness({ dict }: { dict: Dictionary }) {
  return (
    <section id="wellness" className={styles.wellness}>
      <div className={styles.inner}>
        <div className={styles.media}>
          <Image
            src="/images/Copia de STCHARMONT_MURO GRABADO.png"
            alt={dict.wellness.mediaAlt}
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
            className={styles.mediaImg}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.heading}>{dict.wellness.heading}</h2>
          <p className={styles.subheading}>{dict.wellness.subheading}</p>
          <p className={styles.body}>{dict.wellness.body}</p>
        </div>
      </div>

      <div className={styles.insights}>
        <h3 className={styles.insightTitle}>{dict.wellness.insightTitle}</h3>
        <p className={styles.insightText}>{dict.wellness.insightText}</p>

        <div className={styles.articles}>
          {dict.wellness.articles.map((article, index) => (
            <a
              key={article.href}
              href={article.href}
              className={styles.article}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.articlePreview}>
                <Image
                  src={ARTICLE_IMAGES[index]}
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
                <span className={styles.articleCta}>{dict.wellness.readArticle}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
