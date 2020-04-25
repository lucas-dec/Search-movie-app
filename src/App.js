import React, { Component } from "react";
import AppContext from "./AppContext";
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
    });
    this.context.handleModalSearch(false);
    this.context.handleModalFetchMovies(true);
  };

  render() {
    return (
      <>
        {this.context.modalSearch && (
          <ModalSearch searchMovie={this.handleSearchMovie} />
        )}
        {this.context.modalFetchMovies && (
          <ModalFetchMovies search={this.state.searchValue} />
        )}
        {this.context.modalDetails && (
          <ModalDetailsMovie
            closeModal={() => this.handleCloseDetailsModal()}
          />
        )}
        <Watchlist />
      </>
    );
  }
}

App.contextType = AppContext;
export default App;
