import React from "react";

const SingleActor = ({ actors }) => {
  return actors.split(",").map((actor, index) => {
    return <li key={index}>{actor}</li>;
  });
};

export default SingleActor;
