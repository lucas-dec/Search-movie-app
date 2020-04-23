import React from "react";
import styles from "./FavMovie.module.scss";
import PosterDetailsMovie from "../PosterDetailsMovie/PosterDetailsMovie";
import OptionsWatchlist from "../OptionsWatchlist/OptionsWatchlist";

const FavMovie = ({ poster, title, open, remove }) => (
  <>
    <li className={styles.favMovie}>
      <PosterDetailsMovie poster={poster} title={title} />
      <h3>{title}</h3>
      <OptionsWatchlist openMovie={open} removeMovie={remove} />
    </li>
  </>
);

export default FavMovie;
