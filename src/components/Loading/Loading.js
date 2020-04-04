import React from "react";
import styles from "./Loading.module.scss";
import Logo from "../../assets/single-logo.png";

const Loading = () => (
  <div className={styles.loadingWrapper}>
    <img src={Logo} alt="Logo" />
  </div>
);

export default Loading;
