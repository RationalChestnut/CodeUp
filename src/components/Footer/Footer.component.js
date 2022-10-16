import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.main}>
        <div className={styles.section}>
          <h2 className={styles.heading}>Navigate</h2>
          <a href="#" className={styles.links}>
            Home
          </a>
          <a href="#events" className={styles.links}>
            Events
          </a>
        </div>
        <div className={styles.section}>
          <h2 className={styles.heading}>Contact</h2>
          <a
            href="mailto:brian@codeupnp.org"
            target="_blank"
            className={styles.links}
            rel="noreferrer"
          >
            brian@codeupnp.org
          </a>
        </div>
      </div>

      <p className={styles.copyright}>Copyright @CodeUp 2022</p>
    </div>
  );
};
