import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Grid, Image, Header } from 'semantic-ui-react'

export default class Subnav extends Component {

  render() {
    return (
      <Grid stackable>
        <Grid.Row centered>
          <Grid.Column>
            <a><Link to='/kafsc'>
              <Image className='animated fadeIn' src='assets/images/work/thumbnail-kafsc.png' name='kafsc' size='tiny' shape='circular' bordered centered />
            </Link></a>
            <Header as='h3'>KAFSC</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/nqdesktop'>
              <Image className='animated fadeIn' src='assets/images/work/thumbnail-nasdaq.png' name='nasdaq desktop' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>IR Insight Messaging</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/nqmobile'>
              <Image className='animated fadeIn' src='assets/images/work/thumbnail-nasdaq.png' name='nasdaq mobile' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>IR Mobile</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/nqwebhost'>
              <Image className='animated fadeIn' src='assets/images/work/thumbnail-nasdaq.png' name='nasdaq webhost' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>Nasdaq Webhosting</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/uxdc'>
              <Image className='animated fadeIn' src='assets/images/work/thumbnail-uxdc.png' name='uxdc' size='tiny' shape='circular' centered bordered/>
            </Link></a>
            <Header as='h3'>UXDC</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/wanderant'>
              <Image className='animated fadeIn' src='assets/images/work/thumbnail-wanderant.png' name='wanderant' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>Wanderant</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/moultoncampaign'>
              <Image className='animated fadeIn' src='assets/images/work/thumbnail-sethmoulton.png' name='sethmoulton' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>Seth Moulton</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
