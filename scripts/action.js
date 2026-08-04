import { fetchGenreBestMovies } from "./movieFetch.js";
import { displayOtherGenreMovies } from "./display.js";

export async function selectOtherGenreMovies() {
    const genreSelector = document.getElementById("other-genres");
    const selectedGenre = genreSelector.value;
    const otherGenreMovies = await fetchGenreBestMovies(selectedGenre);
    displayOtherGenreMovies(otherGenreMovies);
}