import React, { Component } from "react";
import WatchlistContext from "./watchlist-contex";
import "./index.scss";
import ModalSearch from "./components/ModalSearch/ModalSearch";
import ModalFetchMovies from "./components/ModalFetchMovies/ModalFetchMovies";
import Watchlist from "./components/Watchlist/Watchlist";

class App extends Component {
  state = {
    modalSearch: false,
    searchValue: "",
    modalFetchMovies: false,
    openDetailsModal: false,
    openMovieID: null,
    reload: false,
    favMovies: [],
    message: "",
  };

  componentDidMount() {
    this.setState({
      modalSearch: true,
    });
  }

  handleSearchMovie = (value) => {
    this.setState({
      modalSearch: false,
      searchValue: value,
      modalFetchMovies: true,
    });
  };

  handleCloseListMovie = () => {
    this.setState({
      modalSearch: true,
      modalFetchMovies: false,
    });
  };

  handleOpenDetailsModal = (id) => {
    if (this.state.openDetailsModal) {
      this.setState({
        openDetailsModal: true,
        openMovieID: id,
        reload: true,
      });
    } else
      this.setState({
        openDetailsModal: true,
        openMovieID: id,
      });
  };

  handleCloseDetailsModal = () => {
    this.setState({
      openDetailsModal: false,
      openMovieID: "",
      message: "",
    });
  };

  handleOffReload = () => {
    this.setState({
      reload: false,
    });
  };

  handleActionWatchlist = (type, id, title, poster) => {
    if (type === "add")
      this.setState((prevState) => ({
        favMovies: [
          ...prevState.favMovies,
          {
            id,
            title,
            poster,
          },
        ],
        message: "Movie was added to Your Watchlist",
      }));
    else if (type === "remove") {
      const favMovies = this.state.favMovies.filter((movie) => movie.id !== id);
      this.setState({
        favMovies,
        message: "Movie was removed from Your Watchlist",
      });
    }
  };

  render() {
    const contextElements = {
      openDetailsModal: this.state.openDetailsModal,
      openMovieID: this.state.openMovieID,
      handleOpenDetailsModal: this.handleOpenDetailsModal,
      handleCloseDetailsModal: this.handleCloseDetailsModal,
      reload: this.state.reload,
      handleOffReload: this.handleOffReload,
      favMovies: [...this.state.favMovies],
      message: this.state.message,
      action: this.handleActionWatchlist,
    };

    return (
      <WatchlistContext.Provider value={contextElements}>
        {this.state.modalSearch && (
          <ModalSearch searchMovie={this.handleSearchMovie} />
        )}
        {this.state.modalFetchMovies && (
          <ModalFetchMovies
            closeListMovie={this.handleCloseListMovie}
            search={this.state.searchValue}
          />
        )}
        <Watchlist />
      </WatchlistContext.Provider>
    );
  }
}

export default App;
