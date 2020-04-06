import React, { Component } from "react";
import styles from "./Watchlist.module.scss";
import IconWatchlist from "../../assets/icons/watchlist.svg";

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
    // const favMovies = this.state.userWatchlist.map((movie, index) => (
    //   <li key={index}>{movie}</li>
    // ));
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
            <ul className={styles.listMovieWrapper}>
              <li>Rambo</li>
              <li>Rambo 2</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Watchlist;
