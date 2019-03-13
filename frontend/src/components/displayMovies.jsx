import React from 'react';

export const DisplayMovies = ({ movieList }) => {
  return(
    <>
    {movieList ?
      movieList.map(movie => {
        return <div>movie.title</div>
      }) : <p>No movies to list</p> }
    </>
  )
}
