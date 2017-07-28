import React from 'react'

import { Header, Grid } from 'semantic-ui-react'

const nqwebhost = () => {
  return(
    <Grid stackable>
      <Grid.Row centered columns="2">
        <Grid.Column>
          <Header as='h1'>Nasdaq Webhosting</Header>
          <div>You're Dyno-mite! But this page isn't. Womp womp. Work in progress.</div>
          {/* <div className='process-step animated fadeIn'>
            <Image centered bordered
              as='a'
              href='https://www.wanderant.com/?utm_source=BetaList#/start'
              target='_blank'
              src='/assets/images/work/work_wanderant.png' name='moultoncampaign' size='big' />
            <Header as='h2'>A Smart Travel Planner</Header>
            <div className='body-text'>
              Wanderant is a web and mobile app set out to reduce the hassles of travel planning by organizing the best travel tools and information into a single trip-planning workflow. It offers a simpler more fun process of planning, choices and logistics for the independent traveler.
            </div><br/>
            <div className='body-text'>
              Main tasks included design strategy, user research, usability testing, and UX design.
            </div>
          </div> */}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default nqwebhost
