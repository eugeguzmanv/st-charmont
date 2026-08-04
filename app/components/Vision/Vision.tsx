import type { Dictionary } from "@/lib/i18n/types";
import styles from "./Vision.module.css";

export default function Vision({ dict }: { dict: Dictionary }) {
  return (
    <section id="vision" className={styles.vision}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{dict.vision.heading}</h2>
        <p className={styles.body}>{dict.vision.body}</p>
      </div>
    </section>
  );
}
