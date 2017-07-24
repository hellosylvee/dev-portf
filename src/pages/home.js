import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import Intro from '../components/intro'
import Projects from '../components/projects'
import Makings from '../components/makings'
import Works from '../components/works'
import Posts from '../components/posts'
import Mentoring from '../components/mentoring'
import Speakings from '../components/speakings'
import Handletterings from '../components/handletterings'
import Footer from '../components/footer'

// import PassionIndex from '../passionprojects/PassionIndex'


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
        <Speakings/>
        <Handletterings/>
        <Footer/>
        {/* <Switch>
          <Route path='/signup' render={() => <Link to='/login'>I have an account!</Link>} />
        </Switch> */}
      </Grid>
    );
  }
}

export default home;
