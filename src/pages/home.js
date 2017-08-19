import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import Intro from '../components/Intro'
import Projects from '../pages/Projects'
import Footer from '../patterns/Footer'



class Home extends Component {
  render() {
    return (
      <Grid centered>
        <Intro/>
        <Projects/>
        <Footer/>
      </Grid>
    );
  }
}

export default Home;
