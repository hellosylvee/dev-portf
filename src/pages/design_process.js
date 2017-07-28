import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Grid, Image, Header, Segment } from 'semantic-ui-react'
import ProcessNav from '../patterns/ProcessNav'

import explore from '../process/explore'
import design from '../process/design'
import validate from '../process/validate'
import evaluate from '../process/evaluate'


class design_process extends Component {
  render() {
    return (
      <div>
        <ProcessNav/>
        <Switch>
          <Route path='/process/explore' component={explore} />
          <Route path='/process/design' component={design} />
          <Route path='/process/validate' component={validate} />
          <Route path='/process/evaluate' component={evaluate} />
        </Switch>
      </div>
    );
  }
}

export default design_process;
