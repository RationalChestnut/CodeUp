import React from "react";
import styles from "./SponsorComponent.module.css";
export const SponsorComponent = ({ sponsor }) => {
    return (
        <div className={styles.sponsorContainer}>
            <a
                href={sponsor.href}
                className={styles.sponsorLink}
                target="_blank"
                rel="noreferrer"
            >
                <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className={styles.sponsorImage}
                />
                <h4 className={styles.sponsorDescription}>{sponsor.text}</h4>
            </a>
        </div>
    );
};
