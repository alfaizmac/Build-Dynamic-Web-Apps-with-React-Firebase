import React from "react";
import styles from "./EvetList.module.css";

export default function EventList({ events, handleClick }) {
  return (
    <div>
      {events.map((events, index) => (
        <div className={styles.card} key={events.id}>
          <h2>
            {index} - {events.title}
          </h2>
          <p>
            {events.location} - {events.date}
          </p>
          <button onClick={() => handleClick(events.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
}
