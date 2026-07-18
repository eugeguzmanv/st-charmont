"use client";

import ProfileCard from "../ProfileCard";
import styles from "./Visionarios.module.css";

const TEAM = [
  {
    name: "Omar Salom\u00f3n",
    role: "Director General",
    avatar: "/images/people/Omar.jpeg",
  },
  {
    name: "Fausto Ter\u00e1n",
    role: "Creador y Arquitecto",
    avatar: "/images/people/Fausto.jpeg",
  },
  {
    name: "Alejandro Leo",
    role: "CEO ALEC Wellness",
    avatar: "/images/people/Alejandro.jpeg",
  },
  {
    name: "Edith Castillo",
    role: "Head of Wellness ALEC",
    avatar: "/images/people/Edith.jpeg",
  },
  {
    name: "Rocco Bova",
    role: "Asesor Corporativo",
    avatar: "/images/people/Rocco.jpg",
  },
] as const;

export default function Visionarios() {
  return (
    <section className={styles.visionarios}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.heading}>Visionarios</h2>
          <p className={styles.subheading}>
            Conoce al equipo detr&aacute;s de St. Charmont
          </p>
        </header>

        <div className={styles.grid}>
          {TEAM.map((member) => (
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
