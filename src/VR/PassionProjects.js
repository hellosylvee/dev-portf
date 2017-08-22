import React from 'react';
// import { Link, Route } from 'react-router-dom'
import { Grid, Image } from 'semantic-ui-react'

const PassionProjects = ({ match }) => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Image bordered centered
          src='assets/images/VR/tv.png'
          as='a' size='large'
          href='https://nyan-cat-tv.glitch.me/'
          target='_blank'
        />

      </Grid.Column>
      <Grid.Column>
        <Image
          bordered centered
          src='assets/images/dino.jpg'
          name='dinosaur skeleton'
          size='large' />
      </Grid.Column>
      <Grid.Column>
        <Image
          bordered centered
          src='assets/images/dino.jpg'
          name='dinosaur skeleton'
          size='large' />
      </Grid.Column>
    </Grid.Row>
  );
}

export default PassionProjects;
