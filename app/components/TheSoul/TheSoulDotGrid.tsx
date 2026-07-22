"use client";

import DotGrid from "../DotGrid";
import styles from "./TheSoul.module.css";

const GREEN = "#1a2f26";

export default function TheSoulDotGrid() {
  return (
    <div className={styles.mediaBandBg} aria-hidden="true">
      <DotGrid
        dotSize={12}
        gap={26}
        baseColor={GREEN}
        activeColor={GREEN}
        proximity={140}
      />
    </div>
  );
}
