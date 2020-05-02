import React, { Component } from "react";
import AppContext from "../../AppContext";
import styles from "./ModalDetailsMovie.module.scss";
import { staticData } from "../../staticData";
import { getData } from "../../utils/data/fetchData";
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
  };

  componentDidMount() {
    this.fetchMovie();
  }

  componentDidUpdate(prevProps, prevState) {
    const { actionType } = staticData;
    const { movieID, favMovies, reload, handleOffReload } = this.context;

    const isFavMovie = Object.values(favMovies)
      .flat()
      .find((movie) => movie.id === movieID);

    if (!!isFavMovie !== prevState.onWatchlist) {
      this.setState({
        onWatchlist: !prevState.onWatchlist,
        typeAction:
          prevState.typeAction === actionType.ADD
            ? actionType.REMOVE
            : actionType.ADD,
      });
    }
    if (reload) {
      handleOffReload();
      this.fetchMovie();
    }
  }

  fetchMovie = () => {
    const { apiKey, actionType } = staticData;
    this.setState({
      isLoading: true,
    });
    const { movieID, favMovies } = this.context;
    const API = `https://www.omdbapi.com/?i=${movieID}&apikey=${apiKey}`;

    getData(API)
      .then((data) => {
        this.setState({
          isLoading: false,
          movie: { ...data },
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          error: error.message,
        });
      });

    const isFavMovie = Object.values(favMovies)
      .flat()
      .find((movie) => movie.id === movieID);

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

  render() {
    const { movieID, message } = this.context;
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
    const { isLoading, error, typeAction } = this.state;
    return (
      <>
        <div className={styles.fullContainer}>
          <div className={styles.modalWrapper}>
            {isLoading && <Loading />}
            {error && <DisplayErrorMessage error={error} />}
            <CloseModalButton />

            {!isLoading && !error && (
              <>
                <SmallButtonActionWatchlist
                  typeAction={typeAction}
                  movieID={movieID}
                  title={title}
                  poster={poster}
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

                <PosterDetailsMovie poster={poster} title={title} />

                <PlotDetailsMovie plot={plot} />

                {actors ? (
                  <ActorsList actors={actors} />
                ) : (
                  <h4>Sorry, we don't have information about actors ...</h4>
                )}

                <AwardsDetailsMovie awards={awards} />

                <BigButtonActionWatchlist
                  typeAction={typeAction}
                  movieID={movieID}
                  title={title}
                  poster={poster}
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
