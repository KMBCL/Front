import { fetchGenreBestMovies, fetchMovieDetail } from "./movieFetch.js";
import { displayOtherGenreMovies } from "./display.js";
import { popMovieDetail } from "./popup.js";

export async function selectOtherGenreMovies(Event) {
    const genreSelector = Event.currentTarget;
    const otherGenreMovies = await fetchGenreBestMovies(genreSelector.value);
    displayOtherGenreMovies(otherGenreMovies);
}

export async function summonDetailPopup(Event) {
    console.log("detailButton value", Event.currentTarget.value);
    const detailButton = Event.currentTarget;
    const movieDetails = await fetchMovieDetail(detailButton.value);
    popMovieDetail(movieDetails);
}