import React, { Component } from "react";
import AppContext from "../../AppContext";
import styles from "./MoviesList.module.scss";
import defaultPoster from "../../assets/single-logo.png";

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
        <ul className={styles.moviesListWrapper}>{movie}</ul>
      </>
    );
  }
}

MoviesList.contextType = AppContext;
export default MoviesList;
