import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from './patterns/NavBar'
// import Subnav from './patterns/Subnav'
// import Intro from './components/intro'

import home from './pages/home'
// import design_process from './pages/design_process'
import photography from './pages/photography'
import about from './pages/about'
import Projects from './pages/Projects'
import kafsc from './projects/kafsc'

// import kafsc from '../projects/kafsc'
import nexion from './projects/nexion'
import rxemporium from './projects/rxemporium'
import nqdesktop from './projects/nqdesktop'
import nqmobile from './projects/nqmobile'
import nqwebhost from './projects/nqwebhost'
import uxdc from './projects/uxdc'
import wanderant from './projects/wanderant'
import moultoncampaign from './projects/moultoncampaign'

import './css/App.css';

class App extends Component {
  render() {

    return (
      <div>
        <NavBar />
        {/* <Intro/> */}
        {/* <Subnav /> */}
        <Switch>
          <Route exact path='/' component={home} />
          <Route exact path='/projects' component={home} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={about} />
          <Route path='/photography' component={photography} />
          <Route path='/home/kafsc' component={kafsc} />
          {/* <Route path='/home/allstate' component={nexion} />
          <Route path='/home/express-scripts' component={rxemporium} /> */}
          <Route path='/home/nqdesktop' component={nqdesktop} />
          <Route path='/home/nqmobile' component={nqmobile} />
          <Route path='/home/nqwebhost' component={nqwebhost} />
          <Route path='/home/uxdc' component={uxdc} />
          <Route path='/home/wanderant' component={wanderant} />
          <Route path='/home/moultoncampaign' component={moultoncampaign} />
          <Route path='/projects/kafsc' component={kafsc} />
        </Switch>
      </div>
    );
  }
}

export default App;
