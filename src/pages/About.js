import React, { Component } from 'react'
import SocialMedia from '../components/SocialMedia'
import { Grid, Image, Header, Icon } from 'semantic-ui-react'

class About extends Component {

  render() {
    return (
      <Grid stackable centered columns={3}>
        <Grid.Row>
          <Header as='h2'> About </Header>
        </Grid.Row>
        <p> Hello and Welcome! </p>
        <Grid.Row>
          <Grid.Column>
            <Image className='animated rollIn' centered shape='circular' src='/assets/images/profile.jpg' size='small' />
            <Header as='h2'>Sylvee Lee</Header>
            <SocialMedia/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header as='h3' textAlign='left'>
              I am a designer and developer in New York City, disrupting traditional business practices and designing state-of-the-art applications that involved user research, interaction design, and HTML/CSS/JS prototyping.
            </Header>
            <Header as='h3' textAlign='left'>
              I have a tremendous interest in VR/AR and enjoy working in a-frame, a webVR framework.
            </Header>
            <Header as='h3' textAlign='left'>
              I am a Design Mentor at DesignLab and Springboard, and now currently looking for positions as a full-stack Product Designer in SF and NYC.
            </Header>
            <Header as='h3' textAlign='center'>Let's connect!</Header>
          </Grid.Column>
        </Grid.Row>


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
             href='https://www.linkedin.com/in/sylviaclee/'>
            <Icon link
                  name='linkedin'
                  color='violet'
                  size='big'/></a>

          <a target='_blank'
             rel='noopener noreferrer'
             href='https://mail.google.com/mail/?view=cm&fs=1&to=hellosylvee@gmail.com&su=Hello%20Sylvee&body=I%20am%20reaching%20out%20to%20you%20from%20your%20website.%20'>
            <Icon link
                  name='send'
                  color='violet'
                  size='big'/></a>
        </Grid.Row>
      </Grid>
    );
  }
}

export default About;
