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
    body: "Ubicado dentro de la emblemática Hacienda, el hotel será operado bajo los estándares de una reconocida marca internacional, ofreciendo una experiencia de hospitalidad excepcional. Sus huéspedes y residentes disfrutarán de acceso a una exclusiva colección de amenidades y experiencias, donde la historia, el bienestar y el servicio convergen en perfecta armonía.",
  },
  {
    id: "residences",
    label: "Residences",
    title: "BRANDED RESIDENCES",
    body: "Una Branded Residence combina la exclusividad de una residencia privada con el respaldo y los servicios de una marca hotelera de lujo. Disfruta de la administración, mantenimiento y hospitalidad de un hotel de clase mundial, con la libertad de utilizar tu propiedad cuando lo desees o integrarla al programa de rentas para generar ingresos.",
  },
  {
    id: "spa",
    label: "Spa",
    title: "SPA",
    body: "El Spa será un refugio dedicado al bienestar integral, donde cada experiencia ha sido concebida para promover la relajación, el equilibrio y el cuidado personal. Un espacio que complementa el estilo de vida de St. Charmont con una propuesta inspirada en la armonía y el confort.",
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
