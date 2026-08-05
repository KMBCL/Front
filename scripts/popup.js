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

// const title = createLiTag(movieDetails.title);
//     const genres = createLiTag(movieDetails.genres);
//     const datePublished = createLiTag(movieDetails.date_published)
//     const rated = createLiTag(movieDetails.rated);
//     const imdbScore = createLiTag(movieDetails.imdb_score);
//     const director = createLiTag("réalisateur ??");
//     const actors = createLiTag(movieDetails.actors);
//     const duration = createLiTag(movieDetails.duration);
//     const country = createLiTag(movieDetails.countries);
//     const income = createLiTag("income");
//     const longDescription = createLiTag(movieDetails.long_description);