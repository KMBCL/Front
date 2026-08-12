import { fetchGenreBestMovies, fetchMovieDetail } from "./apiFetch.js";
import { displayOtherGenreMovies } from "./display.js";
import { popMovieDetail } from "./popup.js";

export async function selectOtherGenreMovies(Event) {
    const genreSelector = Event.target;
    const otherGenreMovies = await fetchGenreBestMovies(genreSelector.value);
    displayOtherGenreMovies(otherGenreMovies);
}

export async function summonDetailPopup(Event) {
    const detailButton = Event.target;
    const movieDetails = await fetchMovieDetail(detailButton.value);
    popMovieDetail(movieDetails);
}

export function closeDetailPopup(Event) {
    const detailPopup = document.getElementById("detail-popup");
    detailPopup.close();
}