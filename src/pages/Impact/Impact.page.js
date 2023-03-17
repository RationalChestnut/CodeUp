import React from "react";
import styles from "./Impact.module.css";

export const Impact = () => {
  return (
    <div className={styles.container}>
      <p className={styles.impactText}>
        <span className={styles.impact}>150 </span>kids taught to code
      </p>
      <p className={styles.impactText}>
        <span className={styles.impact}>4</span> bootcamps run
      </p>
    </div>
  );
};
