export function setSelectListener(selectOtherGenreMovies) {
    const selectOtherGenre = document.getElementById("other-genres");
    selectOtherGenre.addEventListener("change", selectOtherGenreMovies);
}

export function setSummonDetailButtonListener(summonDetailPopup, element) {
    element.addEventListener("click", summonDetailPopup);
}


export function setCloseDetailPopupListener(closeDetailPopup, element) {
    element.addEventListener("click", closeDetailPopup);
}
