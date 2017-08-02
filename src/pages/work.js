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
          <Route path='/work/kafsc' component={kafsc} />
          <Route path='/work/allstate' component={nexion} />
          <Route path='/work/express-scripts' component={rxemporium} />
          <Route path='/work/nqdesktop' component={nqdesktop} />
          <Route path='/work/nqmobile' component={nqmobile} />
          <Route path='/work/nqwebhost' component={nqwebhost} />
          <Route path='/work/uxdc' component={uxdc} />
          <Route path='/work/wanderant' component={wanderant} />
          <Route path='/work/moultoncampaign' component={moultoncampaign} />
        </Switch>
      </div>
    );
  }
}

export default work;
