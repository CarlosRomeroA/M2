export const ADD_MOVIE_FAVOURITE = "ADD_MOVIE_FAVOURITE";

export function addMovieFavourite(payload) {
    return {
        type: "ADD_MOVIE_FAVOURITE",
        payload
    }
}

export function removeMovieFavourite(payload) {
    return {
        type: "REMOVE_MOVIE_FAVOURITE",
        payload
    }
}

export function clearDetail() {
    return {
        type: "CLEAR_DETAIL"
    }
}

export function getMovies(titulo) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=e6432ecd&s=${titulo}`)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: "GET_MOVIES",
                payload: res.Search
            })
        })
    } 
}

export function getMovieDetail(id) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=e6432ecd&i=${id}`)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: "GET_DETAILS",
                payload: res
            })
        })
    }

}

