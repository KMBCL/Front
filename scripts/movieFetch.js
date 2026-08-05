function pageSizedUrl(url, pageSize) {
    // completes url with page_size parameters

    // api returns batch sized result

    // args :
    // url : str - full url
    // pageSize : int - api batch count.

    // return new pageSized url

    if (pageSize === 0) {
        return url;
    } else {
        const pageSizeParam = "page_size=";
        const separator = (
            url.includes("?") ?
                "&" :
                "?"
        );
        return url + separator + pageSizeParam + pageSize;
    }
}

async function fetchMovies(url, maxItem = 0, pageSize = 0) {
    // fetch movies function from API.

    // args : 
    // url : str - full url with filters and sorting
    // maxItem : int - used to slice results. 0 means all results.
    // pageSize : int - used for api fecth batch. 

    // return : array of movies
    const itemData = [];

    let currentUrl = pageSizedUrl(url, pageSize);

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


export async function fetchBestMovies() {
    const bestMovieURL = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score,-votes";
    return fetchMovies(bestMovieURL, 7, 7);
}

export async function fetchGenres() {
    const genresUrl = "http://localhost:8000/api/v1/genres/";
    return fetchMovies(genresUrl, 0, 25);
}

export async function fetchGenreBestMovies(genre) {
    const bestMovieURL = `http://localhost:8000/api/v1/titles/?genre=${genre}&sort_by=-imdb_score`;
    return fetchMovies(bestMovieURL, 6, 6);
}













