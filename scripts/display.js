function createDetailButton(movie) {
    const detailButton = document.createElement("button");

    detailButton.textContent = "Détails";
    detailButton.value = movie.id;
    detailButton.className = "movie-item__detail-button";
    return detailButton;
}

function createImageTag(movie) {
    const imageTag = document.createElement("img");
    console.log("image url", movie.image_url)
    imageTag.src = movie.image_url;
    imageTag.alt = movie.title;
    imageTag.className = "movie-poster";
    return imageTag;
}

function createTitleTag(movie) {
    const titleTag = document.createElement("h3");
    titleTag.className = "movie-item__title"
    titleTag.textContent = movie.title;
    return titleTag;
}

function createMovieBanner() {
    const movieBanner = document.createElement("div");
    movieBanner.className = "movie-banner";
    return movieBanner;
}

export function createLiTag() {
    const liTag = document.createElement("li");
    liTag.className = "movie-item";
    return liTag;

}

export function createGenreOption(genre) {
    const newOption = document.createElement("option");
    newOption.value = genre.name;
    newOption.textContent = genre.name;
    return newOption;
}

export function displayBestMovie(movie, element) {
    const imageTag = document.getElementById("best-movie-poster");
    const titleTag = document.getElementById("best-movie-title");
    const shortDescription = document.getElementById("best-movie-description");

    imageTag.src = movie.image_url;
    imageTag.alt = movie.title;
    titleTag.textContent = movie.title;
    shortDescription.textContent = movie.description;
}

export function displayMovies(movies, element) {
    for (const movie of movies) {
        const movieItemTag = createLiTag();
        const imageTag = createImageTag(movie);
        const titleTag = createTitleTag(movie);
        const detailButton = createDetailButton(movie);
        const movieBanner = createMovieBanner();

        movieBanner.appendChild(titleTag);
        movieBanner.appendChild(detailButton);
        movieItemTag.appendChild(imageTag);
        movieItemTag.appendChild(movieBanner);
        element.appendChild(movieItemTag);
    }

}

export function displayOtherGenres(genres) {
    const otherGenresSelector = document.getElementById("other-genres");
    for (const genre of genres) {
        const genreOption = createGenreOption(genre);
        otherGenresSelector.appendChild(genreOption);
    }
}

export function displayOtherGenreMovies(otherGenreMovies) {
    const bestOtherMoviesElement = document.getElementById("best-others-movies");
    bestOtherMoviesElement.replaceChildren();;
    displayMovies(otherGenreMovies, bestOtherMoviesElement);
}