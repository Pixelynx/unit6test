import React from 'react';

export const SearchMovies = ({ search, movies }) => {
  // Need better way to display movies in func-comp -- bg style
  return(
    <>
    {search ?
      movies.filter(movie => {
        let movie_ = String(movie).toLowerCase();
        let search_ = String(search).toLowerCase();
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
      }) : <p className='test'>Doesn't Exist</p>
    }
    </>
  )
}
