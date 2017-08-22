import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react'

import Intro from '../components/Intro'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'
// import VrProjects from '../VR/VrProjects'
// import PassionProjects from '../VR/PassionProjects'
import Aframe from '../VR/Aframe'
import Writings from '../VR/Writings'

class Home extends Component {
  render() {
    const projectStyle = {
      maxWidth: '1440px',
      margin: '0 auto'
    }

    return (
      <Grid stackable centered columns={3} style={projectStyle}>
        <Intro/>

        {/* <Header as='h2'>Design</Header>
        <VrProjects/>

        <Header as='h2'>Passion Projects</Header>
        <PassionProjects/> */}

        <Header as='h2'>360&#176; VR</Header>
        <Aframe/>

        <Header as='h2'>Medium Posts</Header>
        <Writings/>
        <SocialMedia/>
        <Footer/>
      </Grid>
    );
  }
}

export default Home;
