import React from "react";
import styled from "./BigButtonActionWatchlist.module.scss";
import IconAddToWatchlist from "../../assets/icons/addToWatchlist.svg";
import IconRemoveFromWatchlist from "../../assets/icons/removeFromWatchlist.svg";

const BigButtonActionWatchlist = ({ ...props }) => (
  <>
    {props.actionAdd && (
      <button className={styled.bigBtnWatchlist.addToWatchlist}>
        <img src={IconAddToWatchlist} alt="Button add movie to watchlist" />
        Add this movie to My Watchlist !
      </button>
    )}
    {props.actionRemove && (
      <button
        className={[styled.bigBtnWatchlist, styled.removeFromWatchlist].join(
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
