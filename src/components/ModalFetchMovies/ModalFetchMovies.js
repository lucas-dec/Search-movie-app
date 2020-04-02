import React, { Component } from "react";
import styled from "./ModalFetchMovies.module.scss";
import MoviesList from "../MoviesList/MoviesList";

class ModalFetchMovies extends Component {
  state = {
    isloading: false,
    movies: [
      {
        Title: "Rambo",
        Year: "2008",
        imdbID: "tt0462499",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg"
      },
      {
        Title: "Rambo: First Blood Part II",
        Year: "1985",
        imdbID: "tt0089880",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZWFkY2I1ZDAtNmZhNS00NjVlLWJiMGQtMGQ1ZmM0ZDA5ODg5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        Title: "Rambo III",
        Year: "1988",
        imdbID: "tt0095956",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNGM5ZWZiODEtMTIyYy00ZDYyLWE0M2EtMTgzZDViY2EzNjU4XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"
      },
      {
        Title: "Rambo: Last Blood",
        Year: "2019",
        imdbID: "tt1206885",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNTAxZWM2OTgtOTQzOC00ZTI5LTgyYjktZTRhYWM4YWQxNWI0XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"
      },
      {
        Title: "Rambo",
        Year: "1986",
        imdbID: "tt0222619",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOTVmMjU2ODItODk2NS00ZWJkLTgwOTEtZTMzZDNjNzhhZjkzXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
      },
      {
        Title: "Rambo III",
        Year: "1989",
        imdbID: "tt0301766",
        Type: "game",
        Poster: "N/A"
      },
      {
        Title: "Rambo: First Blood Part II",
        Year: "1986",
        imdbID: "tt0301768",
        Type: "game",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNzRmM2EwYzAtZTMzNC00ZDg5LWE5YzktOWM5NTk4OGJhYWM4XkEyXkFqcGdeQXVyMjY3MjUzNDk@._V1_SX300.jpg"
      },
      {
        Title: "Rambo",
        Year: "2012",
        imdbID: "tt3107798",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDUwOGYwYWUtZjMzNi00MDIwLWE2NjgtYTdhODJmMTQwMGMyXkEyXkFqcGdeQXVyMzQzMDc2MDk@._V1_SX300.jpg"
      },
      {
        Title: "Rambo",
        Year: "1987",
        imdbID: "tt0301765",
        Type: "game",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYmMxZGVjYzYtNWY4ZC00ZjAwLWFjNWQtOWFjNGEzNDQ2ZDM3XkEyXkFqcGdeQXVyMTgwOTE5NDk@._V1_SX300.jpg"
      },
      {
        Title: "Rambo: The Video Game",
        Year: "2014",
        imdbID: "tt4291054",
        Type: "game",
        Poster: "N/A"
      }
    ]
  };

  componentDidMount() {
    const apiKey = "879b3e71";
    const searchMovie = this.props.search;
    const API = `http://www.omdbapi.com/?s=${searchMovie}&apikey=${apiKey}`;
  }

  render() {
    return (
      <div className={styled.modalFetchMovies}>
        <h1 className={styled.label}>{this.props.search}</h1>
        <MoviesList movies={this.state.movies} />
      </div>
    );
  }
}

export default ModalFetchMovies;
