import React from "react";
import styles from "./HeaderDetailsMovie.module.scss";
import RatingIcon from "../../assets/icons/rating.svg";

const HeaderDetailsMovie = ({ title, year, imdbRating, imdbVotes }) => (
  <>
    <div className={styles.header}>
      <div className={styles.label}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.year}>{year}</span>
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
  </>
);

export default HeaderDetailsMovie;
