import React from "react";
import styles from "./BigButtonActionWatchlist.module.scss";
import IconAddToWatchlist from "../../assets/icons/addToWatchlist.svg";
import IconRemoveFromWatchlist from "../../assets/icons/removeFromWatchlist.svg";

const BigButtonActionWatchlist = ({ ...props }) => (
  <>
    {props.actionAdd && (
      <button className={styles.bigBtnWatchlist.addToWatchlist}>
        <img src={IconAddToWatchlist} alt="Button add movie to watchlist" />
        Add this movie to My Watchlist !
      </button>
    )}
    {props.actionRemove && (
      <button
        className={[styles.bigBtnWatchlist, styles.removeFromWatchlist].join(
          " "
        )}
      >
        <img
          src={IconRemoveFromWatchlist}
          alt="Button remove movie from watchlist"
        />
        Remove this movie from My Watchlist !
      </button>
    )}
  </>
);

export default BigButtonActionWatchlist;
