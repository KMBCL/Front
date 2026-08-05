export function setSelectListener(selectOtherGenreMovies) {
    const selectOtherGenre = document.getElementById("other-genres");
    selectOtherGenre.addEventListener("change", selectOtherGenreMovies);
}

export function setDetailButtonListener(summonDetailPopup) {
    const detailButtons = document.getElementsByClassName("detail-button")

    for (const detailButton of detailButtons) {
        detailButton.addEventListener("click", summonDetailPopup);
    }
}



