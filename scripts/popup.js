export async function popMovieDetail(movieDetails) {
    const detailButton = document.getElementById("detail-button")
    console.log("pull my finger", detailButton.value);

    const popup = document.getElementById("detail-popup");
    console.log("popup", popup);
    popup.showModal();
}