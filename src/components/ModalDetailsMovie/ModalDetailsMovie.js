import React, { Component } from "react";
import styled from "./ModalDetailsMovie.module.scss";
import RatingIcon from "../../assets/icons/rating.png";

class ModalDetailsMovie extends Component {
  state = {
    movie: {
      Title: "Rambo: Last Blood",
      Year: "2019",
      Rated: "R",
      Released: "20 Sep 2019",
      Runtime: "89 min",
      Genre: "Action, Adventure, Thriller",
      Director: "Adrian Grunberg",
      Writer:
        "Matthew Cirulnick (screenplay by), Sylvester Stallone (screenplay by), Dan Gordon (story by), Sylvester Stallone (story by), David Morrell (based on the character created by)",
      Actors:
        "Sylvester Stallone, Paz Vega, Sergio Peris-Mencheta, Adriana Barraza",
      Plot:
        "Rambo must confront his past and unearth his ruthless combat skills to exact revenge in a final mission.",
      Language: "English, Spanish",
      Country: "USA, Bulgaria",
      Awards: "2 wins & 9 nominations.",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTAxZWM2OTgtOTQzOC00ZTI5LTgyYjktZTRhYWM4YWQxNWI0XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "6.2/10"
        },
        {
          Source: "Metacritic",
          Value: "26/100"
        }
      ],
      Metascore: "26",
      imdbRating: "6.2",
      imdbVotes: "59,082",
      imdbID: "tt1206885",
      Type: "movie",
      DVD: "N/A",
      BoxOffice: "N/A",
      Production: "N/A",
      Website: "N/A",
      Response: "True"
    }
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
      imdbVotes
    } = this.state.movie;
    return (
      <div className={styled.modalWrapper}>
        <button onClick={closeModal} className={styled.btnClose}>
          X
        </button>
        <div className={styled.header}>
          <div className={styled.label}>
            <h3 className={styled.title}>{Title}</h3>
            <span className={styled.year}>{Year}</span>
          </div>
          <div className={styled.rate}>
            <img src={RatingIcon} alt="Star - rating icon" />
            <div className={styled.rating}>
              <span className={styled.score}>{imdbRating}</span>
              <span className={styled.votes}>{imdbVotes}</span>
            </div>
          </div>
        </div>
        <div className={styled.info}>
          <span>{Runtime}</span>
          <span>{Genre}</span>
        </div>
        <img src={Poster} alt="Poster of movie" />
        <p className={styled.about}>{Plot}</p>
        <p className={styled.actors}>Actors: {Actors}</p>
        <p className={styled.awards}>{Awards}</p>
      </div>
    );
  }
}

export default ModalDetailsMovie;
