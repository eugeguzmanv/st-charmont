import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/types";
import styles from "./Location.module.css";

export default function Location({ dict }: { dict: Dictionary }) {
  return (
    <section id="location" className={styles.location}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.heading}>{dict.location.heading}</h2>
          <p className={styles.subheading}>{dict.location.subheading}</p>
          <p className={styles.body}>{dict.location.body}</p>
        </div>

        <div className={styles.map}>
          <Image
            src="/images/CROQUIS.png"
            alt={dict.location.mapAlt}
            width={819}
            height={1024}
            sizes="(max-width: 860px) 90vw, 50vw"
            className={styles.mapImg}
          />
        </div>
      </div>
    </section>
  );
}
