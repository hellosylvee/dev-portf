import React, { Component } from 'react'
import { Grid, Image, Header, Segment } from 'semantic-ui-react'

class validate extends Component {
  render() {
    return (
      <Grid stackable>
        <Grid.Row centered columns={2}>
          <Grid.Column>
            <Image centered bordered
              src='/assets/images/work/process-synthesis.jpg' name='synthesis' size='massive' /><br/>
            <Header as='h1' className='animated fadeInDown'>Validate</Header>
            <div className='process-step animated fadeIn'>
              <div className='body-text'>
                Validate the assumptions.
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default validate;
