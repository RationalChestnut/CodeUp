import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <div className={styles.formContainer}>
      <h1>Get In Touch</h1>
      <div className={styles.formContainer}>
        <div className={styles.contactInfo}></div>
        <div className={styles.form}>
          <div className={styles.formSection}>
            <label for="name" className={styles.label}>
              Your name
            </label>
            <input type="text" className={styles.input} />
          </div>
        </div>
      </div>
    </div>
  );
};
