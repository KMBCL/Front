function createDetailButton(value) {
    const detailButton = document.createElement("button");

    detailButton.textContent = "Details";
    detailButton.value = value;
    detailButton.className = "detail-button";
    return detailButton;
}

function createImageTag(value) {
    const imageTag = document.createElement("img");
    imageTag.src = value;
    imageTag.alt = "Movie Poster";
    imageTag.className = "movie-poster";
    return imageTag;
}

function createTitleTag(value) {
    const titleTag = document.createElement("h3");
    titleTag.textContent = value;
    return titleTag;
}

function createShortDescription(value) {
    const paragraph = document.createElement("p");
    paragraph.textContent = value;
    return paragraph;
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
    titleTag.textContent = movie.title;
    shortDescription.textContent = movie.description;
}

export function displayMovies(itemList, element) {
    for (const item of itemList) {
        const movieItemTag = createLiTag();
        const imageTag = createImageTag(item.image_url);
        const titleTag = createTitleTag(item.title);
        const detailButton = createDetailButton(item.id);
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