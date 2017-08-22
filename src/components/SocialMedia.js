import React from 'react';
import { Grid, Icon } from 'semantic-ui-react'

const SocialMedia = () => {
  const socialStyle = {
    marginTop: '24px'
  }

  return (
    <Grid.Row style={socialStyle}>
      <a target='_blank'
         rel='noopener noreferrer'
         href='https://www.github.com/hellosylvee'>
        <Icon link
              name='github'
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

export default SocialMedia;
