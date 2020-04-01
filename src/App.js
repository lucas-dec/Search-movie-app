import React, { Component } from "react";
import "./index.scss";
import ModalSearch from "./components/ModalSearch/ModalSearch";

class App extends Component {
  state = {
    modalSearch: false
  };

  componentDidMount() {
    this.setState({
      modalSearch: true
    });
  }

  handleSearchMovie = (e, value) => {
    e.preventDefault();
    console.log(value);
  };

  render() {
    return (
      <>
        {this.state.modalSearch && (
          <ModalSearch searchMovie={this.handleSearchMovie} />
        )}
      </>
    );
  }
}

export default App;
