import React from "react";
import styles from "./Impact.module.css";

export const Impact = () => {
  return (
    <div className={styles.container}>
      <p className={styles.impactText}>
        <span className={styles.impact}>188 </span>kids taught to code
      </p>
      <p className={styles.impactText}>
        <span className={styles.impact}>5</span> bootcamps run
      </p>
    </div>
  );
};
