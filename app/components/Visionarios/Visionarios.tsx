"use client";

import ProfileCard from "../ProfileCard";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import styles from "./Visionarios.module.css";

export default function Visionarios() {
  const { dict } = useLocale();

  return (
    <section id="visionarios" className={styles.visionarios}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.heading}>{dict.visionarios.heading}</h2>
          <p className={styles.subheading}>{dict.visionarios.subheading}</p>
        </header>

        <div className={styles.grid}>
          {dict.visionarios.team.map((member) => (
            <div key={member.name} className={styles.cardSlot}>
              <ProfileCard
                name={member.name}
                title={member.role}
                avatarUrl={member.avatar}
                innerGradient="transparent"
                behindGlowEnabled
                behindGlowColor="rgba(193, 170, 141, 0.75)"
                behindGlowSize="70%"
                showUserInfo={false}
                showDetails={false}
                enableTilt
                enableMobileTilt={false}
                className={styles.profileCard}
              />
              <div className={styles.meta}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
