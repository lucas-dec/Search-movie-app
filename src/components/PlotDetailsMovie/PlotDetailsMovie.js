import React from "react";
import styles from "./PlotDetailsMovie.module.scss";

const PosterDetailsMovie = ({ plot }) => <p className={styles.about}>{plot}</p>;

export default PosterDetailsMovie;
