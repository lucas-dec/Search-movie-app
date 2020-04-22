import React from "react";
import styles from "./DisplayErrorMessage.module.scss";

const DisplayErrorMessage = ({ error }) => (
  <div className={styles.errorMessage}>
    <h3>Sorry, We have a problem.</h3>
    <h4>{error}</h4>
    <h4>Please try agine ...</h4>
  </div>
);

export default DisplayErrorMessage;
