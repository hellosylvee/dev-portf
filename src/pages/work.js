import React, { Component } from 'react';
import { Grid, Header, Image } from 'semantic-ui-react'
// import Subnav from '../components/Subnav'

class work extends Component {
  render() {
    return (
      <Grid stackable>
        {/* <Subnav/> */}
        <Grid.Row centered columns={4}>
          <Header as='h1' className='animated fadeIn'>Work</Header>
          <Grid.Column>
              <a href="#">
                <Image src='assets/images/dino.jpg' name='enter name' size='small' shape='circular' centered />
              </a>
              <Header as='h3'>Allstate</Header>
          </Grid.Column>
          <Grid.Column>
              <a href="#">
                <Image src='assets/images/dino.jpg' name='enter name' size='small' shape='circular' centered />
              </a>
              <Header as='h3'>Express Scripts</Header>
          </Grid.Column>
          <Grid.Column>
              <a href="#">
                <Image src='assets/images/dino.jpg' name='enter name' size='small' shape='circular' centered />
              </a>
              <Header as='h3'>KAFSC</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={4}>
          <Grid.Column>
              <a href="#">
                <Image src='assets/images/dino.jpg' name='enter name' size='small' shape='circular' centered />
              </a>
              <Header as='h3'>Nasdaq IR Insight Messaging</Header>
          </Grid.Column>
          <Grid.Column>
              <a href="#">
                <Image src='assets/images/dino.jpg' name='enter name' size='small' shape='circular' centered />
              </a>
              <Header as='h3'>Nasdaq IR Mobile</Header>
          </Grid.Column>
          <Grid.Column>
              <a href="#">
                <Image src='assets/images/dino.jpg' name='enter name' size='small' shape='circular' centered />
              </a>
              <Header as='h3'>Nasdaq Webhosting</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={4}>
          <Grid.Column>
              <a href="#">
                <Image src='assets/images/dino.jpg' name='enter name' size='small' shape='circular' centered />
              </a>
              <Header as='h3'>UXDC</Header>
          </Grid.Column>
          <Grid.Column>
              <a href="#">
                <Image src='assets/images/dino.jpg' name='enter name' size='small' shape='circular' centered />
              </a>
              <Header as='h3'>Wanderant</Header>
          </Grid.Column>
          <Grid.Column>
              <a href="#">
                <Image src='assets/images/dino.jpg' name='enter name' size='small' shape='circular' centered />
              </a>
              <Header as='h3'>Seth Moulton</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default work;
