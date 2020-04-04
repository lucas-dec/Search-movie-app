import React from "react";
import styles from "./ModalSearch.module.scss";
import Logo from "../../assets/logo.png";
import FormSearch from "../FormSearch/FormSearch";

const modalSearch = ({ searchMovie }) => (
  <div className={styles.modalBox}>
    <img className={styles.fullLogo} src={Logo} alt="Logo Search Movie" />
    <FormSearch searchMovie={searchMovie} />
  </div>
);

export default modalSearch;
