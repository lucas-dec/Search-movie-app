import React from "react";
import AppContext from "../../AppContext";
import styles from "./SmallButtonActionWatchlist.module.scss";
import IconAddToWatchlist from "../../assets/icons/addToWatchlist.svg";
import IconRemoveFromWatchlist from "../../assets/icons/removeFromWatchlist.svg";
import { staticData } from "../../staticData";

const SmallButtonActionWatchlist = ({ typeAction, movieID, title, poster }) => (
  <AppContext.Consumer>
    {(context) => (
      <button
        onClick={() => context.handleAction(typeAction, movieID, title, poster)}
        className={styles.smallBtnActionWatchlist}
      >
        {typeAction === staticData.actionType.ADD ? (
          <img src={IconAddToWatchlist} alt="Button add movie to watchlist" />
        ) : (
          <img
            src={IconRemoveFromWatchlist}
            alt="Button remove movie from watchlist"
          />
        )}
      </button>
    )}
  </AppContext.Consumer>
);

export default SmallButtonActionWatchlist;
