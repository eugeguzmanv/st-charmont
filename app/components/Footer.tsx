import Image from "next/image";
import styles from "./Footer.module.css";

const GRUPO_SALOMON_LOGO = "/images/GS-2 (1).png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerHeader}>
        <div className={styles.headerLeftColumn}>
          <div className={styles.logoContainer}>
            <Image
              src="/images/texto_sobre.png"
              alt="St. Charmont Residences"
              width={2534}
              height={527}
              sizes="(max-width: 720px) 240px, 320px"
              className={styles.logo}
            />
          </div>

          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/people/St-Charmont-Residences"
              aria-label="Facebook"
              className={styles.socialIcon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/icons/facebook.svg" alt="" width={28} height={28} />
            </a>
            <a
              href="https://www.instagram.com/st.charmont/"
              aria-label="Instagram"
              className={styles.socialIcon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/icons/instagram.svg" alt="" width={28} height={28} />
            </a>
          </div>
        </div>

        <div className={styles.headerProjectInfo}>
          <p className={styles.projectLabel}>Un proyecto de</p>
          <h3 className={styles.companyName}>GRUPO SALOMON PENINSULAR SAPI DE CV</h3>
          <a
            href="https://gruposalomon.com/inicio/"
            className={styles.projectLogoLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar Grupo Salomon"
          >
            <Image
              src={GRUPO_SALOMON_LOGO}
              alt="Grupo Salomon"
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
          <h4 className={styles.contactTitle}>Contactanos</h4>

          <div className={styles.hoursBlock}>
            <p className={styles.blockTitle}>
              <Image
                src="/icons/calendar.svg"
                alt=""
                width={18}
                height={18}
                className={styles.iconStandard}
              />
              Horarios de atencion:
            </p>
            <div className={styles.hoursGrid}>
              <span className={styles.dayLabel}>Lunes</span>
              <span className={styles.dayTime}>9:00 a.m. - 6:00 p.m.</span>
              <span className={styles.dayLabel}>Martes</span>
              <span className={styles.dayTime}>9:00 a.m. - 6:00 p.m.</span>
              <span className={styles.dayLabel}>Miercoles</span>
              <span className={styles.dayTime}>9:00 a.m. - 6:00 p.m.</span>
              <span className={styles.dayLabel}>Jueves</span>
              <span className={styles.dayTime}>9:00 a.m. - 6:00 p.m.</span>
              <span className={styles.dayLabel}>Viernes</span>
              <span className={styles.dayTime}>9:00 a.m. - 6:00 p.m.</span>
              <span className={styles.dayLabel}>Sabado</span>
              <span className={styles.dayTime}>9:00 a.m. - 6:00 p.m.</span>
              <span className={styles.dayLabel}>Domingo</span>
              <span className={styles.dayTime}>Cerrado</span>
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
            <span>Calle 5 Num. 140 x 12 y 14 Frac. Residencial Montecristo</span>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.disclaimer}>
          Todos los precios, caracteristicas, apariencia o disponibilidad de las
          propiedades estan sujetos a cambio sin previo aviso.
        </p>
        <div className={styles.rights}>
          <span>&copy; St. Charmont {new Date().getFullYear()}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
