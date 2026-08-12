import { fetchBestMovies, fetchMovieDetail, fetchGenreBestMovies, fetchGenres } from "./apiFetch.js";
import { displayBestMovie, displayMovies, displayOtherGenres } from "./display.js";
import { setSelectListener, setSummonDetailButtonListener, setCloseDetailPopupListener } from "./event.js";
import { popMovieDetail } from "./popup.js";
import { selectOtherGenreMovies, summonDetailPopup, closeDetailPopup } from "./action.js";


async function load() {

    const bestMovieElement = document.getElementById("best-movie");
    const bestMoviesElement = document.getElementById("best-movies");
    const bestHorrorMoviesElement = document.getElementById("best-horror-movies");
    const bestActionMoviesElement = document.getElementById("best-action-movies");
    const bestOtherMoviesElement = document.getElementById("best-others-movies");
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

    displayBestMovie(bestMoviesDetail, bestMovieElement);
    displayOtherGenres(genres);

    displayMovies(bestMovies.slice(1), bestMoviesElement);
    displayMovies(bestHorrorMovies, bestHorrorMoviesElement);
    displayMovies(bestActionMovies, bestActionMoviesElement);



    setSummonDetailButtonListener(summonDetailPopup, bestMovieElement);
    setSummonDetailButtonListener(summonDetailPopup, bestMoviesElement);
    setSummonDetailButtonListener(summonDetailPopup, bestHorrorMoviesElement);
    setSummonDetailButtonListener(summonDetailPopup, bestActionMoviesElement);
    setSummonDetailButtonListener(summonDetailPopup, bestOtherMoviesElement);

    setSelectListener(selectOtherGenreMovies);
    setCloseDetailPopupListener(closeDetailPopup, closePopupElement);
    console.log("loaded")
}

load()