import React, { Component } from "react";
import AppContext from "../../app-context";
import styles from "./ModalDetailsMovie.module.scss";
import SmallButtonActionWatchlist from "../SmallButtonActionWatchlist/SmallButtonActionWatchlist";
import IconClose from "../../assets/icons/close.svg";
import RatingIcon from "../../assets/icons/rating.svg";
import defaultPoster from "../../assets/single-logo.png";
import BigButtonActionWatchlist from "../BigButtonActionWatchlist/BigButtonActionWatchlist";
import Loading from "../Loading/Loading";

class ModalDetailsMovie extends Component {
  state = {
    isLoading: true,
    error: null,
    movie: {},
    onWatchlist: false,
    typeAction: "add",
    message: "",
  };

  componentDidMount() {
    this.fetchMovie();
  }

  componentDidUpdate(prevProps, prevState) {
    const isFavMovie = Object.values(this.context.favMovies)
      .flat()
      .find((movie) => movie.id === this.props.movieID);

    if (!!isFavMovie !== prevState.onWatchlist) {
      let tempTypeAction;
      if (prevState.typeAction === "add") tempTypeAction = "remove";
      else if (prevState.typeAction === "remove") tempTypeAction = "add";
      this.setState({
        onWatchlist: !prevState.onWatchlist,
        typeAction: tempTypeAction,
        message: this.context.message,
      });
    }
    if (this.context.reload) {
      this.context.handleOffReload();
      this.fetchMovie();
    }
  }

  fetchMovie = () => {
    const apiKey = "879b3e71";
    const movieID = this.props.movieID;
    const API = `https://www.omdbapi.com/?i=${movieID}&apikey=${apiKey}`;

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
            movie: { ...response },
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

    const isFavMovie = Object.values(this.context.favMovies)
      .flat()
      .find((movie) => movie.id === this.props.movieID);

    if (!!isFavMovie)
      this.setState({ onWatchlist: true, typeAction: "remove" });
    else if (!isFavMovie)
      this.setState({ onWatchlist: false, typeAction: "add" });
  };

  render() {
    const { closeModal, movieID } = this.props;
    const {
      Title,
      Year,
      Runtime,
      Genre,
      Actors,
      Plot,
      Awards,
      Poster,
      imdbRating,
      imdbVotes,
    } = this.state.movie;

    let listActors;
    if (Actors) {
      listActors = Actors.split(",").map((actor, index) => (
        <li key={index}>{actor}</li>
      ));
    }

    return (
      <>
        <div className={styles.fullContainer}>
          <div className={styles.modalWrapper}>
            {this.state.isLoading && <Loading />}
            {this.state.error && <h3>{this.state.error}</h3>}

            {!this.state.isLoading && !this.state.error && (
              <>
                {
                  <SmallButtonActionWatchlist
                    click={() =>
                      this.context.action(
                        this.state.typeAction,
                        this.props.movieID,
                        Title,
                        Poster
                      )
                    }
                    typeAction={this.state.typeAction}
                  />
                }
                <button onClick={closeModal} className={styles.btnClose}>
                  <img src={IconClose} alt="Button close details modal" />
                </button>
                {this.state.message && this.state.typeAction === "add" && (
                  <h5 className={[styles.notification, styles.add].join(" ")}>
                    {this.state.message}
                  </h5>
                )}
                {this.state.message && this.state.typeAction === "remove" && (
                  <h5
                    className={[styles.notification, styles.remove].join(" ")}
                  >
                    {this.state.message}
                  </h5>
                )}
                <div className={styles.header}>
                  <div className={styles.label}>
                    <h2 className={styles.title}>{Title}</h2>
                    <span className={styles.year}>{Year}</span>
                  </div>
                  <div className={styles.rate}>
                    <img
                      src={RatingIcon}
                      className={styles.star}
                      alt="Star - rating icon"
                    />
                    <div className={styles.rating}>
                      <p className={styles.score}>{imdbRating}</p>
                      <p className={styles.votes}>
                        {imdbVotes} <span>(votes)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.info}>
                  <span>{Runtime}</span> | <span>{Genre}</span>
                </div>
                <img
                  src={Poster === "N/A" ? defaultPoster : Poster}
                  alt="Poster of the Movie"
                  className={styles.poster}
                />
                <p className={styles.about}>{Plot}</p>
                <h3>Stars:</h3>
                <ul className={styles.actors}>{listActors}</ul>
                <h3>Awards:</h3>
                <p className={styles.awards}>{Awards}</p>
                {
                  <BigButtonActionWatchlist
                    click={() =>
                      this.context.action(
                        this.state.typeAction,
                        movieID,
                        Title,
                        Poster
                      )
                    }
                    typeAction={this.state.typeAction}
                  />
                }
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

ModalDetailsMovie.contextType = AppContext;
export default ModalDetailsMovie;
