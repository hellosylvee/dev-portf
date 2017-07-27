import React, { Component } from 'react'
import { Link} from 'react-router-dom'

import { Grid, Image, Header } from 'semantic-ui-react'

export default class Subnav extends Component {

  render() {
    return (
      <Grid stackable>
        <Grid.Row centered columns={4}>
          <Header as='h1' className='animated fadeIn'>Work</Header>
          <Grid.Column>
              <a><Link to='/work/nexion'>
                <Image src='assets/images/dino.jpg' name='enter name' size='tiny' shape='circular' centered />
              </Link></a>
              <Header as='h3'>Allstate</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/rxemporium'>
              <Image src='assets/images/dino.jpg' name='enter name' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>Express Scripts</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/kafsc'>
              <Image src='assets/images/dino.jpg' name='enter name' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>KAFSC</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={4}>
          <Grid.Column>
            <a><Link to='/work/nqdesktop'>
              <Image src='assets/images/dino.jpg' name='enter name' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>Nasdaq IR Insight Messaging</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/nqmobile'>
              <Image src='assets/images/dino.jpg' name='enter name' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>Nasdaq IR Mobile</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/nqwebhost'>
              <Image src='assets/images/dino.jpg' name='enter name' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>Nasdaq Webhosting</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={4}>
          <Grid.Column>
            <a><Link to='/work/uxdc'>
              <Image src='assets/images/dino.jpg' name='enter name' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>UXDC</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/wanderant'>
              <Image src='assets/images/dino.jpg' name='enter name' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>Wanderant</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/work/moultoncampaign'>
              <Image src='assets/images/dino.jpg' name='enter name' size='tiny' shape='circular' centered />
            </Link></a>
            <Header as='h3'>Seth Moulton</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
