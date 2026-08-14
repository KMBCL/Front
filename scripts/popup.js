import { createLiTag } from "./display.js"
import { fetchMovieDetail } from "./apiFetch.js";

export async function summonDetailPopup(event) {
    const detailButton = event.target;
    const movieDetails = await fetchMovieDetail(detailButton.value);
    popMovieDetail(movieDetails);
}

export function closeDetailPopup(event) {
    const detailPopup = document.getElementById("detail-popup");
    detailPopup.close();
}

export function setSummonDetailButtonListener(element) {
    element.addEventListener("click", summonDetailPopup);
}


export function setCloseDetailPopupListener(element) {
    element.addEventListener("click", closeDetailPopup);
}

export async function popMovieDetail(movieDetails) {
    const popup = document.getElementById("detail-popup");
    const movieTitleTag = document.getElementById("popup-movie-title");
    const moviePoster = document.getElementById("popup-poster");
    const movieLongDescriptionTag = document.getElementById("popup-long-description");
    const movieActorsTag = document.getElementById("popup-actors");
    const movieYearGenresTag = document.getElementById("popup-year-genres");
    const movieRatedDurationTag = document.getElementById("popup-rated-duration");
    const movieIMDBScore = document.getElementById("popup-imdb-score");
    const movieIncome = document.getElementById("popup-income");
    const movieDirectors = document.getElementById("popup-directors");



    movieTitleTag.textContent = movieDetails.title;
    moviePoster.src = movieDetails.image_url;
    moviePoster.alt = "IMG"
    movieLongDescriptionTag.textContent = movieDetails.long_description;
    movieActorsTag.textContent = movieDetails.actors;
    movieYearGenresTag.textContent = movieDetails.year + " - " + movieDetails.genres;
    movieRatedDurationTag.textContent = "PG " + movieDetails.rated + " - " + movieDetails.duration + " minutes" + " ( " + movieDetails.countries + " )";
    movieIMDBScore.textContent = "IMDB score: " + movieDetails.imdb_score + "/10";
    movieIncome.textContent = "<currency> total income";
    movieDirectors.textContent = movieDetails.directors;

    popup.showModal();

}

