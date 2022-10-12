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
            <a href="#" className={styles.eventsButton}>
              See Events
            </a>
            <a href="#" className={styles.donateButton}>
              Donate
            </a>
          </div>
        </div>
        <div className={styles.bannerImageContainer}>
          <img className={styles.bannerImage} src={hook} alt="HTML_CSS_CODE" />
        </div>
      </div>
    </div>
  );
};
