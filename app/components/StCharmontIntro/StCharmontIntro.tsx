import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/types";
import styles from "./StCharmontIntro.module.css";

export default function StCharmontIntro({ dict }: { dict: Dictionary }) {
  return (
    <section id="intro" className={styles.intro}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            ST. CHARMONT
            <span className={styles.subtitle}>{dict.intro.subtitle}</span>
          </h2>

          <p className={styles.body}>{dict.intro.body}</p>
        </div>

        <div className={styles.media}>
          <Image
            src="/images/STCHARMONT_MANIJA.png"
            alt={dict.intro.mediaAlt}
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
            className={styles.mediaImg}
          />
          <span className={styles.mediaLabel}>{dict.intro.mediaLabel}</span>
        </div>
      </div>
    </section>
  );
}
