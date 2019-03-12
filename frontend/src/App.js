import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/homepage.jsx';
import NavBar from './components/navBar.jsx';
import Movies from './components/movies.jsx';


class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Route exact path='/' component={Homepage} />
        <Route exact path='/movies' component={Movies} />
      </>
    );
  }
}

export default App;
