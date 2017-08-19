import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react'

class Footer extends Component {
  render() {
    return (
      <Grid.Row>
        <p className='current-year'>&#169; 2017 Sylvee Lee</p>
      </Grid.Row>
    );
  }
}

export default Footer;
