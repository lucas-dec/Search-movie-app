import React from "react";
import AppContext from "../../AppContext";
import styles from "./OptionsWatchlist.module.scss";
import openIcon from "../../assets/icons/open.svg";
import removeIcon from "../../assets/icons/removeFromWatchlist.svg";

const OptionsWatchlist = ({ movieID }) => (
  <AppContext.Consumer>
    {(context) => (
      <div className={styles.optionsWrapper}>
        <button
          onClick={() => context.handleOpenDetailsModal(movieID)}
          className={styles.btnOpen}
        >
          <img src={openIcon} alt="Open icon" className={styles.optionBtn} />
        </button>
        <button
          onClick={() => context.handleAction("remove", movieID)}
          className={styles.btnRemove}
        >
          <img
            src={removeIcon}
            alt="Remove icon"
            className={styles.optionBtn}
          />
        </button>
      </div>
    )}
  </AppContext.Consumer>
);

export default OptionsWatchlist;
