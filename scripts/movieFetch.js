async function fetchMovies(url, maxItem = 0) {
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

export async function fetchMovieDetail(movieID) {
    const bestMovieURL = `http://localhost:8000/api/v1/titles/${movieID}`;
    const movieResponse = await fetch(bestMovieURL);
    const movie = await movieResponse.json();
    return movie
}

export async function fetchBestMovie() {
    const bestMovieURL = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
    return fetchMovies(bestMovieURL, 1);
}

export async function fetchGenres() {
    const genresUrl = "http://localhost:8000/api/v1/genres/";
    return fetchMovies(genresUrl);
}

export async function fetchGenreBestMovies(genre) {
    const bestMovieURL = `http://localhost:8000/api/v1/titles/?genre=${genre}&sort_by=-imdb_score`;
    return fetchMovies(bestMovieURL, 6);
}

export async function fetchBestHorrorMovies() {
    return fetchGenreBestMovies("Horror");
}

export async function fetchBestActionMovies() {
    return fetchGenreBestMovies("Action");
}











