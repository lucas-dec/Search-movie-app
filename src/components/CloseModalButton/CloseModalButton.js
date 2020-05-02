import React from "react";
import AppContext from "../../AppContext";
import styles from "./CloseModalButton.module.scss";
import IconClose from "../../assets/icons/close.svg";

const CloseModalButton = () => (
  <AppContext.Consumer>
    {(context) => (
      <button
        onClick={context.handleCloseDetailsModal}
        className={styles.btnClose}
      >
        <img src={IconClose} alt="Button close details modal" />
      </button>
    )}
  </AppContext.Consumer>
);

export default CloseModalButton;
