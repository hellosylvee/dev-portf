import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import NavBar from './patterns/NavBar'
import home from './pages/home'
import about from './pages/about'

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/home' component={home} />
          <Route path='/about' component={about} />
          {/* <Route
            path='/signup'
            render={() => <SignupForm handleSignup={this.handleSignup.bind(this)}/>} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
