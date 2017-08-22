import React from 'react';
import { Grid, Image } from 'semantic-ui-react'

const Aframe = () => {
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
        <Image bordered centered
          src='assets/images/VR/winter-wonderland.png'
          as='a' size='large'
          href='https://winter-wonderland.glitch.me/'
          target='_blank'
        />
      </Grid.Column>
      <Grid.Column>
        <Image bordered centered
          src='assets/images/VR/flower-pots.png'
          as='a' size='large'
          href='https://flower-pots.glitch.me/'
          target='_blank'
        />
      </Grid.Column>
    </Grid.Row>
  );
}

export default Aframe;
