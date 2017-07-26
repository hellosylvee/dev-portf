import React, { Component } from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react'

class work extends Component {
  render() {
    return (
      <Grid stackable>
        <Grid.Row centered columns={4}>
          <Header as='h1' className='animated fadeIn'>Work</Header>
          <Grid.Column>
            <Segment>
              <span>Allstate</span>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <span>Express Scripts</span>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <span>KAFSC</span>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={4}>
          <Grid.Column>
            <Segment>
              <span>Nasdaq IR Insight Messaging</span>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <span>Nasdaq IR Mobile</span>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <span>Nasdaq Webhosting</span>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={4}>
          <Grid.Column>
            <Segment>
              <span>UXDC</span>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <span>Wanderant</span>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <span>Seth Moulton</span>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default work;
