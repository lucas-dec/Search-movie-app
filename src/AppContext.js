import React, { Component } from "react";
import { favMovies } from "./utils/storage/localStorage";
import { updateStorage } from "./utils/storage/localStorage";
import { staticData } from "./staticData";

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
      updateStorage(this.state.favMovies);
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
        message: messages.ADD_MESSAGE,
      }));
    else if (type === actionType.REMOVE) {
      let messageText = messages.REMOVE_MESSAGE;
      if (id !== this.state.movieID) {
        messageText = "";
      }
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
