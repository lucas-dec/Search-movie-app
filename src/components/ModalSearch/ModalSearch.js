import React from "react";
import styled from "./ModalSearch.module.scss";
import Logo from "../../assets/logo.png";
import FormSearch from "../FormSearch/FormSearch";

const modalSearch = ({ searchMovie }) => (
  <div className={styled.modalBox}>
    <img className={styled.fullLogo} src={Logo} alt="Logo Search Movie" />
    <FormSearch searchMovie={searchMovie} />
  </div>
);

export default modalSearch;
