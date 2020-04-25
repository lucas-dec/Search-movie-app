import React, { Component } from "react";
import { staticData } from "./staticData";

const favMovies = JSON.parse(localStorage.getItem("favMovies")) || [];
const AppContext = React.createContext();

export class AppProvider extends Component {
  state = {
    modalSearch: true,
    modalFetchMovies: false,
    modalDetails: false,
    favMovies,
    movieID: null,
    reload: false,
    message: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.favMovies !== this.state.favMovies) {
      localStorage.setItem("favMovies", JSON.stringify(this.state.favMovies));
    }
  }

  handleModalSearch = (flag) => {
    this.setState({
      modalSearch: flag,
    });
  };
  handleModalFetchMovies = (flag) => {
    this.setState({
      modalFetchMovies: flag,
    });
  };

  handleCloseListMovie = () => {
    this.setState({
      modalSearch: true,
      modalFetchMovies: false,
    });
  };

  handleOpenDetailsModal = (id) => {
    if (this.state.modalDetails) {
      this.setState({
        modalDetails: true,
        movieID: id,
        reload: true,
        message: "",
      });
    } else
      this.setState({
        modalDetails: true,
        movieID: id,
        message: "",
      });
  };

  handleCloseDetailsModal = () => {
    this.setState({
      modalDetails: false,
      movieID: "",
    });
  };

  handleOffReload = () => {
    this.setState({
      reload: false,
    });
  };

  handleActionWatchlist = (type, id, title, poster) => {
    const { actionType, messages } = staticData;
    let messageText = "";
    if (id !== this.state.movieID) {
      messageText = "";
    } else if (type === actionType.ADD) {
      messageText = messages.ADD_MESSAGE;
    } else if (type === actionType.REMOVE) {
      messageText = messages.REMOVE_MESSAGE;
    }

    if (type === actionType.ADD)
      this.setState((prevState) => ({
        favMovies: [
          ...prevState.favMovies,
          {
            id,
            title,
            poster,
          },
        ],
        message: messageText,
      }));
    else if (type === actionType.REMOVE) {
      const favMovies = this.state.favMovies.filter((movie) => movie.id !== id);
      this.setState({
        favMovies,
        message: messageText,
      });
    }
  };

  render() {
    const contextElements = {
      ...this.state,
      handleModalSearch: this.handleModalSearch,
      handleModalFetchMovies: this.handleModalFetchMovies,
      handleCloseListMovie: this.handleCloseListMovie,
      handleOpenDetailsModal: this.handleOpenDetailsModal,
      handleCloseDetailsModal: this.handleCloseDetailsModal,
      handleOffReload: this.handleOffReload,
      handleAction: this.handleActionWatchlist,
    };
    return (
      <AppContext.Provider value={contextElements}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;
