import React, { Component } from "react";
import styled from "./MoviesList.module.scss";
import defaultPoster from "../../assets/single-logo.png";
import ModalDetailsMovie from "../ModalDetailsMovie/ModalDetailsMovie";

class MoviesList extends Component {
  state = {
    openDetailsModal: false
  };

  handleOpenDetailsModal = () => {
    this.setState({
      openDetailsModal: true
    });
  };

  handleCloseDetailsModal = () => {
    this.setState({
      openDetailsModal: false
    });
  };

  render() {
    const { movies } = this.props;
    const movie = movies.map(movie => (
      <li
        onClick={this.handleOpenDetailsModal}
        key={movie.imdbID}
        className={styled.movieWrapper}
      >
        <div className={styled.label}>
          <h3 className={styled.title}>{movie.Title}</h3>
          <span className={styled.yearInfo}>({movie.Year})</span>
        </div>
        <img
          src={movie.Poster === "N/A" ? defaultPoster : movie.Poster}
          alt="Poster of movie"
        />
      </li>
    ));
    return (
      <>
        {this.state.openDetailsModal && (
          <ModalDetailsMovie closeModal={this.handleCloseDetailsModal} />
        )}
        <ul className={styled.moviesListWrapper}>{movie}</ul>
      </>
    );
  }
}

export default MoviesList;
