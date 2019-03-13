import React, { Component } from 'react';

class SearchMovies extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = (e) => {
    const { searchInput, movieList } = this.props
    e.preventDefault()

    if(searchInput) {
      movieList.filter(movie => {
        let movie_ = String(movie).toLowerCase();
        let search_ = String(searchInput).toLowerCase();
        let bgImg = {
          backgroundImage: 'url(' + movie_.img_url + ')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: '100px',
          height: '100px'
      };
        if(search_ === movie_) {
          return(
            <>
              <div key={movie_.id} className='movie_title'>{movie_.title}</div>
              <div className='movie_img' style={bgImg}></div>
            </>
          )
        }
      })  
    }
  }

  render() {




  return(
    <>
    <form className='search_movies' onSubmit={this.handleSubmit}>
      <input
        type='text'
        className='search_input'
        name='searchInput'
        onChange={this.handleSearchInput}
        placeholder='Search Movies'></input>
      <input type='submit' value='Search'></input>
    </form>

    </>
  )
}

}

export default SearchMovies;
