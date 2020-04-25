import React from "react";
import AppContext from "../../AppContext";
import styles from "./BigButtonActionWatchlist.module.scss";
import { staticData } from "../../staticData";
import IconAddToWatchlist from "../../assets/icons/addToWatchlist.svg";
import IconRemoveFromWatchlist from "../../assets/icons/removeFromWatchlist.svg";

const BigButtonActionWatchlist = ({ typeAction, movieID, title, poster }) => (
  <AppContext.Consumer>
    {(context) => {
      const { actionType } = staticData;
      let addClass, removeClass;
      if (typeAction === actionType.ADD) {
        addClass = [styles.bigBtnWatchlist, styles.addToWatchlist].join(" ");
      } else {
        removeClass = [styles.bigBtnWatchlist, styles.removeFromWatchlist].join(
          " "
        );
      }

      return (
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
      );
    }}
  </AppContext.Consumer>
);

export default BigButtonActionWatchlist;
