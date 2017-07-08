import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react'

import Emem from '../projects/Emem'
import IntroCard from '../components/intro-card'

class home extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header as='h1'>Welcome</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column>
            <IntroCard/>
          </Grid.Column>
        </Grid.Row>
        {Emem}
      </Grid>
    );
  }
}

export default home;
