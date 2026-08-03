async function fetchItems(url, maxItem = 0) {
    // main fetch function.

    // api returns 5 items per fetch. dont know if that is an accessible parameter to cap fetches.

    // args : 
    // url : str - full url with filters and sorting
    // maxitem : int - used to slice results. 0 means all results.

    // return : array of movies
    const itemData = [];
    let currentUrl = url;
    try {
        while (true) {
            const itemResponse = await fetch(currentUrl);
            if (!itemResponse.ok) {
                throw new Error("Status");
            }

            const data = await itemResponse.json();
            itemData.push(...data.results);
            if (!data.next) {
                break;
            }

            if (itemData.length >= maxItem && maxItem !== 0) {
                break;
            }

            currentUrl = data.next;
        }

        if (itemData.length > maxItem && maxItem !== 0) {
            return itemData.slice(0, maxItem);
        }

        return itemData;
    } catch (error) {
        console.error(error);
    }
}

async function fetchMovieDetail(movieID) {
    const bestMovieURL = `http://localhost:8000/api/v1/titles/${movieID}`;
    const movieResponse = await fetch(bestMovieURL);
    const movie = await movieResponse.json();
    return movie
}

function displayBestMovie(movie, elementID) {
    const titelTag = document.getElementById("best-movie-title");
    const imageTag = document.getElementById("best-movie-image");
    const summaryTag = document.getElementById("best-movie-summary");
    titelTag.textContent = movie.title;
    imageTag.src = movie.image_url;
    summaryTag.textContent = movie.long_description
}

function displayMovies(itemList, elementID) {
    const listTag = document.getElementById(elementID);
    console.log(itemList);

    for (const item of itemList) {
        const newLiTag = document.createElement("li");
        newLiTag.textContent = item.title;
        listTag.appendChild(newLiTag);
    }

}

function displayListInDocument(itemList, elementID) {
    const listTag = document.getElementById(elementID);
    console.log(itemList);

    for (const item of itemList) {
        const newLiTag = document.createElement("li");
        newLiTag.textContent = `${item.itemGenre} - ${item.itemMovie}`;
        listTag.appendChild(newLiTag);
    }

}

async function fetchBestMovie() {
    const bestMovieURL = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
    return fetchItems(bestMovieURL, 1);
}

async function fetchGenres() {
    const genresUrl = "http://localhost:8000/api/v1/genres/";
    return fetchItems(genresUrl);
}

async function fetchBestMovieByGenre(genre) {
    const bestMovieURL = `http://localhost:8000/api/v1/titles/?genre=${genre}&sort_by=-imdb_score`;
    return fetchItems(bestMovieURL, 1);
}

async function fetchBestHorrorMovies() {
    const bestMovieURL = `http://localhost:8000/api/v1/titles/?genre=Horror&sort_by=-imdb_score`;
    return fetchItems(bestMovieURL, 6);
}

async function fetchBestActionMovies() {
    const bestMovieURL = `http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score`;
    return fetchItems(bestMovieURL, 6);
}

async function fetchBestOtherGenreMovies(genre) {
    const bestMovieURL = `http://localhost:8000/api/v1/titles/?genre=${genre}&sort_by=-imdb_score`;
    return fetchItems(bestMovieURL, 6);
}

async function fetchBestMoviesByGenre() {
    const genres = await fetchGenres();
    const bestMovies = [];
    for (const genre of genres) {
        const bestMovie = await fetchBestMovieByGenre(genre.name);
        const item = { itemGenre: genre.name, itemMovie: bestMovie[0].title };
        bestMovies.push(item);
    }
    return bestMovies;
}



async function init() {
    setSelectListener();
    const bestMovie = await fetchBestMovie();
    const bestMovieDetail = await fetchMovieDetail(bestMovie[0].id);
    const bestMoviesByGenre = await fetchBestMoviesByGenre();
    const bestHorrorMovies = await fetchBestHorrorMovies();
    const bestActionMovies = await fetchBestActionMovies();
    displayBestMovie(bestMovieDetail);
    displayListInDocument(bestMoviesByGenre, "best-movies-per-categories");
    displayMovies(bestHorrorMovies, "best-horror-movies");
    displayMovies(bestActionMovies, "best-action-movies");
}

function setSelectListener() {
    const selectOtherGenre = document.getElementById("other-genres");
    selectOtherGenre.addEventListener("change", selectOtherGenreMovies);
}

function resetOtherMovies() {
    const otherGenreMovies = document.getElementById("best-others-movies");
    otherGenreMovies.replaceChildren()
}

async function selectOtherGenreMovies() {
    resetOtherMovies()

    const genreSelector = document.getElementById("other-genres")
    const selectedGenre = genreSelector.value;
    const otherGenreMovies = await fetchBestOtherGenreMovies(selectedGenre);
    displayMovies(otherGenreMovies, "best-others-movies");
}


init()

