"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ImageCarousel.module.css";

const CAROUSEL_IMAGES = [
  { src: "/images/carousel/IMG_4756.jpg", width: 2268, height: 4032 },
  { src: "/images/carousel/IMG_5477.jpg", width: 2160, height: 3840 },
  { src: "/images/carousel/IMG_5479.jpg", width: 2160, height: 3840 },
  { src: "/images/carousel/IMG_5486.jpg", width: 2160, height: 3840 },
  { src: "/images/carousel/IMG_5514.jpg", width: 2160, height: 3840 },
  { src: "/images/carousel/IMG_5515.jpg", width: 2160, height: 3840 },
  { src: "/images/carousel/IMG_5516.jpg", width: 2160, height: 3840 },
  { src: "/images/carousel/IMG_5524.jpg", width: 2160, height: 3840 },
  { src: "/images/carousel/IMG_5529.jpg", width: 4536, height: 8064 },
  { src: "/images/carousel/IMG_5531.jpg", width: 4536, height: 8064 },
  { src: "/images/carousel/IMG_5532.jpg", width: 4536, height: 8064 },
  { src: "/images/carousel/IMG_5551.jpg", width: 4536, height: 8064 },
  { src: "/images/carousel/IMG_5565.jpg", width: 4536, height: 8064 },
  { src: "/images/carousel/IMG_5576.jpg", width: 2160, height: 3840 },
  { src: "/images/carousel/IMG_5602.jpg", width: 2268, height: 4032 },
] as const;

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = CAROUSEL_IMAGES.length;
  const current = CAROUSEL_IMAGES[index];

  useEffect(() => {
    if (paused || total <= 1) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 4500);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const goTo = (next: number) => {
    setIndex(((next % total) + total) % total);
  };

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Galeria de la hacienda"
    >
      <div className={styles.frame}>
        {CAROUSEL_IMAGES.map((image, i) => (
          <div
            key={image.src}
            className={`${styles.slide} ${i === index ? styles.active : ""}`}
            aria-hidden={i !== index}
          >
            <Image
              src={image.src}
              alt={`Vista de St. Charmont ${i + 1}`}
              width={image.width}
              height={image.height}
              sizes="(max-width: 860px) 100vw, 40vw"
              className={styles.image}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className={`${styles.nav} ${styles.prev}`}
        onClick={() => goTo(index - 1)}
        aria-label="Imagen anterior"
      >
        <span aria-hidden="true" />
      </button>
      <button
        type="button"
        className={`${styles.nav} ${styles.next}`}
        onClick={() => goTo(index + 1)}
        aria-label="Imagen siguiente"
      >
        <span aria-hidden="true" />
      </button>

      <div className={styles.dots} role="tablist" aria-label="Seleccionar imagen">
        {CAROUSEL_IMAGES.map((image, i) => (
          <button
            key={image.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Ir a la imagen ${i + 1}`}
            className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <span className={styles.srOnly}>
        Imagen {index + 1} de {total}: {current.src}
      </span>
    </div>
  );
}
