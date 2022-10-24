import React from "react";

import styles from "./Home.module.css";
import hook from "../../assets/hook.png";

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.bannerTextContainer}>
          <div className={styles.bannerTitle}>
            Learn the #1 skill of the future
          </div>
          <div className={styles.bannerDescription}>
            CodeUp, a project of Hack+, is a 501c3 organization run by high
            school students whose mission is to teach grade students of all
            backgrounds to code.
          </div>
          <div className={styles.bannerButtonGroup}>
            <a href="#events" className={styles.eventsButton}>
              See Events
            </a>
            <a
              href="https://secure.givelively.org/donate/hackplus/codeup"
              className={styles.donateButton}
              target="_blank"
              rel="noreferrer"
            >
              Donate
            </a>
          </div>
        </div>
        <div className={styles.bannerImageContainer}>
          <img className={styles.bannerImage} src={hook} alt="People coding" />
        </div>
      </div>
    </div>
  );
};
