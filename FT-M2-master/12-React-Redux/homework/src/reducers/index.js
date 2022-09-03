const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    moviesDetail: {},
    loading: false
}

function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MOVIE_FAVOURITE") {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(action.payload)
        }
    }
    else if (action.type === "GET_MOVIES") {
        return {
          ...state,
          moviesLoaded: action.payload
        }
    }
    else if (action.type === "REMOVE_MOVIE_FAVOURITE") {
        return {
            ...state, 
            moviesFavourites: state.moviesFavourites.filter(movie => movie.id !== action.payload)
        }
    }
    else if (action.type === "GET_DETAILS") {
        return {
            ...state,
            moviesDetail: action.payload,
            loading: false
        }
    }

    else if (action.type === "CLEAR_DETAIL"){
        return {
            ...state,
            moviesDetail: {}
        }
    }
    else return state;
}     

export default rootReducer
