import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from './patterns/NavBar'
import home from './pages/home'
import design_process from './pages/design_process'
import misc from './pages/misc'
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
          <Route path='/process' component={design_process} />
          <Route path='/misc' component={misc} />
        </Switch>
      </div>
    );
  }
}

export default App;
