import React from "react";
import styles from "./SmallButtonActionWatchlist.module.scss";
import IconAddToWatchlist from "../../assets/icons/addToWatchlist.svg";
import IconRemoveFromWatchlist from "../../assets/icons/removeFromWatchlist.svg";

const SmallButtonActionWatchlist = ({ click, typeAction }) => (
  <button onClick={click} className={styles.smallBtnActionWatchlist}>
    {typeAction === "add" && (
      <img src={IconAddToWatchlist} alt="Button add movie to watchlist" />
    )}
    {typeAction === "remove" && (
      <img
        src={IconRemoveFromWatchlist}
        alt="Button remove movie from watchlist"
      />
    )}
  </button>
);

export default SmallButtonActionWatchlist;
