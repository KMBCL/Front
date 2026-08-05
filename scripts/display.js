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

export function createGenreOption(genre) {
    const newOption = document.createElement("option");
    newOption.value = genre.name;
    newOption.textContent = genre.name;
    return newOption;
}

export function displayBestMovie(movie) {
    const bestMovieSection = document.getElementById("best-movie-section");
    const titelTag = document.getElementById("best-movie-title");
    const imageTag = document.getElementById("best-movie-image");
    const summaryTag = document.getElementById("best-movie-summary");
    const detailButton = createDetailButton(movie.id);

    titelTag.textContent = movie.title;
    imageTag.src = movie.image_url;
    summaryTag.textContent = movie.long_description
    bestMovieSection.appendChild(detailButton);
}



export function displayMovies(itemList, element) {
    for (const item of itemList) {
        const title = createLiTag(item.title);
        const detailButton = createDetailButton(item.id);
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