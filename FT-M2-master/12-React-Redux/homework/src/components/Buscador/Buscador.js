import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavourite, getMovies } from "../../actions";



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {!this.props.movies? (
            <h2> No hay peliculas cargadas </h2>
            ) : (
              this.props.movies && this.props.movies.map((movie) => {
                return (
                  <li key={movie.imdbID}>
                    <Link to ={`/movie/${movie.imdbID}`}> {movie.Title} </Link>
                    <button
                      onClick={()=>
                        this.props.addMovieFavourite({
                          title: movie.Title,
                          id: movie.imdbID,
                        })
                      }
                    >
                      {" "}
                      FAV{" "}
                    </button>
                  </li>
                );
              })
            )}  
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

function mapDispachToPops(dispatch) {
  return {
    addMovieFavourite: (movie) => dispatch(addMovieFavourite(movie)),
    getMovies: (title) => dispatch(getMovies(title)),
  };
} 

export default connect(mapStateToProps, mapDispachToPops)(Buscador);
