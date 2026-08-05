import { createLiTag } from "./display.js"

export async function popMovieDetail(movieDetails) {
    const popup = document.getElementById("detail-popup")
    const popupDetailsElement = document.getElementById("movie-details");
    popupDetailsElement.replaceChildren()
    const detailItems = [
        createLiTag(movieDetails.title),
        createLiTag(movieDetails.genres),
        createLiTag(movieDetails.date_published),
        createLiTag(movieDetails.rated),
        createLiTag(movieDetails.imdb_score),
        createLiTag("réalisateur ??"),
        createLiTag(movieDetails.actors),
        createLiTag(movieDetails.duration),
        createLiTag(movieDetails.countries),
        createLiTag("income"),
        createLiTag(movieDetails.long_description),
    ];

    for (const item of detailItems) {
        popupDetailsElement.appendChild(item);
    }
    popup.showModal();

}

