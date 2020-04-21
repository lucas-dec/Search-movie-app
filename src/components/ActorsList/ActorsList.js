import React from "react";
import styles from "./ActorsList.module.scss";

const ActorsList = ({ actors }) => {
  const listActors = actors
    .split(",")
    .map((actor, index) => <li key={index}>{actor}</li>);
  return (
    <>
      <h3>Stars:</h3>
      <ul className={styles.actors}>{listActors}</ul>
    </>
  );
};
export default ActorsList;
