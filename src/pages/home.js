import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import Intro from '../components/intro'
import Projects from '../components/projects'
import Makings from '../components/makings'
import Works from '../components/works'
import Posts from '../components/posts'
import Mentoring from '../components/mentoring'
import Handletterings from '../components/handletterings'

class home extends Component {
  render() {
    return (
      <Grid>
          <Intro/>
          <Projects/>
          <Makings/>
          <Works/>
          <Posts/>
          <Mentoring/>
          <Handletterings/>
      </Grid>
    );
  }
}

export default home;
