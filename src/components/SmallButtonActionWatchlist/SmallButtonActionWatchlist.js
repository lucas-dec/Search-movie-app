import React from "react";
import styles from "./SmallButtonActionWatchlist.module.scss";
import IconAddToWatchlist from "../../assets/icons/addToWatchlist.svg";
import IconRemoveFromWatchlist from "../../assets/icons/removeFromWatchlist.svg";
import { staticData } from "../../staticData";

const SmallButtonActionWatchlist = ({ handleAction, typeAction }) => (
  <button onClick={handleAction} className={styles.smallBtnActionWatchlist}>
    {typeAction === staticData.actionType.ADD ? 
    <img src={IconAddToWatchlist} alt="Button add movie to watchlist" /> :
    <img src={IconRemoveFromWatchlist} alt="Button remove movie from watchlist"/>}
  </button>
);

export default SmallButtonActionWatchlist;
