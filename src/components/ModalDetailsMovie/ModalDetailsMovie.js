import React, { Component } from "react";
import styles from "./ModalDetailsMovie.module.scss";
import SmallButtonActionWatchlist from "../SmallButtonActionWatchlist/SmallButtonActionWatchlist";
import IconClose from "../../assets/icons/close.svg";
import RatingIcon from "../../assets/icons/rating.svg";
import BigButtonActionWatchlist from "../BigButtonActionWatchlist/BigButtonActionWatchlist";

class ModalDetailsMovie extends Component {
  state = {
    movie: {},
  };

  componentDidMount() {
    //   fetch data
  }

  render() {
    const { closeModal } = this.props;
    const {
      Title,
      Year,
      Runtime,
      Genre,
      Actors,
      Plot,
      Awards,
      Poster,
      imdbRating,
      imdbVotes,
    } = this.state.movie;

    const listActors = Actors.split(",").map((actor, index) => (
      <li key={index}>{actor}</li>
    ));
    return (
      <div className={styles.fullContainer}>
        <div className={styles.modalWrapper}>
          {<SmallButtonActionWatchlist actionRemove />}
          <button onClick={closeModal} className={styles.btnClose}>
            <img src={IconClose} alt="Button close details modal" />
          </button>
          <div className={styles.header}>
            <div className={styles.label}>
              <h2 className={styles.title}>{Title}</h2>
              <span className={styles.year}>{Year}</span>
            </div>
            <div className={styles.rate}>
              <img
                src={RatingIcon}
                className={styles.star}
                alt="Star - rating icon"
              />
              <div className={styles.rating}>
                <p className={styles.score}>{imdbRating}</p>
                <p className={styles.votes}>
                  {imdbVotes} <span>(votes)</span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <span>{Runtime}</span> | <span>{Genre}</span>
          </div>
          <img
            src={Poster}
            alt="Poster of the Movie"
            className={styles.poster}
          />
          <p className={styles.about}>{Plot}</p>
          <h3>Stars:</h3>
          <ul className={styles.actors}>{listActors}</ul>
          <h3>Awards:</h3>
          <p className={styles.awards}>{Awards}</p>
          {<BigButtonActionWatchlist actionRemove />}
        </div>
      </div>
    );
  }
}

export default ModalDetailsMovie;
