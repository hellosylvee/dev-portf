import React from 'react';
import { Grid, Header } from 'semantic-ui-react'

const Writings = () => {
  return (
    <Grid.Row>
      <Grid.Column>
        <div>
          <Header>
            <a target='_blank' rel='noopener noreferrer'
               href='https://medium.com/@hellosylvee/a-look-into-virtual-reality-7b23fc07b617'>
              A Look Into Virtual Reality
            </a>
          </Header>
        </div>
      </Grid.Column>
      <Grid.Column>
        <Header>
          <a target='_blank' rel='noopener noreferrer'
             href='https://medium.com/@hellosylvee/a-further-look-into-virtual-reality-ca83a9a7e86f'>
            A Further Look Into Virtual Reality Part II
          </a>
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Header>
          <a target='_blank' rel='noopener noreferrer'
             href='https://medium.com/@hellosylvee/learn-three-js-in-three-steps-ac126cc24284'>
            Learn Three.js in 3 Steps
          </a>
        </Header>
      </Grid.Column>
    </Grid.Row>
  );
}

export default Writings;
