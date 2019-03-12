import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/homepage.jsx';
import NavBar from './components/navBar.jsx';


class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Route exact path='/' component={Homepage} />
      </>
    );
  }
}

export default App;
