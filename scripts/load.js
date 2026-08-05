import { fetchBestMovie, fetchMovieDetail, fetchBestHorrorMovies, fetchBestActionMovies, fetchGenres } from "./movieFetch.js";
import { displayBestMovie, displayMovies, displayOtherGenres } from "./display.js";
import { setSelectListener, setDetailButtonListener } from "./event.js";
import { popMovieDetail } from "./popup.js";
import { selectOtherGenreMovies, summonDetailPopup } from "./action.js";

async function load() {


    const bestMoviePromise = fetchBestMovie();
    const bestHorrorMoviesPromise = fetchBestHorrorMovies();
    const bestActionMoviesPromise = fetchBestActionMovies();
    const genresPromise = fetchGenres();

    const bestHorrorMovies = await bestHorrorMoviesPromise;
    const bestActionMovies = await bestActionMoviesPromise;
    const genres = await genresPromise;
    const bestMovie = await bestMoviePromise;
    const bestMovieDetail = await fetchMovieDetail(bestMovie[0].id);
    displayBestMovie(bestMovieDetail);
    displayOtherGenres(genres);

    const bestHorrorMoviesElement = document.getElementById("best-horror-movies");
    const bestActionMoviesElement = document.getElementById("best-action-movies");
    displayMovies(bestHorrorMovies, bestHorrorMoviesElement);
    displayMovies(bestActionMovies, bestActionMoviesElement);

    setSelectListener(selectOtherGenreMovies);
    setDetailButtonListener(summonDetailPopup);
    console.log("loaded")
}

load()