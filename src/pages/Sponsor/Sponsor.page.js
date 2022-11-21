import React from "react";
import styles from "./Sponsor.module.css";
import { sponsors } from "./Sponsor.data";
import { SponsorComponent } from "./Sponsor.component";

export const Sponsor = () => {
  return (
    <div class={styles.sponsorPage}>
      <h1 class={styles.title}>Meet our sponsors:</h1>
      <div class={styles.sponsors}>
        {sponsors.map((sponsor) => (
          <SponsorComponent sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
};
