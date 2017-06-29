import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react'

import projectblock from '../components/projectblock'

class home extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header as='h1'>Welcome</Header>
          </Grid.Column>
        </Grid.Row>
        {projectblock}
      </Grid>
    );
  }
}

export default home;
