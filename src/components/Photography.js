import React, { Component } from 'react'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'

import { Grid, Image, Header} from 'semantic-ui-react'

class Photography extends Component {
  render() {
    return (
      <Grid stackable centered columns={1}>
        <Grid.Row>
          <Header as='h2'> Photography </Header>
        </Grid.Row>
        <p> Taken with Pixel </p>
        <Grid.Row>
          <Grid.Column>
            <Image
              bordered centered
              src='assets/images/dino.jpg'
              name='dinosaur skeleton'
              size='massive' />

            <Image
              bordered centered
              src='assets/images/chihuly.jpg'
              name='ferris wheel'
              size='massive' />

            <Image
              bordered centered
              src='assets/images/bird.jpg'
              name='bird'
              size='massive' />

            <Image
              bordered centered
              src='assets/images/postal.jpg'
              name='post office'
              size='massive' />

            <Image
              bordered centered
              src='assets/images/bridge.jpg'
              name='brooklyn bridge'
              size='massive' />

            <Image
              bordered centered
              src='assets/images/love.jpg'
              name='love sign on water'
              size='massive' />

            <Image
              bordered centered
              src='assets/images/whale.jpg'
              name='lobster roll'
              size='massive' />

            <Image
              bordered centered
              src='assets/images/starbucks.jpg'
              name='inspirational message'
              size='massive' />

            <Image
              bordered centered
              src='assets/images/spice.jpg'
              name='hollywood sign'
              size='massive' />

            <Image
              bordered centered
              src='assets/images/donuts.jpg'
              name='donuts'
              size='massive' />

            <Image
              bordered centered
              src='assets/images/ramen.jpg'
              name='ramen'
              size='massive' />

            <Image
              bordered centered
              src='assets/images/fire.jpg'
              name='woman breathing fire'
              size='massive' />
          </Grid.Column>
        </Grid.Row>
        <SocialMedia/>
        <Footer/>
      </Grid>
    );
  }
}

export default Photography;
