import React, { Component } from "react";
import styles from "./ModalFetchMovies.module.scss";
import { staticData } from "../../staticData";
import MoviesList from "../MoviesList/MoviesList";
import IconBack from "../../assets/icons/back.svg";
import Loading from "../Loading/Loading";

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
        if (response.ok) {
          return response;
        } else {
          throw Error(`Error ${response.status} ${response.statusText}.`);
        }
      })
      .then((response) => response.json())
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
        const err = `Sorry, We have a problem. ${error.message}. Please try agine ...`;
        return this.setState({
          isLoading: false,
          error: err,
        });
      });
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
