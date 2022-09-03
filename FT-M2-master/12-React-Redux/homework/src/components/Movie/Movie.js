import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail, clearDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

componentDidMount(){
    const movieId = this.props.match.params.id
    this.props.getMovieDetail(movieId)
    
}
componentWillUnmount(){
    this.props.clearDetail()
}

    render() {
        return (
            <div className="movie-detail">
                <h2>{`Titulo: ${this.props.movies.Title}`}</h2>  
                <img src={this.props.movies.Poster} alt='Img no found'/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        movies: state.moviesDetail
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getMovieDetail: id => dispatch(getMovieDetail(id)),
        clearDetail: () => dispatch(clearDetail()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);