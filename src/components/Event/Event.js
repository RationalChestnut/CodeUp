import React from "react";
import { Carousel } from "react-responsive-carousel";

import event from "../../assets/event.jpeg";
import styles from "./Event.module.css";

export const Event = ({
  title,
  description,
  when,
  where,
  cost,
  signupLink,
  past,
  images,
}) => {
  return (
    <div className={styles.eventContainer}>
      <div className={styles.left}>
        <h1 className={styles.eventTitle}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <p className={styles.info}>
          <span className={styles.titleInfo}>When:</span> {""}
          {when}
        </p>
        <p className={styles.info}>
          <span className={styles.titleInfo}>Where:</span> {""}
          {where}
        </p>
        <p className={styles.info}>
          <span className={styles.titleInfo}>Cost:</span> {""}
          {cost === 0 ? "Nothing!" : `$${cost}`}
        </p>

        {!past ? (
          <a
            href={signupLink}
            className={styles.signupLink}
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.button}>Sign Up</button>
          </a>
        ) : (
          <a
            href={signupLink}
            className={styles.signupLink}
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.button} disabled>
              Event Over
            </button>
          </a>
        )}
      </div>

      {!past ? (
        <div className={styles.imageContainer}>
          <img src={event} alt="Girls Coding" className={styles.eventImage} />
        </div>
      ) : (
        <Carousel
          className={styles.carousel}
          infiniteLoop
          showThumbs={false}
          dynamicHeight={true}
        >
          {images.map((img, index) => {
            return (
              <div key={index}>
                <img
                  src={img}
                  className={styles.carouselImage}
                  alt={"Highlights from the event"}
                />
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};
