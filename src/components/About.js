import React, { Component } from 'react'
import SocialMedia from '../components/SocialMedia'
import { Grid, Image, Button, Header, Icon } from 'semantic-ui-react'

class About extends Component {

  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Image centered shape='circular' src='/assets/images/profile.jpg' size='small' />
            <Header as='h2'>Sylvee Lee</Header>
            <SocialMedia/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header as='h3' textAlign='left'>
              I am a designer and developer in NYC, disrupting traditional business practices and designing state-of-the-art applications that involved user research, interaction design, and HTML/CSS prototyping. I am driven to design and build dynamic UIs through photoshop/sketch, JavaScript and frameworks, and HTML5/CSS3.
            </Header>
            <Header as='h3' textAlign='left'>
              I have a tremendous interest in VR/AR and enjoy working in a-frame, a webVR framework.
            </Header>
            <Header as='h3' textAlign='left'>
              I am a Design Mentor at DesignLab and Springboard, and now currently looking for positions as a full-stack Product Designer in SF and NYC.
            </Header>
          </Grid.Column>
        </Grid.Row>


        <Grid.Row>
          <Button color='violet'>
            <a target='_blank'
               rel='noopener noreferrer'
               href='https://www.linkedin.com/in/sylviaclee/'>
              <Icon name='linkedin' /> LinkedIn
            </a>
          </Button>
          <Button color='violet'>
            <a target='_blank'
               rel='noopener noreferrer'
               href='https://mail.google.com/mail/?view=cm&fs=1&to=hellosylvee@gmail.com&su=Hello%20Sylvee&body=I%20am%20reaching%20to%20from%20your%20website.%20'>
              <Icon name='google' /> Email
            </a>
          </Button>
        </Grid.Row>
      </Grid>
    );
  }
}

export default About;
