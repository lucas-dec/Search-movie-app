import React from "react";
import styles from "./HeaderFetchMovies.module.scss";
import IconBack from "../../assets/icons/back.svg";

const HeaderFetchMovies = ({ goBack, search }) => (
  <div className={styles.header}>
    <button onClick={goBack} className={styles.btnBack}>
      <img src={IconBack} alt="Go back" />
      <div className={styles.btnLabel}>go back</div>
    </button>
    <h1 className={styles.label}>{search}</h1>
  </div>
);

export default HeaderFetchMovies;
