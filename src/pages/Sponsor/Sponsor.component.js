import React from "react";
import styles from "./SponsorComponent.module.css";
export const SponsorComponent = ({ sponsor }) => {
  return (
    <div className={styles.sponsorContainer}>
      <a href={sponsor.href} target="_blank" rel="noreferrer">
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className={styles.sponsorImage}
        />
      </a>
    </div>
  );
};
