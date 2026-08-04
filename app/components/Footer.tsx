import Image from "next/image";
import { Fragment } from "react";
import type { Dictionary } from "@/lib/i18n/types";
import styles from "./Footer.module.css";

const GRUPO_SALOMON_LOGO = "/images/GS-2 (1).png";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerHeader}>
        <div className={styles.headerLeftColumn}>
          <div className={styles.logoContainer}>
            <Image
              src="/images/STCHARMONT_MASTERBRAND B.png"
              alt={dict.footer.logoAlt}
              width={2534}
              height={527}
              sizes="(max-width: 720px) 240px, 320px"
              className={styles.logo}
            />
          </div>

          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/share/1Jqmhe5jFV/?mibextid=wwXIfr"
              aria-label={dict.footer.facebookLabel}
              className={styles.socialIcon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/icons/facebook.svg" alt="" width={28} height={28} />
            </a>
            <a
              href="https://www.instagram.com/st.charmont/"
              aria-label={dict.footer.instagramLabel}
              className={styles.socialIcon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/icons/instagram.svg" alt="" width={28} height={28} />
            </a>
          </div>
        </div>

        <div className={styles.headerProjectInfo}>
          <p className={styles.projectLabel}>{dict.footer.projectLabel}</p>
          <h3 className={styles.companyName}>{dict.footer.companyName}</h3>
          <a
            href="https://gruposalomon.com/inicio/"
            className={styles.projectLogoLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.footer.visitGrupoSalomon}
          >
            <Image
              src={GRUPO_SALOMON_LOGO}
              alt={dict.footer.grupoSalomonAlt}
              width={520}
              height={180}
              sizes="(max-width: 720px) 200px, 260px"
              className={styles.projectLogo}
            />
          </a>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.contactSection}>
          <h4 className={styles.contactTitle}>{dict.footer.contactTitle}</h4>

          <div className={styles.hoursBlock}>
            <p className={styles.blockTitle}>
              <Image
                src="/icons/calendar.svg"
                alt=""
                width={18}
                height={18}
                className={styles.iconStandard}
              />
              {dict.footer.hoursLabel}
            </p>
            <div className={styles.hoursGrid}>
              {dict.footer.days.map((entry) => (
                <Fragment key={entry.day}>
                  <span className={styles.dayLabel}>{entry.day}</span>
                  <span className={styles.dayTime}>{entry.hours}</span>
                </Fragment>
              ))}
            </div>
          </div>

          <div className={styles.contactItem}>
            <Image
              src="/icons/phone.svg"
              alt=""
              width={18}
              height={18}
              className={styles.iconStandard}
            />
            <a href="tel:+529991814673" className={styles.contactLink}>
              +52 999 181 4673
            </a>
          </div>

          <div className={styles.contactItem}>
            <Image
              src="/icons/whatsapp.svg"
              alt=""
              width={18}
              height={18}
              className={styles.iconStandard}
            />
            <a
              href="https://wa.me/529991814673"
              className={styles.contactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              +52 999 369 2019
            </a>
          </div>

          <div className={styles.contactItem}>
            <Image
              src="/icons/email.svg"
              alt=""
              width={18}
              height={18}
              className={styles.iconStandard}
            />
            <a href="mailto:info@stcharmont.com" className={styles.contactLink}>
              info@stcharmont.com
            </a>
          </div>

          <div className={styles.contactItem}>
            <Image
              src="/icons/location.svg"
              alt=""
              width={18}
              height={18}
              className={styles.iconStandard}
            />
            <span>{dict.footer.address}</span>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.disclaimer}>{dict.footer.disclaimer}</p>
        <div className={styles.rights}>
          <span>
            &copy; St. Charmont {new Date().getFullYear()}. {dict.footer.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}
