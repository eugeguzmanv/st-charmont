"use client";

import { useState, type FormEvent } from "react";
import styles from "./FooterCTA.module.css";

export default function FooterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.kicker}>Cierre</span>
        <h2 className={styles.heading}>
          Bienvenido a una nueva expresion del lujo.
        </h2>

        {submitted ? (
          <p className={styles.thanks}>
            Gracias. Hemos recibido tu interes y te contactaremos con
            informacion exclusiva sobre el lanzamiento.
          </p>
        ) : (
          <>
            <p className={styles.invite}>
              Solicita informacion exclusiva sobre el lanzamiento.
            </p>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                className={styles.input}
                placeholder="Tu correo electronico"
                aria-label="Correo electronico"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <button type="submit" className={styles.button}>
                Solicitar acceso
              </button>
            </form>
          </>
        )}

        <div className={styles.brand}>
          <span className={styles.brandName}>St. Charmont</span>
          <span className={styles.brandTag}>Proximamente</span>
        </div>
      </div>
    </footer>
  );
}
