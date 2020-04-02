import React from "react";
import styled from "./MoviesList.module.scss";
import defaultPoster from "../../assets/single-logo.png";

const MoviesList = ({ movies }) => {
  const movie = movies.map(movie => (
    <li key={movie.imdbID} className={styled.movieWrapper}>
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
  return <ul className={styled.moviesListWrapper}>{movie}</ul>;
};

export default MoviesList;
