import React from "react";
import styles from "./CloseModalButton.module.scss";
import IconClose from "../../assets/icons/close.svg";

const CloseModalButton = ({ closeModal }) => (
  <button onClick={closeModal} className={styles.btnClose}>
    <img src={IconClose} alt="Button close details modal" />
  </button>
);

export default CloseModalButton;
