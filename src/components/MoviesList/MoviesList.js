import React, { Component } from "react";
import AppContext from "../../app-context";
import styles from "./MoviesList.module.scss";
import defaultPoster from "../../assets/single-logo.png";
import ModalDetailsMovie from "../ModalDetailsMovie/ModalDetailsMovie";

class MoviesList extends Component {
  render() {
    const { movies } = this.props;
    const movie = movies.map((movie) => (
      <li
        onClick={() => this.context.handleOpenDetailsModal(movie.imdbID)}
        key={movie.imdbID}
        className={styles.movieWrapper}
      >
        <div className={styles.label}>
          <h3 className={styles.title}>{movie.Title}</h3>
          <span className={styles.yearInfo}>({movie.Year})</span>
        </div>
        <img
          src={movie.Poster === "N/A" ? defaultPoster : movie.Poster}
          alt="Poster of the movie"
        />
      </li>
    ));
    return (
      <>
        {this.context.openDetailsModal && (
          <ModalDetailsMovie
            movieID={this.context.openMovieID}
            closeModal={() => this.context.handleCloseDetailsModal()}
          />
        )}
        <ul className={styles.moviesListWrapper}>{movie}</ul>
      </>
    );
  }
}

MoviesList.contextType = AppContext;
export default MoviesList;
