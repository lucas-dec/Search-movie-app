import React, { Component } from "react";
import AppContext from "../../app-context";
import styles from "./ModalDetailsMovie.module.scss";
import { staticData } from "../../staticData";
import Loading from "../Loading/Loading";
import DisplayErrorMessage from "../DisplayErrorMessage/DisplayErrorMessage";
import CloseModalButton from "../CloseModalButton/CloseModalButton";
import SmallButtonActionWatchlist from "../SmallButtonActionWatchlist/SmallButtonActionWatchlist";
import Notification from "../Notification/Notification";
import HeaderDetailsMovie from "../HeaderDetailsMovie/HeaderDetailsMovie";
import InfoDetailsMovie from "../InfoDetailsMovie/InfoDetailsMovie";
import PosterDetailsMovie from "../PosterDetailsMovie/PosterDetailsMovie";
import PlotDetailsMovie from "../PlotDetailsMovie/PlotDetailsMovie";
import ActorsList from "../ActorsList/ActorsList";
import AwardsDetailsMovie from "../AwardsDetailsMovie/AwardsDetailsMovie";
import BigButtonActionWatchlist from "../BigButtonActionWatchlist/BigButtonActionWatchlist";

class ModalDetailsMovie extends Component {
  state = {
    isLoading: false,
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
    const { actionType } = staticData;

    const isFavMovie = Object.values(this.context.favMovies)
      .flat()
      .find((movie) => movie.id === this.props.movieID);

    if (!!isFavMovie !== prevState.onWatchlist) {
      let tempTypeAction;
      if (prevState.typeAction === actionType.ADD)
        tempTypeAction = actionType.REMOVE;
      else tempTypeAction = actionType.ADD;
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
    const { apiKey, actionType } = staticData;
    this.setState({
      isLoading: true,
    });
    const movieID = this.props.movieID;
    const API = `https://www.omdbapi.com/?i=${movieID}&apikey=${apiKey}`;

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
            movie: { ...data },
          });
        } else {
          throw Error(data.Error);
        }
      })
      .catch((error) => {
        return this.setState({
          isLoading: false,
          error: error.message,
        });
      });

    const isFavMovie = Object.values(this.context.favMovies)
      .flat()
      .find((movie) => movie.id === this.props.movieID);

    if (!!isFavMovie) {
      this.setState({
        onWatchlist: true,
        typeAction: actionType.REMOVE,
      });
    } else {
      this.setState({
        onWatchlist: false,
        typeAction: actionType.ADD,
      });
    }
  };

  handleAction = (typeAction, movieID, title, poster) => {
    this.context.action(typeAction, movieID, title, poster);
  };

  render() {
    const { closeModal, movieID } = this.props;
    const {
      Title: title,
      Year: year,
      Runtime: runtime,
      Genre: genre,
      Actors: actors,
      Plot: plot,
      Awards: awards,
      Poster: poster,
      imdbRating,
      imdbVotes,
    } = this.state.movie;
    const { isLoading, error, typeAction, message } = this.state;

    return (
      <>
        <div className={styles.fullContainer}>
          <div className={styles.modalWrapper}>
            {isLoading && <Loading />}
            {error && <DisplayErrorMessage error={error} />}
            <CloseModalButton closeModal={closeModal} />

            {!isLoading && !error && (
              <>
                <SmallButtonActionWatchlist
                  handleAction={() =>
                    this.handleAction(typeAction, movieID, title, poster)
                  }
                  typeAction={typeAction}
                />

                {message && (
                  <Notification message={message} typeAction={typeAction} />
                )}

                <HeaderDetailsMovie
                  title={title}
                  year={year}
                  imdbRating={imdbRating}
                  imdbVotes={imdbVotes}
                />

                <InfoDetailsMovie runtime={runtime} genre={genre} />

                <PosterDetailsMovie poster={poster} />

                <PlotDetailsMovie plot={plot} />

                {actors ? (
                  <ActorsList actors={actors} />
                ) : (
                  <h4>Sorry, we don't have information about actors ...</h4>
                )}

                <AwardsDetailsMovie awards={awards} />

                <BigButtonActionWatchlist
                  handleAction={() =>
                    this.handleAction(typeAction, movieID, title, poster)
                  }
                  typeAction={typeAction}
                />
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
