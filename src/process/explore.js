import React, { Component } from 'react'
import { Grid, Image, Header, Segment } from 'semantic-ui-react'

class explore extends Component {
  render() {
    return (
      <Grid stackable>
        <Grid.Row centered columns={2}>
          <Grid.Column>
            <Image centered bordered
              src='/assets/images/work/process-brainstorm.jpg' name='research' size='massive' /><br/>
            <Header as='h1' className='animated fadeInDown'>Explore</Header>
            <div className='process-step animated fadeIn'>
              <div className='body-text'>
                Understanding context is the first step to designing great products. I explore the problem space by unearthing as many challenges that obstruct existing processes - this involves delving into the whys and hows, in present workflows and/or organizations. This is a crucial component in learning domain knowledge. Activities utilized to gain understanding can range from user interviews to remote card sorting.
              </div><br/>
              <div className='body-text'>
                Saturated with new domain knowledge, I process the information by looking for common problems and insights. I work collaboratively with team members to determine them through synthesis, a method to find pains or trends in a problem space. Afterwards, I prioritize these problems based on pain frequency and user-value. This is an important step of the discovery portion as I strategically focus on critical problems that provide user-value first. This naturally transitions into next step - framing the problems to generate solutions.
              </div><br/>
              <div className='body-text'>
                Focusing on one critical problem acts as an anchor for creativity. Solutions are generated and geared more towards concepts, more so than software features because providing a valid solution to a user problem is more valuable than a software component...for now. The problem is phrased into a neutral, open-ended question that encourages any creative solution ideas. Common activities in this step of the process includes scenario writing, sketching, and solution brainstorming.
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default explore;
