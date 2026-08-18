import { createLiTag } from "./display.js"
import { fetchMovieDetail } from "./apiFetch.js";

const UNKNOWN_RATED = "Not rated or unkown rating"

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
    
    movieDirectors.textContent = movieDetails.directors;
  
    if (movieDetails.worldwide_gross_income !== null){
        movieIncome.textContent = "Income : " + movieDetails.worldwide_gross_income;
    }
    
    // construire un dictionnaire clé / tag
    // construire liste d'exclusion
    // itération du dictionnaire, récupération de la valeur de movieDetails
    // test si la valeur est dans la liste d'exclusion.
    // si pas dans la liste, alors on écrit
    // efficacité? n traitement pour n clés.
    // préparer la liste de valeur / tag en amont
    // map en js pour reconstruire une liste avec uniquement les valeurs / tag donc 
    // la valeur n'est pas présente dans la liste d'exclusion

    popup.showModal();

}

