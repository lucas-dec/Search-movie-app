import React from "react";

const InfoDetailsMovie = ({ runtime, genre }) => (
  <div>
    <span>{runtime}</span> | <span>{genre}</span>
  </div>
);

export default InfoDetailsMovie;
