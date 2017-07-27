import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Subnav from '../patterns/Subnav'
import kafsc from '../work/kafsc'
import nexion from '../work/nexion'
import rxemporium from '../work/rxemporium'
import nqdesktop from '../work/nqdesktop'
import nqmobile from '../work/nqmobile'
import nqwebhost from '../work/nqwebhost'
import uxdc from '../work/uxdc'
import wanderant from '../work/wanderant'
import moultoncampaign from '../work/moultoncampaign'

class work extends Component {
  render() {
    return (
      <div>
        <Subnav />
        <Switch>
          <Route exact path='/work/kafsc' component={kafsc} />
          <Route exact path='/work/nexion' component={nexion} />
          <Route exact path='/work/rxemporium' component={rxemporium} />
          <Route exact path='/work/nqdesktop' component={nqdesktop} />
          <Route exact path='/work/nqmobile' component={nqmobile} />
          <Route exact path='/work/nqwebhost' component={nqwebhost} />
          <Route exact path='/work/uxdc' component={uxdc} />
          <Route exact path='/work/wanderant' component={wanderant} />
          <Route exact path='/work/moultoncampaign' component={moultoncampaign} />
        </Switch>
      </div>
    );
  }
}

export default work;
