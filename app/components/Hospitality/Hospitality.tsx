import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/types";
import styles from "./Hospitality.module.css";

export default function Hospitality({ dict }: { dict: Dictionary }) {
  return (
    <section id="hospitality" className={styles.hospitality}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.heading}>{dict.hospitality.heading}</h2>
          <p className={styles.subheading}>{dict.hospitality.subheading}</p>
          <p className={styles.body}>{dict.hospitality.body1}</p>
          <p className={styles.body}>{dict.hospitality.body2}</p>
        </div>
        <div className={styles.media}>
          <Image
            src="/images/water.png"
            alt={dict.hospitality.mediaAlt}
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
            className={styles.mediaImg}
          />
        </div>
      </div>
    </section>
  );
}
