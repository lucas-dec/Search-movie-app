import React, { Component } from "react";
import styles from "./ModalFetchMovies.module.scss";
import MoviesList from "../MoviesList/MoviesList";
import IconBack from "../../assets/icons/back.svg";
import Loading from "../Loading/Loading";

class ModalFetchMovies extends Component {
  state = {
    isLoading: true,
    movies: [],
    error: null,
  };

  componentDidMount() {
    const apiKey = "879b3e71";
    const searchMovie = this.props.search;
    const API = `https://www.omdbapi.com/?s=${searchMovie}&apikey=${apiKey}`;

    fetch(API)
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            const error = new Error(
              `Error ${response.status} ${response.statusText}. Please try agine ...`
            );
            error.response = response;
            throw error;
          }
        },

        (error) => {
          const errMessage = new Error(
            `${error.message}. Please check your network connection and try agine later.`
          );
          throw errMessage;
        }
      )
      .then((response) => response.json())
      .then((response) => {
        if (response.Response === "True") {
          this.setState({
            isLoading: false,
            movies: response.Search,
          });
        } else {
          const errMessage = new Error(response.Error);
          throw errMessage;
        }
      })
      .catch((error) =>
        this.setState({
          isLoading: false,
          error: error.message,
        })
      );
  }

  render() {
    return (
      <div className={styles.modalFetchMovies}>
        <div className={styles.header}>
          <button
            onClick={this.props.closeListMovie}
            className={styles.btnBack}
          >
            <img src={IconBack} alt="Go back" />
            <div className={styles.btnLabel}>go back</div>
          </button>
          <h1 className={styles.label}>{this.props.search}</h1>
        </div>
        {this.state.isLoading && <Loading />}
        {this.state.error && <h3>{this.state.error}</h3>}
        {!this.state.isLoading && !this.state.error && (
          <MoviesList movies={this.state.movies} />
        )}
      </div>
    );
  }
}

export default ModalFetchMovies;
