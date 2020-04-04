import React from "react";
import styled from "./SmallButtonActionWatchlist.module.scss";
import IconAddToWatchlist from "../../assets/icons/addToWatchlist.svg";
import IconRemoveFromWatchlist from "../../assets/icons/removeFromWatchlist.svg";

const SmallButtonActionWatchlist = ({ ...props }) => (
  <button className={styled.smallBtnActionWatchlist}>
    {props.actionAdd && (
      <img src={IconAddToWatchlist} alt="Button add movie to watchlist" />
    )}
    {props.actionRemove && (
      <img
        src={IconRemoveFromWatchlist}
        alt="Button remove movie from watchlist"
      />
    )}
  </button>
);

export default SmallButtonActionWatchlist;
