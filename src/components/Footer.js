import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react'

class Footer extends Component {
  render() {
    return (
      <Grid.Row>
        <Header className='current-year'>&#169; 2017 Sylvee Lee</Header>
      </Grid.Row>
    );
  }
}

export default Footer;
