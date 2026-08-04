import { fetchBestOtherGenreMovies } from "./movieFetch.js";

export function displayBestMovie(movie, elementID) {
    const titelTag = document.getElementById("best-movie-title");
    const imageTag = document.getElementById("best-movie-image");
    const summaryTag = document.getElementById("best-movie-summary");
    titelTag.textContent = movie.title;
    imageTag.src = movie.image_url;
    summaryTag.textContent = movie.long_description
}

export function displayMovies(itemList, elementID) {
    const listTag = document.getElementById(elementID);
    console.log(itemList);

    for (const item of itemList) {
        const newLiTag = document.createElement("li");
        newLiTag.textContent = item.title;
        listTag.appendChild(newLiTag);
    }

}

export function resetOtherMovies() {
    const otherGenreMovies = document.getElementById("best-others-movies");
    otherGenreMovies.replaceChildren()
}

export async function selectOtherGenreMovies() {
    resetOtherMovies()

    const genreSelector = document.getElementById("other-genres");
    const selectedGenre = genreSelector.value;
    const otherGenreMovies = await fetchBestOtherGenreMovies(selectedGenre);
    displayMovies(otherGenreMovies, "best-others-movies");
}