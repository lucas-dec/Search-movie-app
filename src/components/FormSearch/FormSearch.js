import React, { Component } from "react";
import styles from "./FormSearch.module.scss";
import AppContext from "../../AppContext";

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
    const { value } = this.state;
    e.preventDefault();
    if (!value) return;

    this.props.searchMovie(value);
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
FormSearch.contextType = AppContext;
export default FormSearch;
