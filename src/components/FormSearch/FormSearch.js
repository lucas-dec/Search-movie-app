import React, { Component } from "react";
import styles from "./FormSearch.module.scss";

class FormSearch extends Component {
  state = {
    value: "",
  };
  handleChangeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmitSearch = (e) => {
    e.preventDefault();
    if (!this.state.value) return;

    this.props.searchMovie(this.state.value);
    this.setState({
      value: "",
    });
  };
  render() {
    return (
      <form className={styles.formWrapper} onSubmit={this.handleSubmitSearch}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChangeInput}
          className={styles.inputSearch}
          placeholder="type search movie"
          required
        />
        <button type="submit" className={styles.btnSubmit}>
          search
        </button>
      </form>
    );
  }
}

export default FormSearch;
