export function setSelectListener(selectOtherGenreMovies) {
    const selectOtherGenre = document.getElementById("other-genres");
    selectOtherGenre.addEventListener("change", selectOtherGenreMovies);
}

export function setDetailButtonListener(movieID, popMovieDetail) {
    const detailButton = document.getElementById("detail-button")
    detailButton.addEventListener("click", popMovieDetail)
    detailButton.value = movieID
}



