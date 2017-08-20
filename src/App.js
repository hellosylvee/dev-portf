import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Photography from './components/Photography'

import './css/App.css';

class App extends Component {
  render() {

    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
          <Route path='/photography' component={Photography} />
        </Switch>
      </div>
    );
  }
}

export default App;
