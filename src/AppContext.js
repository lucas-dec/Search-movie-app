import React, { Component } from "react";

const favMovies = JSON.parse(localStorage.getItem("favMovies")) || [];
const AppContext = React.createContext();

export class AppProvider extends Component {
  state = {
    modalSearch: true,
    modalFetchMovies: false,
    modalDetails: false,
    favMovies,
    openMovieID: null,
    reload: false,
    message: "",
  };

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
  handleModalDetails = (flag) => {
    this.setState({
      modalDetails: flag,
    });
  };

  handleCloseListMovie = () => {
    this.setState({
      modalSearch: true,
      modalFetchMovies: false,
    });
  };

  render() {
    const contextElements = {
      ...this.state,
      handleModalSearch: this.handleModalSearch,
      handleModalFetchMovies: this.handleModalFetchMovies,
      handleModalDetails: this.handleModalDetails,
      handleCloseListMovie: this.handleCloseListMovie,
    };
    return (
      <AppContext.Provider value={contextElements}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

// const contextElements = {
//   openDetailsModal: this.state.openDetailsModal,
//   openMovieID: this.state.openMovieID,
//   handleOpenDetailsModal: this.handleOpenDetailsModal,
//   handleCloseDetailsModal: this.handleCloseDetailsModal,
//   reload: this.state.reload,
//   handleOffReload: this.handleOffReload,
//   favMovies: [...this.state.favMovies],
//   message: this.state.message,
//   action: this.handleActionWatchlist,
// };

// componentDidUpdate(prevProps, prevState) {
//   if (prevState.favMovies !== this.state.favMovies) {
//     localStorage.setItem("favMovies", JSON.stringify(this.state.favMovies));
//   }
// }
//

// handleOpenDetailsModal = (id) => {
//   if (this.state.openDetailsModal) {
//     this.setState({
//       openDetailsModal: true,
//       openMovieID: id,
//       reload: true,
//     });
//   } else
//     this.setState({
//       openDetailsModal: true,
//       openMovieID: id,
//     });
// };

// handleCloseDetailsModal = () => {
//   this.setState({
//     openDetailsModal: false,
//     openMovieID: "",
//     message: "",
//   });
// };

// handleOffReload = () => {
//   this.setState({
//     reload: false,
//   });
// };

// handleActionWatchlist = (type, id, title, poster) => {
//   if (type === staticData.actionType.ADD)
//     this.setState((prevState) => ({
//       favMovies: [
//         ...prevState.favMovies,
//         {
//           id,
//           title,
//           poster,
//         },
//       ],
//       message: staticData.messages.ADD_MESSAGE,
//     }));
//   else if (type === staticData.actionType.REMOVE) {
//     const favMovies = this.state.favMovies.filter((movie) => movie.id !== id);
//     this.setState({
//       favMovies,
//       message: staticData.messages.REMOVE_MESSAGE,
//     });
//   }
// };

export default AppContext;
