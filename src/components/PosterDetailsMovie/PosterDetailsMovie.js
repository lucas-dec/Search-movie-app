import React from "react";
import styles from "./PosterDetailsMovie.module.scss";
import defaultPoster from "../../assets/single-logo.png";

const PosterDetailsMovie = ({ poster }) => (
  <img
    src={poster === "N/A" ? defaultPoster : poster}
    alt="Poster of the Movie"
    className={styles.poster}
  />
);

export default PosterDetailsMovie;
