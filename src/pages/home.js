import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import Intro from '../components/intro'
import Projects from '../components/projects'
import Makings from '../components/makings'
import Works from '../components/works'
import Posts from '../components/posts'
import Mentoring from '../components/mentoring'
// import Speakings from '../components/speakings'
import Handletterings from '../components/handletterings'
import Footer from '../patterns/Footer'



class home extends Component {
  render() {
    return (
      <Grid stackable>
        <Intro/>
        <Projects/>
        <Makings/>
        <Works/>
        <Posts/>
        <Mentoring/>
        {/* <Speakings/> */}
        <Handletterings/>
        <Footer/>
      </Grid>
    );
  }
}

export default home;
