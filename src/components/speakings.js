import React, { Component } from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react'

class Speakings extends Component {
  render() {
    return (
      <Grid.Row className='row-section' centered columns={4}>
        <Header className='row-section-title'>I am a <span className='accent-color'>Speaker</span>.</Header>
        <Header className='row-section-text'>I talk about code and design.<br/>
        <span className='grey-text'>Need a speaker? Let's talk! </span><a className='social-btn-width'
            target='_blank' rel='noopener noreferrer' href='https://mail.google.com/mail/?view=cm&fs=1&to=hellosylvee@gmail.com&su=Hello%20Sylvee&body=I%20am%20reaching%20to%20you%20for%20a%20speaking%20opportunity.%20'>
            <Icon link name='mail outline' color='violet' size='large'/>
          </a>.
        </Header>
      </Grid.Row>
    );
  }
}

export default Speakings;
