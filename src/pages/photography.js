import React, { Component } from 'react'

import { Grid, Image, Header} from 'semantic-ui-react'
import Footer from '../patterns/Footer'
class photography extends Component {
  render() {
    return (
      <Grid stackable>
        <Grid.Row centered columns={3}>
          <Header as='h1' className='misc-title animated fadeInDown'>Photography</Header>
          <div className='small-text'>Taken with Note 4 and Pixel</div>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/dino.jpg' name='dinosaur skeleton' size='medium' />
          </Grid.Column>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/wheel.jpg' name='ferris wheel' size='medium' />
          </Grid.Column>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/bird.jpg' name='bird' size='medium' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/postal.jpg' name='post office' size='medium' />
          </Grid.Column>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/bridge.jpg' name='brooklyn bridge' size='medium' />
          </Grid.Column>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/love.jpg' name='love sign on water' size='medium' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/lobsteroll.jpg' name='lobster roll' size='medium' />
          </Grid.Column>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/sign.jpg' name='inspirational message' size='medium' />
          </Grid.Column>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/spice.jpg' name='hollywood sign' size='medium' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/donuts.jpg' name='donuts' size='medium' />
          </Grid.Column>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/ramen.jpg' name='ramen' size='medium' />
          </Grid.Column>
          <Grid.Column className='misc-photo animated rollIn'>
            <Image centered bordered src='assets/images/fire.jpg' name='woman breathing fire' size='medium' />
          </Grid.Column>
        </Grid.Row>
        <Footer/>
      </Grid>
    );
  }
}

export default photography;
