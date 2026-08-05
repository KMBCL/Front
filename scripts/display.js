function createDetailButton(value) {
    const detailButton = document.createElement("button");

    detailButton.textContent = "Details";
    detailButton.value = value;
    detailButton.className = "detail-button";
    return detailButton;
}

function createImageTag(value) {
    const newImageTag = document.createElement("img");
    newImageTag.src = "";
    newImageTag.alt = "Movie IMG";
    return newImageTag;
}

function createTitleTag(value) {
    const newtTitleTag = document.createElement("h3");
    newtTitleTag.textContent = value;
    return newtTitleTag;
}

function createShortDescription(value) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = value;
    return newParagraph;
}

export function createLiTag(value) {
    const newLiTag = document.createElement("li");
    newLiTag.textContent = value;
    return newLiTag;

}

export function createGenreOption(genre) {
    const newOption = document.createElement("option");
    newOption.value = genre.name;
    newOption.textContent = genre.name;
    return newOption;
}

export function displayBestMovie(movie) {
    const bestMovieSection = document.getElementById("best-movie-section");
    const imageTag = createImageTag(movie.image_url);
    const titleTag = createTitleTag(movie.title)
    const detailButton = createDetailButton(movie.id);
    const shortDescription = createShortDescription(movie.description);

    bestMovieSection.appendChild(imageTag);
    bestMovieSection.appendChild(titleTag);
    bestMovieSection.appendChild(detailButton);
    bestMovieSection.appendChild(shortDescription);
}

export function displayMovies(itemList, element) {
    for (const item of itemList) {
        const imageTag = createImageTag(item.image_url);
        const title = createLiTag(item.title);
        const detailButton = createDetailButton(item.id);

        title.appendChild(imageTag);
        title.appendChild(detailButton);
        element.appendChild(title);
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