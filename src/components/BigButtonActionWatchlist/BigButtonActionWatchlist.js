import React from "react";
import styles from "./BigButtonActionWatchlist.module.scss";
import IconAddToWatchlist from "../../assets/icons/addToWatchlist.svg";
import IconRemoveFromWatchlist from "../../assets/icons/removeFromWatchlist.svg";

const BigButtonActionWatchlist = ({ click, typeAction }) => (
  <>
    {typeAction === "add" && (
      <button
        onClick={click}
        className={[styles.bigBtnWatchlist, styles.addToWatchlist].join(" ")}
      >
        <img src={IconAddToWatchlist} alt="Button add movie to watchlist" />
        Add this movie to My Watchlist !
      </button>
    )}
    {typeAction === "remove" && (
      <button
        onClick={click}
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
