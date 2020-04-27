export const favMovies = JSON.parse(localStorage.getItem("favMovies")) || [];
export const updateStorage = (movies) =>
  localStorage.setItem("favMovies", JSON.stringify(movies));
