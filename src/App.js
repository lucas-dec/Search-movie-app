import React, { Component } from "react";
import "./index.scss";
import ModalSearch from "./components/ModalSearch/ModalSearch";
import ModalFetchMovies from "./components/ModalFetchMovies/ModalFetchMovies";

class App extends Component {
  state = {
    modalSearch: false,
    searchValue: "",
    modalFetchMovies: false,
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
      modalFetchMovies: false,
      modalSearch: true,
    });
  };

  render() {
    return (
      <>
        {this.state.modalSearch && (
          <ModalSearch searchMovie={this.handleSearchMovie} />
        )}
        {this.state.modalFetchMovies && (
          <ModalFetchMovies
            closeListMovie={this.handleCloseListMovie}
            search={this.state.searchValue}
          />
        )}
      </>
    );
  }
}

export default App;
