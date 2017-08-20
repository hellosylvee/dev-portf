import React from 'react'
import { Link, Route } from 'react-router-dom'
import ProjectIndex from '../projects/ProjectIndex'

import { Grid, Image, Header } from 'semantic-ui-react'

const Projects = ({ match }) => {

  return (
    <Grid stackable centered>
      <Grid.Row>
        <Header as='h2'> Projects </Header>
      </Grid.Row>
      <p> Select a project to view </p>
      <Grid.Row>
        <a>
          <Link to='/kafsc'>
          {/* <Link to={`${match.url}/kafsc`}> */}
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-kafsc.png'
                   name='kafsc'
                   size='tiny'
                   shape='circular'
                   bordered centered />
          </Link>
          <Header as='h3'>KAFSC</Header>
        </a>

        <a>
          <Link to='/nqdesktop'>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-nasdaq.png'
                   name='nasdaq desktop'
                   size='tiny'
                   shape='circular'
                   bordered centered />
          </Link>
          <Header as='h3'>IR Insight Messaging</Header>
        </a>

        <a>
          <Link to='/nqmobile'>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-nasdaq.png'
                   name='nasdaq mobile'
                   size='tiny'
                   shape='circular'
                   bordered centered />
          </Link>
          <Header as='h3'>IR Mobile</Header>
        </a>

        <a>
          <Link to='/nqwebhost'>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-nasdaq.png'
                   name='nasdaq webhost'
                   size='tiny'
                   shape='circular'
                   bordered centered />
          </Link>
          <Header as='h3'>Nasdaq Webhosting</Header>
        </a>

        <a>
          <Link to='/uxdc'>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-uxdc.png'
                   name='uxdc'
                   size='tiny'
                   shape='circular'
                   bordered centered />
          </Link>
          <Header as='h3'>UXDC</Header>
        </a>

        <a>
          <Link to='/wanderant'>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-wanderant.png'
                   name='wanderant'
                   size='tiny'
                   shape='circular'
                   bordered centered />
          </Link>
          <Header as='h3'>Wanderant</Header>
        </a>

        <a>
          <Link to='/moultoncampaign'>
            <Image className='animated fadeIn'
                   src='assets/images/work/thumbnail-sethmoulton.png'
                   name='sethmoulton'
                   size='tiny'
                   shape='circular'
                   bordered centered />
          </Link>
          <Header as='h3'>Seth Moulton</Header>
        </a>

        {/* <Route path={`${match.url}/:projectId`} component={ProjectIndex}/>
        <Route exact path={match.url} render={() => (
          <h3>Please select a topic.</h3>
        )}/> */}
      </Grid.Row>
    </Grid>
  )
}

export default Projects;
