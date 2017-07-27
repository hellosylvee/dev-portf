import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { Grid, Icon, Header } from 'semantic-ui-react'

class Works extends Component {
  render() {
    return (
      <Grid.Row className='row-section' centered columns={4}>
        <Header className='row-section-title'>I am a <span className='accent-color'>Product Designer</span>.</Header>
        <Header className='row-section-text'>I design products for people like
          <a>
            <Link to='/work'>
              <Icon link name='users' color='blue' size='large'/>
            </Link>
          </a>.
        </Header>
      </Grid.Row>
    );
  }
}

export default Works;
