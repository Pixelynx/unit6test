import React, { Component } from 'react';
import axios from 'axios';
import * as util from '../utils/apiCalls.js';
import { DisplayMovies } from './displayMovies.jsx';

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
      <h1>All Movies</h1>
      {movieList ?
        movieList.map(movie => {
          return (
            <>
            <div>{movie.title}</div>
            <img src={movie.img_url} />
            </>
          )
        }) : <p>No movies to list</p> }

      </>
    )
  }
}

export default Movies;
