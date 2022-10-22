import React from "react";
import styles from "./Events.module.css";
import event from "../../assets/event.jpeg";

export const Events = () => {
  return (
    <div className={styles.eventsPageContainer} id="events">
      <div className={styles.customShapeDividerTop1666447409}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
      <h1 className={styles.eventsPageTitle}>Upcoming Events</h1>
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
      <div className={styles.customShapeDividerBottom1666447991}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
    </div>
  );
};
