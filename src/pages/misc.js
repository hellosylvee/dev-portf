import React, { Component } from 'react'

import { Grid, Image, Header} from 'semantic-ui-react'

class process extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row centered columns={3}>
          <Header as='h2'>Meet Sylvee</Header>
          <Grid.Column className='animated fadeIn'>
            <Image centered bordered src='assets/images/dino.jpg' name='bird' size='medium' />
          </Grid.Column>
          <Grid.Column className='animated fadeIn'>
            <Image centered bordered src='assets/images/wheel.jpg' name='bird' size='medium' />
          </Grid.Column>
          <Grid.Column className='animated fadeIn'>
            <Image centered bordered src='assets/images/bird.jpg' name='bird' size='medium' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column className='animated fadeIn'>
            <Image centered bordered src='assets/images/postal.jpg' name='bird' size='medium' />
          </Grid.Column>
          <Grid.Column className='animated fadeIn'>
            <Image centered bordered src='assets/images/bridge.jpg' name='bird' size='medium' />
          </Grid.Column>
          <Grid.Column className='animated fadeIn'>
            <Image centered bordered src='assets/images/fire.jpg' name='bird' size='medium' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column className='animated fadeIn'>
            <Image centered bordered src='assets/images/donuts.jpg' name='bird' size='medium' />
          </Grid.Column>
          <Grid.Column className='animated fadeIn'>
            <Image centered bordered src='assets/images/lookback.jpg' name='bird' size='medium' />
          </Grid.Column>
          <Grid.Column className='animated fadeIn'>
            <Image centered bordered src='assets/images/bnw.jpg' name='bird' size='medium' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column className='animated fadeIn'>
            <Image centered bordered src='assets/images/rainbow.jpg' name='bird' size='medium' />
          </Grid.Column>
          <Grid.Column className='animated fadeIn'>
            <Image centered bordered src='assets/images/sign.jpg' name='bird' size='medium' />
          </Grid.Column>
          <Grid.Column className='animated fadeIn'>
            <Image centered bordered src='assets/images/soulfood.jpg' name='bird' size='medium' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default process;
