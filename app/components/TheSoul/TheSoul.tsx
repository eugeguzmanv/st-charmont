import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/types";
import styles from "./TheSoul.module.css";
import ImageCarousel from "./ImageCarousel";

const SOUL_HERO_IMAGE =
  "/images/WhatsApp Image 2026-07-22 at 10.15.43 AM.jpeg";

export default function TheSoul({ dict }: { dict: Dictionary }) {
  return (
    <section id="alma" className={styles.soul}>
      <div className={styles.mediaBand}>
        <Image
          src={SOUL_HERO_IMAGE}
          alt={dict.soul.imageAlt}
          fill
          sizes="100vw"
          className={styles.mediaImg}
        />
      </div>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.intro}>
            <h2 className={styles.heading}>{dict.soul.heading}</h2>
            <p className={styles.subheading}>{dict.soul.subheading}</p>
          </div>
          <div className={styles.details}>
            <p className={styles.body}>{dict.soul.body}</p>
          </div>
        </div>

        <ImageCarousel />
      </div>
    </section>
  );
}
