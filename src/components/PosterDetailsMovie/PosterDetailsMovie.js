import React from "react";
import styles from "./PosterDetailsMovie.module.scss";
import defaultPoster from "../../assets/single-logo.png";

const PosterDetailsMovie = ({ poster, title }) => (
  <img
    src={poster === "N/A" ? defaultPoster : poster}
    alt={`Poster of the movie - ${title}`}
    className={styles.poster}
  />
);

export default PosterDetailsMovie;
