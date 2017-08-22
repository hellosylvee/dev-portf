import React from 'react'
import { Link, Route } from 'react-router-dom'

import Kafsc from '../projects/Kafsc'
import Uxdc from '../projects/Uxdc'
import NqDesktop from '../projects/NqDesktop'
import NqMobile from '../projects/NqMobile'
import NqWebhost from '../projects/NqWebhost'
import Wanderant from '../projects/Wanderant'
import MoultonCampaign from '../projects/MoultonCampaign'

import { Grid, Image, Header } from 'semantic-ui-react'

const Projects = ({ match }) => {

  const rowStyle = {
    marginTop: '48px'
  }

  const imageStyle = {
    padding: '0px 5px'
  }

  return (
    <Grid stackable centered>
      <Grid.Row style={rowStyle}>
        <Header className='animated fadeIn' as='h2'> Projects </Header>
      </Grid.Row>
      <Header as='h4' className='animated fadeIn'> Select a project to view </Header>
      <Grid.Row>
        <a style={imageStyle}>
          <Link to={`${match.url}/kafsc`}>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-kafsc.png'
                   name='kafsc'
                   size='tiny'
                   shape='circular'
                   bordered centered />
          </Link>
        </a>

        <a style={imageStyle}>
          <Link to={`${match.url}/nqdesktop`}>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-nasdaq.png'
                   name='nasdaq desktop'
                   size='tiny'
                   shape='circular'
                   bordered centered />
          </Link>
        </a>

        <a style={imageStyle}>
          <Link to={`${match.url}/nqmobile`}>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-nasdaq.png'
                   name='nasdaq mobile'
                   size='tiny'
                   shape='circular'
                   bordered centered />
          </Link>
        </a>

        <a style={imageStyle}>
          <Link to={`${match.url}/nqwebhost`}>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-nasdaq.png'
                   name='nasdaq webhost'
                   size='tiny'
                   shape='circular'
                   bordered centered />
          </Link>
        </a>

        <a style={imageStyle}>
          <Link to={`${match.url}/uxdc`}>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-uxdc.png'
                   name='uxdc'
                   size='tiny'
                   shape='circular'
                   bordered centered />
          </Link>
        </a>

        <a style={imageStyle}>
          <Link to={`${match.url}/wanderant`}>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-wanderant.png'
                   name='wanderant'
                   size='tiny'
                   shape='circular'
                   bordered centered />
          </Link>
        </a>

        <a style={imageStyle}>
          <Link to={`${match.url}/moultoncampaign`}>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-sethmoulton.png'
                   name='sethmoulton'
                   size='tiny'
                   shape='circular'
                   bordered centered />
          </Link>
        </a>

        <Route path={`${match.url}/kafsc`} component={Kafsc}/>
        <Route path={`${match.url}/nqdesktop`} component={NqDesktop}/>
        <Route path={`${match.url}/nqmobile`} component={NqMobile}/>
        <Route path={`${match.url}/nqwebhost`} component={NqWebhost}/>
        <Route path={`${match.url}/uxdc`} component={Uxdc}/>
        <Route path={`${match.url}/wanderant`} component={Wanderant}/>
        <Route path={`${match.url}/moultoncampaign`} component={MoultonCampaign}/>
      </Grid.Row>
    </Grid>
  )
}

export default Projects;
