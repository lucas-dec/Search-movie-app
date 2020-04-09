import React from "react";
import styles from "./FavMovie.module.scss";
import defaultPoster from "../../assets/single-logo.png";

const FavMovie = ({ movie, open, remove }) => (
  <>
    <li className={styles.favMovie}>
      <img
        src={movie.poster === "N/A" ? defaultPoster : movie.poster}
        alt={`Poster of the movie - ${movie.title}`}
      />
      <h3>{movie.title}</h3>
      <div className={styles.removeWrapper}>
        <button onClick={open} className={styles.btnOpen}>
          Open
        </button>
        <button onClick={remove} className={styles.btnRemove}>
          Remove
        </button>
      </div>
    </li>
  </>
);

export default FavMovie;
