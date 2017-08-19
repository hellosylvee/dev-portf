import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from './patterns/NavBar'

import about from './pages/about'
import Home from './pages/Home'
import photography from './pages/photography'
import Projects from './pages/Projects'

import './css/App.css';

class App extends Component {
  render() {

    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={about} />
          <Route path='/photography' component={photography} />
        </Switch>
      </div>
    );
  }
}

export default App;
