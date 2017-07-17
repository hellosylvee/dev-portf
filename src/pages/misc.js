import React, { Component } from 'react'

import { Grid, Image, Header} from 'semantic-ui-react'

class process extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row centered columns={3}>
          <Header as='h1' className='misc-title animated fadeInDown'>Photography</Header>
          <div className='small-text'>Taken with Note 4</div>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/dino.jpg' name='dinosaur skeleton' floated='right' size='medium' />
          </Grid.Column>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/wheel.jpg' name='ferris wheel' size='medium' />
          </Grid.Column>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/bird.jpg' name='bird' floated='left' size='medium' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/postal.jpg' name='post office' floated='right' size='medium' />
          </Grid.Column>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/bridge.jpg' name='brooklyn bridge' size='medium' />
          </Grid.Column>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/fire.jpg' name='woman breathing fire' floated='left' size='medium' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/donuts.jpg' name='donuts' floated='right' size='medium' />
          </Grid.Column>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/lookback.jpg' name='street sign' size='medium' />
          </Grid.Column>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/bnw.jpg' name='street in black and white' floated='left' size='medium' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/rainbow.jpg' name='rainbow' floated='right' size='medium' />
          </Grid.Column>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/sign.jpg' name='inspirational message' size='medium' />
          </Grid.Column>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/soulfood.jpg' name='soul food' floated='left' size='medium' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default process;
