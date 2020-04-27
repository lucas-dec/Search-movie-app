import React, { Component } from "react";
import styles from "./ModalFetchMovies.module.scss";
import { staticData } from "../../staticData";
import Loading from "../Loading/Loading";
import HeaderFetchMovies from "../HeaderFetchMovies/HeaderFetchMovies";
import DisplayErrorMessage from "../DisplayErrorMessage/DisplayErrorMessage";
import MoviesList from "../MoviesList/MoviesList";

class ModalFetchMovies extends Component {
  state = {
    isLoading: false,
    movies: [],
    error: null,
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    const apiKey = staticData.apiKey;
    const searchMovie = this.props.search;
    const API = `https://www.omdbapi.com/?s=${searchMovie}&apikey=${apiKey}`;

    fetch(API)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        if (data.Response === "True") {
          this.setState({
            isLoading: false,
            movies: data.Search,
          });
        } else {
          throw Error(data.Error);
        }
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          error: error.message,
        });
      });
  }

  render() {
    const { isLoading, error, movies } = this.state;
    const { search } = this.props;

    return (
      <div className={styles.modalFetchMovies}>
        <HeaderFetchMovies search={search} />

        {isLoading && <Loading />}
        {error && <DisplayErrorMessage error={error} />}
        {!isLoading && !error && <MoviesList movies={movies} />}
      </div>
    );
  }
}

export default ModalFetchMovies;
