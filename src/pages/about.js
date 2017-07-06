import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Grid, Image, Button, Header, Icon } from 'semantic-ui-react'

class about extends Component {
  render() {
    return (
      <Grid divided='vertically'>
        <Grid.Row centered columns={2}>
          <Header as='h2'>Meet Sylvee</Header>
          <Grid.Column>
            <Image centered shape='circular' src='/assets/images/profile.jpg' size='small' />
            <Header as='h3'>Designer & Developer</Header>
            <div>
              <a className='social-btn-width'
                target='_blank' href='https://www.twitter.com/hellosylvee'>
                <Icon link name='twitter' color='purple' size='big'/>
              </a>
              <a className='social-btn-width'
                target='_blank' href='https://www.instagram.com/hellosylvee'>
                <Icon link name='instagram' color='purple' size='big'/>
              </a>
              <a className='social-btn-width'
                target='_blank' href='https://www.dribbble.com/hellosylvee'>
                <Icon link name='dribble' color='purple' size='big'/>
              </a>
            </div>
            <div>
              A designer turned developer, I am driven to build UIs through dynamic code in JavaScript, Ruby on Rails, React/Redux, and HTML5/CSS3. Previously, I was a product designer, disrupting traditional business practices and designing state-of-the-art applications that involved user research, interaction design, and HTML/CSS prototyping. I am a recent graduate of Flatiron School, and now excited to be challenged, engaged, and inspired as a product designer and front-end engineer.
            </div>
            <div>
              <Button className='contact-btn' color='purple'>
                <a target='_blank' href='https://www.linkedin.com/in/sylviaclee/'>
                  <Icon name='linkedin' /> LinkedIn
                </a>
              </Button>
              <Button className='contact-btn' color='purple'>
                <a target='_blank' href='https://www.twitter.com/hellosylvee'>
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

export default about;
