"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./Offerings.module.css";

type TabId = "hotel" | "residences" | "spa";

type Tab = {
  id: TabId;
  label: string;
  title: string;
  body: string;
};

const TABS: Tab[] = [
  {
    id: "hotel",
    label: "Hotel",
    title: "HOTEL",
    body: "El hotel se integrará con  la  arquitectura original de la hacienda, para  crear un entorno único. Los jardines y los árboles centenarios serán los guardianes naturales de un espacio dedicado al bienestar profundo. La operación estará a cargo de una marca internacional de prestigio, asegurando una hospitalidad que se vive con la precisión y la calma de lo excepcional.",
  },
  {
    id: "residences",
    label: "Residences",
    title: "BRANDED RESIDENCES",
    body: "Una Branded Residence en St. Charmont representa la unión entre una residencia privada y la precisión operativa de una marca hotelera de prestigio. La propiedad se vive con la calma de lo permanente y con el respaldo de una hospitalidad que cuida cada detalle. El residente puede habitarla en cualquier momento o integrarla al programa de operación para generar rendimiento, siempre bajo los estándares más altos del mundo.",
  },
  {
    id: "spa",
    label: "Spa",
    title: "SPA",
    body: "El Spa, donde la ciencia contemporánea convive con rituales ancestrales. La arquitectura y los jardines crean un entorno que invita al cuerpo a renovarse y a la mente a descansar. Su operación estará a cargo de una firma reconocida entre las grandes casas de bienestar del mundo, asegurando tratamientos de última generación,  que acompañan la vida en su forma más profunda.",
  },
];

export default function Offerings() {
  const [activeId, setActiveId] = useState<TabId>("hotel");
  const [slideDirection, setSlideDirection] = useState(0);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const menuRef = useRef<HTMLDivElement>(null);

  const activeIndex = TABS.findIndex((tab) => tab.id === activeId);

  const updateIndicator = useCallback(() => {
    const menu = menuRef.current;
    const tab = tabRefs.current[activeIndex];
    if (!menu || !tab) return;

    setIndicator({
      left: tab.offsetLeft,
      width: tab.offsetWidth,
    });
  }, [activeIndex]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  const selectTab = (id: TabId, index: number) => {
    if (id === activeId) return;
    setSlideDirection(index > activeIndex ? 1 : -1);
    setActiveId(id);
  };

  return (
    <section className={styles.offerings} aria-label="Experiencias St. Charmont">
      <div className={styles.inner}>
        <div className={styles.menuWrap}>
          <div
            ref={menuRef}
            className={styles.menu}
            role="tablist"
            aria-label="Experiencias"
          >
            <span
              className={styles.indicator}
              style={{
                transform: `translateX(${indicator.left}px)`,
                width: indicator.width,
              }}
              aria-hidden="true"
            />
            {TABS.map((tab, index) => {
              const selected = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`offerings-tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`offerings-panel-${tab.id}`}
                  tabIndex={selected ? 0 : -1}
                  className={`${styles.tab} ${selected ? styles.tabActive : ""}`}
                  onClick={() => selectTab(tab.id, index)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.panelWrap}>
          {TABS.map((tab) => {
            const selected = tab.id === activeId;
            return (
              <article
                key={tab.id}
                id={`offerings-panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`offerings-tab-${tab.id}`}
                hidden={!selected}
                className={`${styles.panel} ${selected ? styles.panelVisible : ""}`}
                data-direction={slideDirection}
              >
                <h2 className={styles.panelTitle}>{tab.title}</h2>
                <p className={styles.panelBody}>{tab.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
