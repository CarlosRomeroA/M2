const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {} 
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
    else return state;
}     

export default rootReducer
