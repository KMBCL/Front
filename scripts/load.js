import { fetchBestMovies, fetchMovieDetail, fetchGenreBestMovies, fetchGenres } from "./movieFetch.js";
import { displayBestMovie, displayMovies, displayOtherGenres } from "./display.js";
import { setSelectListener, setDetailButtonListener } from "./event.js";
import { popMovieDetail } from "./popup.js";
import { selectOtherGenreMovies, summonDetailPopup } from "./action.js";


async function load() {

    const bestMovieElement = document.getElementById("best-movie");
    const bestMoviesElement = document.getElementById("best-movies");
    const bestHorrorMoviesElement = document.getElementById("best-horror-movies");
    const bestActionMoviesElement = document.getElementById("best-action-movies");
    const bestOtherMoviesElement = document.getElementById("best-others-movies");

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

    setSelectListener(selectOtherGenreMovies);
    setDetailButtonListener(summonDetailPopup, bestMovieElement);
    setDetailButtonListener(summonDetailPopup, bestMoviesElement);
    setDetailButtonListener(summonDetailPopup, bestHorrorMoviesElement);
    setDetailButtonListener(summonDetailPopup, bestActionMoviesElement);
    setDetailButtonListener(summonDetailPopup, bestOtherMoviesElement);
    console.log("loaded")
}

load()