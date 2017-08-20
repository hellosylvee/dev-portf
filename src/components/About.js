import React, { Component } from 'react'

import { Grid, Image, Button, Header, Icon } from 'semantic-ui-react'

class About extends Component {

  render() {
    return (
      <Grid stackable>
        <Grid.Row centered>
          <Grid.Column>
            <Image centered shape='circular' src='/assets/images/profile.jpg' size='small' />
            <Header>Designer & Developer</Header>
            <div>
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
            </div>
            <div>
              I am a product designer and developer in NYC, disrupting traditional business practices and designing state-of-the-art applications that involved user research, interaction design, and HTML/CSS prototyping. I am driven to design and build dynamic UIs through photoshop/sketch and code in JavaScript and frameworks, Ruby on Rails, React/Redux, and HTML5/CSS3.
            </div>
            <div>
              I am Design Mentor at DesignLab and Springboard, and now currently looking for full-time positions as a full-stack Product Designer in SF and NYC.
            </div>
            <div>
              <Icon className='animated infinite tada' color='violet' name='send' />
              <div>Let's connect!</div>
              <Button color='violet'>
                <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/sylviaclee/'>
                  <Icon name='linkedin' /> LinkedIn
                </a>
              </Button>
              <Button color='violet'>
                <a target='_blank' rel='noopener noreferrer' href='https://mail.google.com/mail/?view=cm&fs=1&to=hellosylvee@gmail.com&su=Hello%20Sylvee&body=I%20am%20reaching%20to%20from%20your%20website.%20'>
                  <Icon name='google' /> Email
                </a>
              </Button>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default About;
