import React from "react";
import styles from "./Events.module.css";
import event from "../../assets/event.jpeg";

export const Events = () => {
  return (
    <div className={styles.eventsPageContainer} id="events">
      <h1>Upcoming Events</h1>
      <div className={styles.eventContainer}>
        <div className={styles.left}>
          <h1 className={styles.eventTitle}>
            Introduction to Python using Turtle
          </h1>
          <p className={styles.description}>
            In this 3 hour bootcamp, middle schoolers will learn the basics of
            Python with an interactive Python module called Turtle! There will
            be other activities throughout the event as we know sitting down for
            three hours can be nearly impossible!
          </p>
          <p className={styles.info}>
            <span className={styles.titleInfo}>When:</span> {""}
            Sunday, November 6th from 1-4pm
          </p>
          <p className={styles.info}>
            <span className={styles.titleInfo}>Where:</span> {""}
            Pyle Middle School
          </p>
          <p className={styles.info}>
            <span className={styles.titleInfo}>Cost:</span> {""}
            Nothing!
          </p>

          <a
            href="https://forms.gle/vb6Ud5dUJ5Nj1u4d8"
            className={styles.signupLink}
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.button}>Sign Up </button>
          </a>
        </div>
        <div className={styles.imageContainer}>
          <img src={event} alt="Girls Coding" className={styles.eventImage} />
        </div>
      </div>
    </div>
  );
};
