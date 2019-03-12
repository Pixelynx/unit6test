import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/navBar.css';

class NavBar extends Component {
  render() {
    return(
      <>
        <div className='nav_container'>
          <nav className='nav'>
            <Link className='movie_by_id' to='/movies/:id'>Movie by id</Link>
            <Link className='movie_by_genre' to='/movies/byGenre'>Genre</Link>
          </nav>
        </div>
      </>
    )
  }
}

export default NavBar;
