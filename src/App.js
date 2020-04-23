import React, { Component } from "react";
import AppContext from "./app-context";
import "./index.scss";
import { staticData } from "./staticData";
import ModalSearch from "./components/ModalSearch/ModalSearch";
import ModalFetchMovies from "./components/ModalFetchMovies/ModalFetchMovies";
import ModalDetailsMovie from "./components/ModalDetailsMovie/ModalDetailsMovie";

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
    const favMovies = JSON.parse(localStorage.getItem("favMovies")) || [];
    this.setState({
      modalSearch: true,
      favMovies,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.favMovies !== this.state.favMovies) {
      localStorage.setItem("favMovies", JSON.stringify(this.state.favMovies));
    }
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
    if (type === staticData.actionType.ADD)
      this.setState((prevState) => ({
        favMovies: [
          ...prevState.favMovies,
          {
            id,
            title,
            poster,
          },
        ],
        message: staticData.messages.ADD_MESSAGE,
      }));
    else if (type === staticData.actionType.REMOVE) {
      const favMovies = this.state.favMovies.filter((movie) => movie.id !== id);
      this.setState({
        favMovies,
        message: staticData.messages.REMOVE_MESSAGE,
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

    const {
      modalSearch,
      modalFetchMovies,
      openDetailsModal,
      searchValue,
      openMovieID,
    } = this.state;

    return (
      <AppContext.Provider value={contextElements}>
        {modalSearch && <ModalSearch searchMovie={this.handleSearchMovie} />}
        {modalFetchMovies && (
          <ModalFetchMovies
            closeListMovie={this.handleCloseListMovie}
            search={searchValue}
          />
        )}
        {openDetailsModal && (
          <ModalDetailsMovie
            movieID={openMovieID}
            closeModal={() => this.handleCloseDetailsModal()}
          />
        )}
        <Watchlist />
      </AppContext.Provider>
    );
  }
}

export default App;
