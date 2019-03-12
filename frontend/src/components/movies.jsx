import React, { Component } from 'react';

class Movies extends Component {

  componentDidMount() {
    this.props.fetchMovies()
  }

  render() {
    console.log(this.props)

    return(
      <div>Hello</div>
    )
  }
}

export default Movies;
