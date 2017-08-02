import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from './patterns/NavBar'
import home from './pages/home'
// import design_process from './pages/design_process'
import photography from './pages/photography'
import about from './pages/about'
import work from './pages/work'

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={home} />
          {/* <Route path='/home' component={home} /> */}
          <Route path='/work' component={work} />
          <Route path='/about' component={about} />
          {/* <Route path='/process' component={design_process} /> */}
          <Route path='/photography' component={photography} />
        </Switch>
      </div>
    );
  }
}

export default App;
