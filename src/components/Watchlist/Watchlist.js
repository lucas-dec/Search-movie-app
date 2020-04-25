import React, { Component } from "react";
import AppContext from "../../AppContext";
import styles from "./Watchlist.module.scss";
import ButtonOpenWatchlist from "../ButtonOpenWatchlist/ButtonOpenWatchlist";
import FavMovie from "../FavMovie/FavMovie";
import FavMovieList from "../FavMovieList/FavMovieList";

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
    const { active } = this.state;
    const favMovies = this.context.favMovies;
    const watchlist = favMovies.map((movie) => (
      <FavMovie
        key={movie.id}
        open={() => this.context.handleOpenDetailsModal(movie.id)}
        remove={() => this.context.action("remove", movie.id)}
        title={movie.title}
        poster={movie.poster}
      />
    ));

    const watchlistClassName = [
      styles.watchlistContainer,
      active && styles.slideIn,
    ].join(" ");

    return (
      <>
        <div className={watchlistClassName}>
          <ButtonOpenWatchlist
            openWatchlist={this.handleOpenWatchlist}
            active={active}
          />
          <h1>Watchlist</h1>

          {watchlist.length > 0 ? (
            <FavMovieList watchlist={watchlist} />
          ) : (
            <h5 className={styles.emptyList}>Watchlist is empty</h5>
          )}
        </div>
      </>
    );
  }
}
Watchlist.contextType = AppContext;
export default Watchlist;
