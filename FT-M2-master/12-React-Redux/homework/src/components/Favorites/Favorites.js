import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import {removeMovieFavourite} from "../../actions";

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {!this.props.movies? <h2>No tienes peliculas favoritas</h2>: this.props.movies.map(movie=>{
            return (
              <div key={movie.id}>
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                <button onClick={()=>this.props.removeMovieFavourite(movie.id)}> X </button>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites
  }
}

function mapDispachToPops(dispatch){
  return{
    removeMovieFavourite: (id)=>dispatch(removeMovieFavourite(id))
  }
}
export default connect(mapStateToProps, mapDispachToPops)(ConnectedList);
