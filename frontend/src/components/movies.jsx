import React, { Component } from 'react';
import axios from 'axios';
import * as util from '../utils/apiCalls.js';
import { DisplayMovies } from './displayMovies.jsx';

import '../css/movies.css';

class Movies extends Component {
  state = {
    movieList: [],
    loadingList: 'Loading...'
  }

  componentDidMount() {
    this.fetchPosts()

  }

  fetchPosts() {
    axios.get('/movies')
    .then(res => {
      this.setState({ movieList: res.data.body })
    })
  }

  render() {
    const { movieList } = this.state
    console.log(this.state.movieList)

    return(
      <>
      <div className='movie_body'>
        <form className='search_movies'>
          <input type='text' placeholder='Search Movies'></input>
          <input type='submit' value='Search'></input>
        </form>
      <h1>All Movies</h1>
      {movieList ?
        movieList.map(movie => {
          let bgImg = {
            backgroundImage: 'url(' + movie.img_url + ')',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '100px',
            height: '100px'
          }
          return (
            <>
              <div className='movie_title'>{movie.title}</div>
              <div className='movie_img' style={bgImg}></div>
            </>
          )
        }) : <p>No movies to list</p> }
      </div>
      </>
    )
  }
}

export default Movies;
