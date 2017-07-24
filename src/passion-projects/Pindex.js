import React, { Component } from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react'

class Pindex extends Component {
  render() {
    return (
      <Grid.Row className='row-section' centered columns={4}>
        <Header className='row-section-title'>I am a <span className='accent-color'>Thought Leader</span>.</Header>
        <Header className='row-section-text'>I write about code and design on <a className='social-btn-width'
            target='_blank' rel='noopener noreferrer' href='https://www.medium.com/@hellosylvee'>
            <Icon link name='medium' color='blue' size='large'/>
          </a>.
        </Header>
      </Grid.Row>
    );
  }
}

export default Pindex;
