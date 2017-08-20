import React from 'react';
import { Grid, Image } from 'semantic-ui-react'

const VrProjects = () => {
  return (
    <Grid.Row>
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

export default VrProjects;
