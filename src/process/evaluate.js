import React, { Component } from 'react'
import { Grid, Image, Header, Segment } from 'semantic-ui-react'

class evaluate extends Component {
  render() {
    return (
      <Grid stackable>
        <Grid.Row centered columns={2}>
          <Grid.Column>
            <Image centered bordered
              src='/assets/images/work/process-research.jpg' name='research' size='massive' /><br/>
            <Header as='h1' className='animated fadeInDown'>Evaluate</Header>
            <div className='process-step animated fadeIn'>
              <div className='body-text'>
                Evaluate the results.
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default evaluate;
