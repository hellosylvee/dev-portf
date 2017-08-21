import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react'

import Intro from '../components/Intro'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'
import VrProjects from '../VR/VrProjects'
import PassionProjects from '../VR/PassionProjects'
import Aframe from '../VR/Aframe'
import Writings from '../VR/Writings'

class Home extends Component {
  render() {

    return (
      <Grid stackable centered columns={3}>
        <Intro/>

        <Header>Design</Header>
        <VrProjects/>

        <Header>Passion Projects</Header>
        <PassionProjects/>

        <Header>Development</Header>
        <Aframe/>

        <Header>Medium Posts</Header>
        <Writings/>
        <SocialMedia/>
        <Footer/>
      </Grid>
    );
  }
}

export default Home;
