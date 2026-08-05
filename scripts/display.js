export function displayBestMovie(movie, elementID) {
    const titelTag = document.getElementById("best-movie-title");
    const imageTag = document.getElementById("best-movie-image");
    const summaryTag = document.getElementById("best-movie-summary");
    titelTag.textContent = movie.title;
    imageTag.src = movie.image_url;
    summaryTag.textContent = movie.long_description
}

function createDetailButton(value) {
    const detailButton = document.createElement("button");
    detailButton.textContent = "Details";
    detailButton.value = value;
    detailButton.className = "detail-button";
    return detailButton;
}

export function createLiTag(value) {
    const newLiTag = document.createElement("li");
    newLiTag.textContent = value;
    return newLiTag;

}

export function displayMovies(itemList, elementID) {
    const movieList = document.getElementById(elementID);

    for (const item of itemList) {
        const title = createLiTag(item.title);
        const detailButton = createDetailButton(item.id);
        title.appendChild(detailButton);
        movieList.appendChild(title);
    }

}

export function resetOtherMovies() {
    const otherGenreMovies = document.getElementById("best-others-movies");
    otherGenreMovies.replaceChildren();
}

export function displayOtherGenreMovies(otherGenreMovies) {
    resetOtherMovies();
    displayMovies(otherGenreMovies, "best-others-movies");
}