import React from "react";
import { Carousel } from "react-responsive-carousel";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import styles from "./Events.module.css";

import events from "../../data/events";
import { Event } from "../../components/Event/Event";
import useWindowDimensions from "../../utils/useWindowDimensions";

export const Events = () => {
  const { width } = useWindowDimensions();

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
      <h1 className={styles.eventsPageTitle}>Events</h1>
      <div className={styles.eventsContainer}>
        <Carousel
          className={styles.carousel}
          showThumbs={false}
          showIndicators={width <= 1100}
          showStatus={false}
          emulateTouch={width <= 1100}
          infiniteLoop
          renderArrowPrev={(clickHandler) => {
            return (
              <FaArrowAltCircleLeft
                onClick={clickHandler}
                size={40}
                className={styles.prevArrow}
                display={width <= 1100 && "none"}
                style={{ color: "#3E1F92" }}
              />
            );
          }}
          renderArrowNext={(clickHandler) => {
            return (
              <FaArrowAltCircleRight
                onClick={clickHandler}
                size={40}
                className={styles.nextArrow}
                display={width <= 1100 && "none"}
                style={{ color: "#3E1F92" }}
              />
            );
          }}
        >
          {events.map((event) => {
            return (
              <Event
                key={event.id}
                title={event.title}
                description={event.description}
                when={event.when}
                where={event.where}
                cost={event.cost}
                signupLink={event.signupLink}
                past={event.endTime < Date.now()}
                images={event.images}
              />
            );
          })}
        </Carousel>
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
