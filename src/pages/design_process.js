import React, { Component } from 'react'

import { Grid, Image, Header} from 'semantic-ui-react'

class design_process extends Component {
  render() {
    return (
      <Grid divided='vertically'>
        <Grid.Row centered columns={2}>
          <Header as='h2'>Process</Header>
          <Grid.Column>
          <div className='animated fadeIn'>
            <Image centered src='/assets/svg/search.svg' name='explore' size='small' />
            <Header as='h2'>Explore</Header>
            <div>Understanding context is the first step to designing great products. I explore the problem space by unearthing as many challenges that obstruct existing processes - this involves delving into the whys and hows, in present workflows and/or organizations. This is a crucial component in learning domain knowledge. Activities utilized to gain understanding can range from user interviews to remote card sorting.</div>
          </div>

          <div className='animated fadeIn'>
            <Image centered src='/assets/svg/vector.svg' name='design' size='small' />
            <Header as='h2'>Design</Header>
            <div>Saturated with new domain knowledge, I process the information by looking for common problems and insights. I work collaboratively with team members to determine them through synthesis, a method to find pains or trends in a problem space. Afterwards, I prioritize these problems based on pain frequency and user-value. This is an important step of the discovery portion as I strategically focus on critical problems that provide user-value first. This naturally transitions into next step - framing the problems to generate solutions.</div>
          </div>

          <div className='animated fadeIn'>
            <Image centered src='/assets/svg/testing.svg' name='validate' size='small' />
            <Header as='h2'>Validate</Header>
            <div>Focusing on one critical problem acts as an anchor for creativity. Solutions are generated and geared more towards concepts, more so than software features because providing a valid solution to a user problem is more valuable than a software component...for now. The problem is phrased into a neutral, open-ended question that encourages any creative solution ideas. Common activities in this step of the process includes scenario writing, sketching, and solution brainstorming.</div>
          </div>

          <div className='animated fadeIn'>
            <Image centered src='/assets/svg/attractive.svg' name='evaluate' size='small' />
            <Header as='h2'>Evaluate</Header>
            <div>With many solutions at hand, I work along with engineers and product managers to determine the top solution. I juggle, compromise, but ultimately advocate for the user while considering technical feasibility and business requirements. Once a solution is picked, the mindset is now shifted towards solutions in software features. I create a rough prototype of the solution to gain user validation in concept testing. Based on feedback, I refine the prototype and prepare for designing the product.</div>
          </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default design_process;
