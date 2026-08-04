import type { Dictionary } from "@/lib/i18n/types";
import styles from "./Legacy.module.css";

export default function Legacy({ dict }: { dict: Dictionary }) {
  return (
    <section id="legacy" className={styles.legacy}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{dict.legacy.heading}</h2>
        <p className={styles.subheading}>{dict.legacy.subheading}</p>
        <p className={styles.body}>{dict.legacy.body}</p>
      </div>
    </section>
  );
}
