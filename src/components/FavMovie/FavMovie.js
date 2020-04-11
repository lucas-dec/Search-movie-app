import React from "react";
import styles from "./FavMovie.module.scss";
import defaultPoster from "../../assets/single-logo.png";
import openIcon from "../../assets/icons/open.svg";
import removeIcon from "../../assets/icons/removeFromWatchlist.svg";

const FavMovie = ({ movie, open, remove }) => (
  <>
    <li className={styles.favMovie}>
      <img
        src={movie.poster === "N/A" ? defaultPoster : movie.poster}
        alt={`Poster of the movie - ${movie.title}`}
      />
      <h3>{movie.title}</h3>
      <div className={styles.optionsWrapper}>
        <button onClick={open} className={styles.btnOpen}>
          <img src={openIcon} alt="Open icon" className={styles.optionBtn} />
        </button>
        <button onClick={remove} className={styles.btnRemove}>
          <img
            src={removeIcon}
            alt="Remove icon"
            className={styles.optionBtn}
          />
        </button>
      </div>
    </li>
  </>
);

export default FavMovie;
