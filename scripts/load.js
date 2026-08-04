import { fetchBestMovie, fetchMovieDetail, fetchBestHorrorMovies, fetchBestActionMovies } from "./movieFetch.js";
import { displayBestMovie, displayMovies } from "./display.js";
import { setSelectListener, setDetailButtonListener } from "./event.js";
import { popMovieDetail } from "./popup.js";
import { selectOtherGenreMovies } from "./action.js";

async function load() {


    const bestMovie = await fetchBestMovie();
    const bestMovieDetail = await fetchMovieDetail(bestMovie[0].id);
    const bestHorrorMovies = await fetchBestHorrorMovies();
    const bestActionMovies = await fetchBestActionMovies();
    displayBestMovie(bestMovieDetail);
    displayMovies(bestHorrorMovies, "best-horror-movies");
    displayMovies(bestActionMovies, "best-action-movies");

    setSelectListener(selectOtherGenreMovies);
    setDetailButtonListener(bestMovieDetail.id, popMovieDetail);
    console.log("loaded")
}

load()