import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = { }

  componentDidMount() { //component가 mount 되면, 아래 url을 fetch(잡아온다.)
    this._getMovies()
  }

  _renderMoives = () => {
   const movies =  this.state.movies.map((movie) => {
     console.log(movie)
      return <Movie title={movie.title_english} 
                    poster={movie.medium_cover_image} 
                    key={movie.id} 
                    genres={movie.genres}
                    synopsis={movie.synopsis} />;
    })
    return movies
  };

   _getMovies = async () => {
   const movies =  await this._callApi()
   this.setState({
     movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const { movies } = this.state;
    return( 
    <div className={movies ? "App" : "App--loading"}>
      {movies ? this._renderMoives() : 'Loading'}
    </div>
    );
  }
}

export default App;