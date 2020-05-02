import React from "react";
import styles from "./ButtonOpenWatchlist.module.scss";
import IconWatchlist from "../../assets/icons/watchlist.svg";

const ButtonOpenWatchlist = ({ openWatchlist, active }) => (
  <button
    onClick={openWatchlist}
    className={[styles.btnOpenWatchlist, active && styles.active].join(" ")}
  >
    <img src={IconWatchlist} alt="Icon watchlist" />
  </button>
);

export default ButtonOpenWatchlist;
