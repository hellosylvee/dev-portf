import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import IntroCard from '../components/intro'
import Projects from '../components/projects'
import Makings from '../components/makings'
import Works from '../components/works'
import Posts from '../components/posts'
import Handletterings from '../components/handletterings'

class home extends Component {
  render() {
    return (
      <Grid>
          <IntroCard/>
          <Projects/>
          <Makings/>
          <Works/>
          <Posts/>
          <Handletterings/>
      </Grid>
    );
  }
}

export default home;
