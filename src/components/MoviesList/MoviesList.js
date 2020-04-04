import React, { Component } from "react";
import styles from "./MoviesList.module.scss";
import defaultPoster from "../../assets/single-logo.png";
import ModalDetailsMovie from "../ModalDetailsMovie/ModalDetailsMovie";

class MoviesList extends Component {
  state = {
    openDetailsModal: false,
    openMovieID: "",
  };

  handleOpenDetailsModal = (id) => {
    this.setState({
      openDetailsModal: true,
      openMovieID: id,
    });
  };

  handleCloseDetailsModal = () => {
    this.setState({
      openDetailsModal: false,
      openMovieID: "",
    });
  };

  render() {
    const { movies } = this.props;
    const movie = movies.map((movie) => (
      <li
        onClick={() => this.handleOpenDetailsModal(movie.imdbID)}
        key={movie.imdbID}
        className={styles.movieWrapper}
      >
        <div className={styles.label}>
          <h3 className={styles.title}>{movie.Title}</h3>
          <span className={styles.yearInfo}>({movie.Year})</span>
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
          <ModalDetailsMovie
            movieID={this.state.openMovieID}
            closeModal={this.handleCloseDetailsModal}
          />
        )}
        <ul className={styles.moviesListWrapper}>{movie}</ul>
      </>
    );
  }
}

export default MoviesList;
