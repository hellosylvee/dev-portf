import React from 'react';
import { Grid, Header } from 'semantic-ui-react'

const Footer = () => {
  const spanStyle={
    paddingRight: '10px'
  }
  return (
    <Grid.Row>
      <Header as='h6' className='current-year'>
        &#169; <span style={spanStyle}>2017 Sylvee Lee</span> Designed with React
      </Header>
    </Grid.Row>
  );
}

export default Footer;
