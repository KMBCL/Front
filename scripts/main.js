import { fetchBestMovies, fetchMovieDetail, fetchGenreBestMovies, fetchGenres } from "./apiFetch.js";
import { displayBestMovie, displayMovies, displayOtherGenres } from "./display.js";
import { setSelectListener } from "./otherGenres.js";
import { popMovieDetail, setSummonDetailButtonListener, setCloseDetailPopupListener } from "./popup.js";
import { setShorMoreListeners } from "./showMore.js";

async function feedOtherGenre(){
    const genresPromise = fetchGenres();

    const bestOtherMoviesElement = document.getElementById("best-others-movies");
    setSummonDetailButtonListener(bestOtherMoviesElement);
    
    const genres = await genresPromise; 
    displayOtherGenres(genres);
}

async function feedBestMovieByCategories(){
    const bestHorrorMoviesPromise = fetchGenreBestMovies("Horror");
    const bestActionMoviesPromise = fetchGenreBestMovies("Action");

    const bestHorrorMoviesElement = document.getElementById("best-horror-movies");
    const bestActionMoviesElement = document.getElementById("best-action-movies");

    const bestHorrorMovies = await bestHorrorMoviesPromise
    const bestActionMovies = await bestActionMoviesPromise

    displayMovies(bestHorrorMovies, bestHorrorMoviesElement);
    displayMovies(bestActionMovies, bestActionMoviesElement);

    setSummonDetailButtonListener(bestHorrorMoviesElement);
    setSummonDetailButtonListener(bestActionMoviesElement);
}

async function feedBestMovies(){
    const bestMoviesPromise = fetchBestMovies();

    const bestMoviesElement = document.getElementById("best-movies");
    setSummonDetailButtonListener(bestMoviesElement);

    const bestMovies = await bestMoviesPromise;
    displayMovies(bestMovies.slice(1), bestMoviesElement);
    return bestMovies;
}

async function feedBestMovie(bestMovies){
    const bestMovieDetailButton = document.getElementById("best-movie-detail");
    setSummonDetailButtonListener(bestMovieDetailButton);

    const bestMoviesDetail = await fetchMovieDetail(bestMovies.slice(0, 1)[0].id);
    displayBestMovie(bestMoviesDetail);
}

function loadPopup(){
    const closePopupElement = document.getElementById("close-popup");
    setCloseDetailPopupListener(closePopupElement);
}

async function main() {              
    Promise.all ([feedOtherGenre(), feedBestMovieByCategories(),feedBestMovies().then(feedBestMovie)]) 
    loadPopup()    ;
    setSelectListener();  
    setShorMoreListeners();
    console.log("loaded");
}

main();