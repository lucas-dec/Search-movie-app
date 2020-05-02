import React from "react";
import styles from "./FavMovieList.module.scss";

const FavMovieList = ({ watchlist }) => (
  <div className={styles.watchlist}>
    <ul className={styles.listMovieWrapper}>{watchlist}</ul>
  </div>
);

export default FavMovieList;
