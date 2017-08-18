import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import Subnav from '../patterns/Subnav'
import kafsc from '../projects/kafsc'
import nexion from '../projects/nexion'
import rxemporium from '../projects/rxemporium'
import nqdesktop from '../projects/nqdesktop'
import nqmobile from '../projects/nqmobile'
import nqwebhost from '../projects/nqwebhost'
import uxdc from '../projects/uxdc'
import wanderant from '../projects/wanderant'
import moultoncampaign from '../projects/moultoncampaign'

class Projects extends Component {
  render() {
    return (
      <Grid.Row centered columns={10}>
        <Subnav/>
        {/* <Switch>
          <Route path='/home/kafsc' component={kafsc} />
          <Route path='/home/allstate' component={nexion} />
          <Route path='/home/express-scripts' component={rxemporium} />
          <Route path='/home/nqdesktop' component={nqdesktop} />
          <Route path='/home/nqmobile' component={nqmobile} />
          <Route path='/home/nqwebhost' component={nqwebhost} />
          <Route path='/home/uxdc' component={uxdc} />
          <Route path='/home/wanderant' component={wanderant} />
          <Route path='/home/moultoncampaign' component={moultoncampaign} />
        </Switch> */}
      </Grid.Row>
    );
  }
}

export default Projects;
