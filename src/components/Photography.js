import React, { Component } from 'react'
import { Grid, Image, Header} from 'semantic-ui-react'

class Photography extends Component {
  render() {
    return (
      <Grid stackable centered columns={3}>
        <Grid.Row>
          <Header> Photography </Header>
          {/* <p> Taken with Note 4 and Pixel </p> */}
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Image
              bordered centered
              src='assets/images/dino.jpg'
              name='dinosaur skeleton'
              size='medium' />
          </Grid.Column>
          <Grid.Column>
            <Image
              bordered centered
              src='assets/images/wheel.jpg'
              name='ferris wheel'
              size='medium' />
          </Grid.Column>
          <Grid.Column>
            <Image
              bordered centered
              src='assets/images/bird.jpg'
              name='bird'
              size='medium' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Image
              bordered centered
              src='assets/images/postal.jpg'
              name='post office'
              size='medium' />
          </Grid.Column>
          <Grid.Column>
            <Image
              bordered centered
              src='assets/images/bridge.jpg'
              name='brooklyn bridge'
              size='medium' />
          </Grid.Column>
          <Grid.Column>
            <Image
              bordered centered
              src='assets/images/love.jpg'
              name='love sign on water'
              size='medium' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Image
              bordered centered
              src='assets/images/lobsteroll.jpg'
              name='lobster roll'
              size='medium' />
          </Grid.Column>
          <Grid.Column>
            <Image
              bordered centered
              src='assets/images/sign.jpg'
              name='inspirational message'
              size='medium' />
          </Grid.Column>
          <Grid.Column>
            <Image
              bordered centered
              src='assets/images/spice.jpg'
              name='hollywood sign'
              size='medium' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Image
              bordered centered
              src='assets/images/donuts.jpg'
              name='donuts'
              size='medium' />
          </Grid.Column>
          <Grid.Column>
            <Image
              bordered centered
              src='assets/images/ramen.jpg'
              name='ramen'
              size='medium' />
          </Grid.Column>
          <Grid.Column>
            <Image
              bordered centered
              src='assets/images/fire.jpg'
              name='woman breathing fire'
              size='medium' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Photography;
