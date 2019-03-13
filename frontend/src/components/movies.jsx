import React, { Component } from 'react';
import axios from 'axios';
import * as util from '../utils/apiCalls.js';
import { DisplayMovies } from './displayMovies.jsx';
import { SearchMovies } from './searchMovies.jsx';

import '../css/movies.css';

class Movies extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    movieList: [],
    searchInput: ''
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

  handleSearchInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()


  }

  render() {
    const { movieList } = this.state
    console.log(this.state.searchInput)

    return(
      <>
      <div className='movie_body'>
        <form className='search_movies' onSubmit={this.handleSubmit}>
          <input
            type='text'
            className='search_input'
            name='searchInput'
            onChange={this.handleSearchInput}
            placeholder='Search Movies'></input>
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
              <div key={movie.id} className='movie_title'>{movie.title}</div>
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
