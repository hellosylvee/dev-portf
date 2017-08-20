import React, { Component } from 'react'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'
import { Grid, Image, Button, Header, Icon } from 'semantic-ui-react'

class About extends Component {

  render() {
    return (
      <Grid stackable>
        <Grid.Row centered>
          <Grid.Column>
            <Image centered shape='circular' src='/assets/images/profile.jpg' size='small' />
            <Header>Designer & Developer</Header>

            <SocialMedia/>

            <p>
              I am a product designer and developer in NYC, disrupting traditional business practices and designing state-of-the-art applications that involved user research, interaction design, and HTML/CSS prototyping. I am driven to design and build dynamic UIs through photoshop/sketch and code in JavaScript and frameworks, Ruby on Rails, React/Redux, and HTML5/CSS3.
            </p>
            <p>
              I am Design Mentor at DesignLab and Springboard, and now currently looking for full-time positions as a full-stack Product Designer in SF and NYC.
            </p>


            <Header>Let's connect!</Header>

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
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default About;
