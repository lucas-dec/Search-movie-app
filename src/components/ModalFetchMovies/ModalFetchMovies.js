import React, { Component } from "react";
import styled from "./ModalFetchMovies.module.scss";

class ModalFetchMovies extends Component {
  state = {
    isloading: false,
    movies: []
  };

  render() {
    return (
      <div className={styled.modalFetchMovies}>
        <h1 className={styled.label}>{this.props.search}</h1>
      </div>
    );
  }
}

export default ModalFetchMovies;
