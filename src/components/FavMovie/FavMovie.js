import React from "react";
import styles from "./FavMovie.module.scss";
import PosterDetailsMovie from "../PosterDetailsMovie/PosterDetailsMovie";
import OptionsWatchlist from "../OptionsWatchlist/OptionsWatchlist";

const FavMovie = ({ poster, title, movieID }) => (
  <>
    <li className={styles.favMovie}>
      <PosterDetailsMovie poster={poster} title={title} />
      <h3>{title}</h3>
      <OptionsWatchlist movieID={movieID} />
    </li>
  </>
);

export default FavMovie;
