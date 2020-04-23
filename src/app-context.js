import React, { Component } from "react";
import { staticData } from "./staticData";

const favMovies = JSON.parse(localStorage.getItem("favMovies")) || [];
const AppContext = React.createContext({
  favMovies,
  modalFetchMovies: false,
  openDetailsModal: false,
  openMovieID: null,
  reload: false,
  message: "",
});

export class AppProvider extends Component {
  updateLocalStore = () => {
    localStorage.setItem("favMovies", JSON.stringify(this.state.favMovies));
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
      favMovies: [...this.state.favMovies],
      modalFetchMovies: this.state.modalFetchMovies,
      openDetailsModal: this.state.openDetailsModal,
      openMovieID: this.state.openMovieID,
      reload: this.state.reaload,
      message: this.state.message,
      handleOpenDetailsModal: this.handleOpenDetailsModal,
      handleCloseDetailsModal: this.handleCloseDetailsModal,
      handleOffReload: this.handleOffReload,
      action: this.handleActionWatchlist,
    };

    return (
      <AppContext.Provider value={contextElements}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;
