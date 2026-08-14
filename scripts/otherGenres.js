import { fetchGenreBestMovies, fetchMovieDetail } from "./apiFetch.js";
import { displayOtherGenreMovies } from "./display.js";

export async function selectOtherGenreMovies(event) {
    const genreSelector = event.target;
    const otherGenreMovies = await fetchGenreBestMovies(genreSelector.value);
    displayOtherGenreMovies(otherGenreMovies);
}

export function setSelectListener() {
    const selectOtherGenre = document.getElementById("other-genres");
    selectOtherGenre.addEventListener("change", selectOtherGenreMovies);
}




