import { fetchBestMovies, fetchMovieDetail, fetchGenreBestMovies, fetchGenres } from "./apiFetch.js";
import { displayBestMovie, displayMovies, displayOtherGenres } from "./display.js";
import { setSelectListener } from "./otherGenres.js";
import { popMovieDetail, setSummonDetailButtonListener, setCloseDetailPopupListener } from "./popup.js";
import { setShorMoreListeners } from "./showMore.js";


async function main() {


    const bestMoviesElement = document.getElementById("best-movies");
    const bestHorrorMoviesElement = document.getElementById("best-horror-movies");
    const bestActionMoviesElement = document.getElementById("best-action-movies");
    const bestOtherMoviesElement = document.getElementById("best-others-movies");
    const bestMovieDetailButton = document.getElementById("best-movie-detail");
    const closePopupElement = document.getElementById("close-popup");

    const bestMoviesPromise = fetchBestMovies();
    const bestHorrorMoviesPromise = fetchGenreBestMovies("Horror");
    const bestActionMoviesPromise = fetchGenreBestMovies("Action");
    const genresPromise = fetchGenres();

    const bestMovies = await bestMoviesPromise;
    const bestHorrorMovies = await bestHorrorMoviesPromise;
    const bestActionMovies = await bestActionMoviesPromise;
    const genres = await genresPromise;

    const bestMoviesDetail = await fetchMovieDetail(bestMovies.slice(0, 1)[0].id);

    displayBestMovie(bestMoviesDetail);
    displayOtherGenres(genres);

    displayMovies(bestMovies.slice(1), bestMoviesElement);
    displayMovies(bestHorrorMovies, bestHorrorMoviesElement);
    displayMovies(bestActionMovies, bestActionMoviesElement);



    setSummonDetailButtonListener(bestMovieDetailButton);
    setSummonDetailButtonListener(bestMoviesElement);
    setSummonDetailButtonListener(bestHorrorMoviesElement);
    setSummonDetailButtonListener(bestActionMoviesElement);
    setSummonDetailButtonListener(bestOtherMoviesElement);

    setSelectListener();
    setCloseDetailPopupListener(closePopupElement);

    setShorMoreListeners();
    console.log("loaded");
}

main();