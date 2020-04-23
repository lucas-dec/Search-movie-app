import React, { Component } from "react";
import AppContext from "../../app-context";

import { AppProvider } from "./app-context";
import "./index.scss";
import ModalSearch from "./components/ModalSearch/ModalSearch";
import ModalFetchMovies from "./components/ModalFetchMovies/ModalFetchMovies";
import ModalDetailsMovie from "./components/ModalDetailsMovie/ModalDetailsMovie";

import Watchlist from "./components/Watchlist/Watchlist";

class App extends Component {
  state = {
    searchValue: "",
  };

  handleSearchMovie = (value) => {
    this.setState({
      searchValue: value,
      modalFetchMovies: true,
    });
  };

  render() {
    const {
      modalSearch,
      modalFetchMovies,
      openDetailsModal,
      searchValue,
      openMovieID,
    } = this.state;

    return (
      <AppProvider>
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
      </AppProvider>
    );
  }
}
App.contextType = AppContext;
export default App;
