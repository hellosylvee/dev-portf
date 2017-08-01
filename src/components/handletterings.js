import React, { Component } from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react'

class Handletterings extends Component {
  render() {
    return (
      <Grid.Row className='row-section' centered columns={4}>
        <Header className='row-section-title'>I am a (novice) <span className='accent-color'>Hand Letterer</span>.</Header>
        <Header className='row-section-text'>I'm practicing the art of handlettering on<a className='social-btn-width'
            target='_blank' rel='noopener noreferrer' href='https://instagram.com/hellosylvee'>
            <Icon link name='instagram' color='blue' size='large'/>
          </a>.
        </Header>
      </Grid.Row>
    );
  }
}

export default Handletterings;
