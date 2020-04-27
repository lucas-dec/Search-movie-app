import React from "react";
import styles from "./ActorsList.module.scss";
import SingleActor from "../SingleActor/SingleActor";

const ActorsList = ({ actors }) => (
  <>
    <h3>Stars:</h3>
    <ul className={styles.actors}>
      <SingleActor actors={actors} />
    </ul>
  </>
);

export default ActorsList;
