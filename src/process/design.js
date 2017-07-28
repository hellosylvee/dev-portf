import React, { Component } from 'react'
import { Grid, Image, Header, Segment } from 'semantic-ui-react'

class design extends Component {
  render() {
    return (
      <Grid stackable>
        <Grid.Row centered columns={2}>
          <Grid.Column>
            <Image centered bordered
              src='/assets/images/work/process-sketching.jpg' name='nasdaq mobile' size='massive' /><br/>
            <Header as='h1' className='animated fadeInDown'>Design</Header>
            <div className='process-step animated fadeIn'>
              <div className='body-text'>
                With many solutions at hand, I work along with engineers and product managers to determine the top solution. I juggle, compromise, but ultimately advocate for the user while considering technical feasibility and business requirements. Once a solution is picked, the mindset is now shifted towards solutions in software features. I create a rough prototype of the solution to gain user validation in concept testing. Based on feedback, I refine the prototype and prepare for designing the product.
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default design;
