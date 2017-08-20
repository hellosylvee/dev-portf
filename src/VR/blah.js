import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import Subnav from '../patterns/ProjectsNavBar'
import kafsc from '../projects/kafsc'
import nexion from '../projects/nexion'
import rxemporium from '../projects/rxemporium'
import nqdesktop from '../projects/nqdesktop'
import nqmobile from '../projects/nqmobile'
import nqwebhost from '../projects/nqwebhost'
import uxdc from '../projects/uxdc'
import wanderant from '../projects/wanderant'
import moultoncampaign from '../projects/moultoncampaign'

class ProjectsNavBar extends Component {
  render() {
    return (
      <Grid.Row centered columns={10}>
        <Subnav/>
        <Switch>
          <Route path='/kafsc' component={kafsc} />
          <Route path='/allstate' component={nexion} />
          <Route path='/express-scripts' component={rxemporium} />
          <Route path='/nqdesktop' component={nqdesktop} />
          <Route path='/nqmobile' component={nqmobile} />
          <Route path='/nqwebhost' component={nqwebhost} />
          <Route path='/uxdc' component={uxdc} />
          <Route path='/wanderant' component={wanderant} />
          <Route path='/moultoncampaign' component={moultoncampaign} />
        </Switch>
      </Grid.Row>
    );
  }
}

export default ProjectsNavBar;
