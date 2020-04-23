import React from "react";
import styles from "./OptionsWatchlist.module.scss";
import openIcon from "../../assets/icons/open.svg";
import removeIcon from "../../assets/icons/removeFromWatchlist.svg";

const OptionsWatchlist = ({ openMovie, removeMovie }) => (
  <div className={styles.optionsWrapper}>
    <button onClick={openMovie} className={styles.btnOpen}>
      <img src={openIcon} alt="Open icon" className={styles.optionBtn} />
    </button>
    <button onClick={removeMovie} className={styles.btnRemove}>
      <img src={removeIcon} alt="Remove icon" className={styles.optionBtn} />
    </button>
  </div>
);

export default OptionsWatchlist;
