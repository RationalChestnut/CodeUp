import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showItems, setShowItems] = useState(false);

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <a href="#">
            <img src={logo} alt="CodeUp Logo" className={styles.logo} />
          </a>
        </div>
        <GiHamburgerMenu
          className={styles.burger}
          onClick={() => setShowItems(!showItems)}
        />
        <div className={styles.linksContainer}>
          <a href="#events" className={styles.link}>
            Events
          </a>
          <button className={styles.button}>Donate</button>
        </div>
      </div>
      {showItems && (
        <div className={styles.mobileLinksContainer}>
          <a href="#events" className={styles.mobileLink}>
            Events
          </a>
          <button className={styles.mobileButton}>Donate</button>
          <hr className={styles.horizontal} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
