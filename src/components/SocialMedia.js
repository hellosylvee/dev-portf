import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react'

class SocialMedia extends Component {
  render() {
    return (
      <Grid.Row>
        <a target='_blank'
           rel='noopener noreferrer'
           href='https://www.twitter.com/hellosylvee'>
          <Icon link
                name='twitter'
                color='violet'
                size='big'/></a>

        <a target='_blank'
           rel='noopener noreferrer'
           href='https://www.instagram.com/hellosylvee'>
          <Icon link
                name='instagram'
                color='violet'
                size='big'/></a>

        <a target='_blank'
           rel='noopener noreferrer'
           href='https://www.dribbble.com/hellosylvee'>
          <Icon link
                name='dribble'
                color='violet'
                size='big'/></a>

        <a target='_blank'
           rel='noopener noreferrer'
           href='https://www.medium.com/@hellosylvee'>
           <Icon link
                 name='medium'
                 color='violet'
                 size='big'/></a>
      </Grid.Row>
    );
  }
}

export default SocialMedia;
