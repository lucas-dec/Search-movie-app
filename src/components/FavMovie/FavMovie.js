import React from "react";
import styles from "./FavMovie.module.scss";

const FavMovie = ({ movie }) => (
  <li className={styles.favMovie}>
    <img src={movie.poster} alt={`Poster of the movie - ${movie.title}`} />
    <h3>{movie.title}</h3>
  </li>
);

export default FavMovie;
