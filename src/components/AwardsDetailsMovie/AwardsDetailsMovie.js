import React from "react";
import styles from "./AwardsDetailsMovie.module.scss";

const AwardsDetailsMovie = ({ awards }) => (
  <>
    <h3>Awards:</h3>
    <p className={styles.awards}>{awards}</p>
  </>
);

export default AwardsDetailsMovie;
