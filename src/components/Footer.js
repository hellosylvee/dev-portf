import React, { Component } from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react'

class Footer extends Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column>
          <a
            target='_blank' rel='noopener noreferrer' href='https://www.twitter.com/hellosylvee'>
            <Icon link name='twitter' color='violet' size='big'/>
          </a>
          <a
            target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/hellosylvee'>
            <Icon link name='instagram' color='violet' size='big'/>
          </a>
          <a
            target='_blank' rel='noopener noreferrer' href='https://www.dribbble.com/hellosylvee'>
            <Icon link name='dribble' color='violet' size='big'/>
          </a>
          <a
            target='_blank' rel='noopener noreferrer' href='https://www.medium.com/@hellosylvee'>
            <Icon link name='medium' color='violet' size='big'/>
          </a>
          <Header className='current-year'>&#169; 2017 Sylvee Lee</Header>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Footer;
