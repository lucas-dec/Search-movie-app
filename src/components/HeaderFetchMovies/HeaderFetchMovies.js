import React from "react";
import AppContext from "../../AppContext";
import styles from "./HeaderFetchMovies.module.scss";
import IconBack from "../../assets/icons/back.svg";

const HeaderFetchMovies = ({ search }) => (
  <AppContext.Consumer>
    {(context) => (
      <div className={styles.header}>
        <button
          onClick={context.handleCloseListMovie}
          className={styles.btnBack}
        >
          <img src={IconBack} alt="Go back" />
          <div className={styles.btnLabel}>go back</div>
        </button>
        <h1 className={styles.label}>{search}</h1>
      </div>
    )}
  </AppContext.Consumer>
);

export default HeaderFetchMovies;
