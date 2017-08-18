import React, { Component } from 'react';
import { Grid, Image, Header, Icon } from 'semantic-ui-react'

import Intro from '../components/intro'
import Projects from '../pages/Projects'
import Mentoring from '../components/mentoring'
import Handletterings from '../components/handletterings'
import Subnav from '../patterns/Subnav'
import Footer from '../patterns/Footer'



class home extends Component {
  render() {
    return (
      <Grid stackable>
        <Grid.Row className='row-section' centered columns={3}>
          <Intro/>
        </Grid.Row>
        <Projects/>
        <Footer/>
      </Grid>
    );
  }
}

export default home;
