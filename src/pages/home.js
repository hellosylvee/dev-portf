import React, { Component } from 'react';
import { Grid, Header, Image } from 'semantic-ui-react'

import Emem from '../projects/Emem'
import IntroCard from '../components/intro-card'

class home extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <IntroCard/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <Image centered bordered src='assets/images/dino.jpg' name='bird' size='medium' />
          </Grid.Column>
          <Grid.Column>
            <Image centered bordered src='assets/images/dino.jpg' name='bird' size='medium' />
          </Grid.Column>
          <Grid.Column>
            <Image centered bordered src='assets/images/dino.jpg' name='bird' size='medium' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column>
            express scripts
          </Grid.Column>
          <Grid.Column>
            allstate
          </Grid.Column>
          <Grid.Column>
            pivot pong
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column>
            nasdaq IR
          </Grid.Column>
          <Grid.Column>
            nasdaq mobile
          </Grid.Column>
          <Grid.Column>
            nasdaq webhost
          </Grid.Column>
        </Grid.Row>
        {Emem}
      </Grid>
    );
  }
}

export default home;
