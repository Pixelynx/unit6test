import Movies from '../movies.jsx';
import { fetchMovies } from '../../action/movieActions.js';

export const mapStateToProps = (state) => {
  return ({
    movies: state.movies
  })
}

export const mapDispatchToProps = (dispatch) => {
  return {
      fetchMovies: (movies) => dispatch(fetchMovies(movies))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
