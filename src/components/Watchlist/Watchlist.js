import React, { Component } from "react";
import WatchlistContext from "../../watchlist-contex";
import styles from "./Watchlist.module.scss";
import IconWatchlist from "../../assets/icons/watchlist.svg";
import FavMovie from "../FavMovie/FavMovie";

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
      <FavMovie key={movie.id} movie={movie} />
    ));
    return (
      <>
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
