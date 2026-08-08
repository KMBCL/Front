import { createLiTag } from "./display.js"

export async function popMovieDetail(movieDetails) {
    const popup = document.getElementById("detail-popup");
    const movieTitleTag = document.getElementById("popup-movie-title");

    const movieLongDescriptionTag = document.getElementById("popup-long-description");
    const movieActorsTag = document.getElementById("popup-actors");
    const movieYearGenresTag = document.getElementById("popup-year-genres");
    const movieRatedDurationTag = document.getElementById("popup-rated-duration");
    const movieIMDBScore = document.getElementById("popup-imdb-score");
    const movieIncome = document.getElementById("popup-income");
    const movieDirectors = document.getElementById("popup-directors");



    movieTitleTag.textContent = movieDetails.title;
    movieLongDescriptionTag.textContent = movieDetails.long_description;
    movieActorsTag.textContent = movieDetails.actors;
    movieYearGenresTag.textContent = movieDetails.year + " - " + movieDetails.genres;
    movieRatedDurationTag.textContent = "PG " + movieDetails.rated + " - " + movieDetails.duration + " minutes" + " ( " + movieDetails.countries + " )";
    movieIMDBScore.textContent = "IMDB score: " + movieDetails.imdb_score + "/10";
    movieIncome.textContent = "<currency> total income";
    movieDirectors.textContent = movieDetails.directors;

    popup.showModal();

}

