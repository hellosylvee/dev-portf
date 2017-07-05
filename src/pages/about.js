import React, { Component } from 'react';
import { Grid, Image, Header } from 'semantic-ui-react'

class about extends Component {
  render() {
    return (
      <Grid divided='vertically'>
        <Grid.Row centered columns={2}>
          <Header as='h2'>Meet Sylvee</Header>
          <Grid.Column>
            <Image centered shape='circular' src='/assets/images/profile.jpg' size='small' />
            <div>
              A designer turned developer, I am driven to build UIs through dynamic code in JavaScript, Ruby on Rails, React/Redux, and HTML5/CSS3. Previously, I was a product designer, disrupting traditional business practices and designing state-of-the-art applications that involved user research, interaction design, and HTML/CSS prototyping. I am a recent graduate of Flatiron School, and now excited to be challenged, engaged, and inspired as a front-end engineer.
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default about;
