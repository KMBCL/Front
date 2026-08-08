export function setSelectListener(selectOtherGenreMovies) {
    const selectOtherGenre = document.getElementById("other-genres");
    selectOtherGenre.addEventListener("change", selectOtherGenreMovies);
}

export function setDetailButtonListener(summonDetailPopup, element) {
    element.addEventListener("click", summonDetailPopup);
}



