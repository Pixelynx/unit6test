export const mapStateToProps = (state) => {
  return ({
    allMovies: state.allMovies
  })
}

export const mapDispatchToProps = (dispatch) => {
  return {
      fetchMovies: (movies) => dispatch(fetchMovies(movies))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
