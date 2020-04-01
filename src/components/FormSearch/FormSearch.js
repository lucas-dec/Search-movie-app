import React, { Component } from "react";
import styled from "./FormSearch.module.scss";

class FormSearch extends Component {
  state = {
    value: ""
  };
  handleChangeInput = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    const { searchMovie } = this.props;
    return (
      <form
        className={styled.formWrapper}
        onSubmit={e => searchMovie(e, this.state.value)}
      >
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChangeInput}
          className={styled.inputSearch}
        />
        <button type="submit" className={styled.btnSubmit}>
          search
        </button>
      </form>
    );
  }
}

export default FormSearch;
