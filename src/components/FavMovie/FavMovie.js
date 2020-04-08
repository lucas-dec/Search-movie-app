import React from "react";
import styles from "./FavMovie.module.scss";

const FavMovie = ({ movie, click }) => (
  <>
    <li className={styles.favMovie}>
      <img src={movie.poster} alt={`Poster of the movie - ${movie.title}`} />
      <h3>{movie.title}</h3>
      <div className={styles.removeWrapper}>
        <button className={styles.btnOpen}>Open</button>
        <button onClick={click} className={styles.btnRemove}>
          Remove
        </button>
      </div>
    </li>
  </>
);

export default FavMovie;
