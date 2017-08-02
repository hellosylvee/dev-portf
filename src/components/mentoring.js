import React, { Component } from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react'

class Mentoring extends Component {
  render() {
    return (
      <Grid.Row className='row-section' centered columns={4}>
        <Header className='row-section-title'>I am a <span className='accent-color'>Mentor</span>.</Header>
        <Header className='row-section-text'>Read what my students say on
          <a className='social-btn-width'
            target='_blank' rel='noopener noreferrer' href='http://trydesignlab.com/hellosylvee'>
            <Icon link name='arrow circle outline right' color='violet' size='large'/>
          </a>.
        </Header>
      </Grid.Row>
    );
  }
}

export default Mentoring;
