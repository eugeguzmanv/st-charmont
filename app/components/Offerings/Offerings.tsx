"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { OfferingTab } from "@/lib/i18n/types";
import styles from "./Offerings.module.css";

type TabId = OfferingTab["id"];

export default function Offerings() {
  const { dict } = useLocale();
  const tabs = dict.offerings.tabs;
  const [activeId, setActiveId] = useState<TabId>("hotel");
  const [slideDirection, setSlideDirection] = useState(0);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const menuRef = useRef<HTMLDivElement>(null);

  const activeIndex = tabs.findIndex((tab) => tab.id === activeId);

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
    <section
      id="offerings"
      className={styles.offerings}
      aria-label={dict.offerings.sectionLabel}
    >
      <div className={styles.inner}>
        <div className={styles.menuWrap}>
          <div
            ref={menuRef}
            className={styles.menu}
            role="tablist"
            aria-label={dict.offerings.tablistLabel}
          >
            <span
              className={styles.indicator}
              style={{
                transform: `translateX(${indicator.left}px)`,
                width: indicator.width,
              }}
              aria-hidden="true"
            />
            {tabs.map((tab, index) => {
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
          {tabs.map((tab) => {
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
