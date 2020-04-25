import React from "react";
import AppContext from "../../AppContext";
import styles from "./MoviesList.module.scss";
import defaultPoster from "../../assets/single-logo.png";

const MoviesList = ({ movies }) => (
  <AppContext.Consumer>
    {(context) => {
      const movie = movies.map((movie) => (
        <li
          onClick={() => context.handleOpenDetailsModal(movie.imdbID)}
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
    }}
  </AppContext.Consumer>
);

export default MoviesList;
