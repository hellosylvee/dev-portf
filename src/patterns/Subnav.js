import React, { Component } from 'react'
import { Link} from 'react-router-dom'

import { Grid, Image, Header } from 'semantic-ui-react'

export default class Subnav extends Component {

  render() {
    return (
      <Grid stackable>
        <Grid.Row centered columns={12}>
          <Header as='h1' className='subnav animated fadeInDown'>Work</Header>
          <Grid.Column>
              <a><Link to='/work/nexion'>
                <Image src='assets/images/dino.jpg' name='kafsc' size='tiny' shape='circular' centered />
              </Link></a>
              <Header as='h3'>Nexion</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/rxemporium'>
              <Image src='assets/images/dino.jpg' name='enter name' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>RxEmporium</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/kafsc'>
              <Image src='assets/images/work/thumbnail-kafsc.png' name='enter name' size='tiny' shape='circular' bordered centered />
            </Link></a>
            <Header as='h3'>KAFSC</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/nqdesktop'>
              <Image src='assets/images/dino.jpg' name='enter name' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>IR Insight Messaging</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/nqmobile'>
              <Image src='assets/images/dino.jpg' name='enter name' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>IR Mobile</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/nqwebhost'>
              <Image src='assets/images/dino.jpg' name='enter name' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>Nasdaq Webhosting</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/uxdc'>
              <Image src='assets/images/work/thumbnail-uxdc.png' name='enter name' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>UXDC</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/wanderant'>
              <Image src='assets/images/work/thumbnail-wanderant.png' name='enter name' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>Wanderant</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/moultoncampaign'>
              <Image src='assets/images/work/thumbnail-sethmoulton.png' name='sethmoulton' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>Seth Moulton</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
