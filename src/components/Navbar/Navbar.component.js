import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="CodeUp Logo" className={styles.logo} />
      </div>
      <div className={styles.linksContainer}>
        <a href="#" className={styles.link}>
          About
        </a>
        <a href="#" className={styles.link}>
          Events
        </a>
        <a href="#" className={styles.link}>
          Contact
        </a>
        <button className={styles.button}>Donate</button>
      </div>
    </div>
  );
};

export default Navbar;
