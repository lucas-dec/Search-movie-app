import React, { Component } from "react";
import WatchlistContext from "../../watchlist-contex";
import styles from "./Watchlist.module.scss";
import IconWatchlist from "../../assets/icons/watchlist.svg";
import FavMovie from "../FavMovie/FavMovie";
import ModalDetailsMovie from "../ModalDetailsMovie/ModalDetailsMovie";

class Watchlist extends Component {
  state = {
    active: false,
  };

  handleOpenWatchlist = () => {
    this.setState((prevState) => ({
      active: !prevState.active,
    }));
  };

  render() {
    const favMovies = this.context.favMovies;
    const watchlist = favMovies.map((movie) => (
      <FavMovie
        key={movie.id}
        open={() => this.context.handleOpenDetailsModal(movie.id)}
        remove={() => this.context.action("remove", movie.id)}
        movie={movie}
      />
    ));
    return (
      <>
        {this.state.openDetailsModal && (
          <ModalDetailsMovie
            movieID={this.state.openMovieID}
            closeModal={this.context.handleCloseDetailsModal}
          />
        )}
        <div
          className={[
            styles.watchlistContainer,
            this.state.active && styles.slideIn,
          ].join(" ")}
        >
          <button
            onClick={this.handleOpenWatchlist}
            className={[
              styles.btnOpenWatchlist,
              this.state.active && styles.active,
            ].join(" ")}
          >
            <img src={IconWatchlist} alt="Icon watchlist" />
          </button>
          <div className={styles.watchlist}>
            <h1>Watchlist</h1>
            <ul className={styles.listMovieWrapper}>{watchlist}</ul>
          </div>
        </div>
      </>
    );
  }
}
Watchlist.contextType = WatchlistContext;
export default Watchlist;
