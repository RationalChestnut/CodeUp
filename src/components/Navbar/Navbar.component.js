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
                        <img
                            src={logo}
                            alt="CodeUp Logo"
                            className={styles.logo}
                        />
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
                    <a href="#sponsors" className={styles.link}>
                        Sponsors
                    </a>
                    <a href="#contact" className={styles.link}>
                        Contact
                    </a>
                    <a
                        href="https://secure.givelively.org/donate/hackplus/codeup"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className={styles.button}>Donate</button>
                    </a>
                </div>
            </div>
            {showItems && (
                <div className={styles.mobileLinksContainer}>
                    <a
                        href="#events"
                        className={styles.mobileLink}
                        onClick={() => setShowItems(false)}
                    >
                        Events
                    </a>
                    <a href="#sponsors" className={styles.mobileLink}>
                        Sponsors
                    </a>
                    <a href="#contact" className={styles.mobileLink}>
                        Contact
                    </a>
                    <a
                        href="https://secure.givelively.org/donate/hackplus/codeup"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button
                            className={styles.mobileButton}
                            onClick={() => setShowItems(false)}
                        >
                            Donate
                        </button>
                    </a>
                    <hr className={styles.horizontal} />
                </div>
            )}
        </div>
    );
};

export default Navbar;
