import React, { Component } from 'react';
import { Grid, Header, Image, Button, Icon } from 'semantic-ui-react'

import projectblock from '../components/projectblock'
import IntroCard from '../components/intro-card'

class home extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header as='h1'>Welcome</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column>
            <IntroCard/>
          </Grid.Column>
        </Grid.Row>
        {projectblock}
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <Image shape='circular' src='/assets/images/profile.jpg' size='small' />
          </Grid.Column>
          <Grid.Column>
            <Header as='h3'>Sylvee Lee</Header>
            <div>
              A designer turned developer, I am driven to build UIs through dynamic code in JavaScript, Ruby on Rails, React/Redux, and HTML5/CSS3. Previously, I was a product designer, disrupting traditional business practices and designing state-of-the-art applications that involved user research, interaction design, and HTML/CSS prototyping. I am a recent graduate of Flatiron School, and now excited to be challenged, engaged, and inspired as a product designer and front-end engineer.
            </div>
            <div>
              <Button color='linkedin'>
                <Icon name='linkedin' /> LinkedIn
              </Button>
              <Button color='grey'>
                <Icon name='github' /> Github
              </Button>
              <Button color='teal'>
                <Icon name='google' /> Email
              </Button>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default home;
