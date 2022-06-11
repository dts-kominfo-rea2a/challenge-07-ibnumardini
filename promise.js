const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (rating) => {
  const theaterIxx = await promiseTheaterIXX();
  const theaterVgc = await promiseTheaterVGC();

  // merge films
  const films = theaterIxx.concat(theaterVgc);

  // count rating
  const result = countRating(rating, films);

  return result;
};

const countRating = (rating, films) => {
  const filmsFiltered = films.filter((film) => film.hasil === rating);

  return filmsFiltered.length;
};

module.exports = {
  promiseOutput,
};
