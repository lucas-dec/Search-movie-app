import React from "react";
import AppContext from "../../AppContext";
import styles from "./BigButtonActionWatchlist.module.scss";
import { staticData } from "../../staticData";
import IconAddToWatchlist from "../../assets/icons/addToWatchlist.svg";
import IconRemoveFromWatchlist from "../../assets/icons/removeFromWatchlist.svg";

const BigButtonActionWatchlist = ({ typeAction, movieID, title, poster }) => {
  const addClass = [styles.bigBtnWatchlist, styles.addToWatchlist].join(" ");
  const removeClass = [styles.bigBtnWatchlist, styles.removeFromWatchlist].join(" ");
  const { actionType } = staticData;
  return (
    <AppContext.Consumer>
      {(context) => (
        <>
          {typeAction === actionType.ADD ? (
            <button
              onClick={() =>
                context.handleAction(typeAction, movieID, title, poster)
              }
              className={addClass}
            >
              <img
                src={IconAddToWatchlist}
                alt="Button add movie to watchlist"
              />
              Add this movie to My Watchlist !
            </button>
          ) : (
            <button
              onClick={() =>
                context.handleAction(typeAction, movieID, title, poster)
              }
              className={removeClass}
            >
              <img
                src={IconRemoveFromWatchlist}
                alt="Button remove movie from watchlist"
              />
              Remove this movie from My Watchlist !
            </button>
          )}
        </>
      )}
    </AppContext.Consumer>
  );
};

export default BigButtonActionWatchlist;
