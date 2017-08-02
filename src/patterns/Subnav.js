import React, { Component } from 'react'
import { Link} from 'react-router-dom'

import { Grid, Image, Header } from 'semantic-ui-react'

export default class Subnav extends Component {

  render() {
    return (
      <Grid stackable>
        <Grid.Row centered columns={10}>
          <Header as='h1' className='subnav animated fadeInDown'>Work</Header>
          <div className='small-text'>Select a project to view</div>
          <Grid.Column>
              <a><Link to='/work/allstate'>
                <Image className='animated fadeIn' src='assets/images/work/thumbnail-nexion.png' name='nexion' size='tiny' shape='circular' centered bordered />
              </Link></a>
              <Header as='h3'>Allstate</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/express-scripts'>
              <Image className='animated fadeIn' src='assets/images/work/thumbnail-rx.png' name='rx emporium' size='tiny' shape='circular' centered bordered />
            </Link></a>
            <Header as='h3'>Express Scripts</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/kafsc'>
              <Image className='animated fadeIn' src='assets/images/work/thumbnail-kafsc.png' name='kafsc' size='tiny' shape='circular' bordered centered />
            </Link></a>
            <Header as='h3'>KAFSC</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/nqdesktop'>
              <Image className='animated fadeIn' src='assets/images/work/thumbnail-nasdaq.png' name='nasdaq desktop' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>IR Insight Messaging</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/nqmobile'>
              <Image className='animated fadeIn' src='assets/images/work/thumbnail-nasdaq.png' name='nasdaq mobile' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>IR Mobile</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/nqwebhost'>
              <Image className='animated fadeIn' src='assets/images/work/thumbnail-nasdaq.png' name='nasdaq webhost' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>Nasdaq Webhosting</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/uxdc'>
              <Image className='animated fadeIn' src='assets/images/work/thumbnail-uxdc.png' name='uxdc' size='tiny' shape='circular' centered bordered/>
            </Link></a>
            <Header as='h3'>UXDC</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/wanderant'>
              <Image className='animated fadeIn' src='assets/images/work/thumbnail-wanderant.png' name='wanderant' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>Wanderant</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/moultoncampaign'>
              <Image className='animated fadeIn' src='assets/images/work/thumbnail-sethmoulton.png' name='sethmoulton' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>Seth Moulton</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
