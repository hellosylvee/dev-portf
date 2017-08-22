import React from 'react'

import { Grid, Header, Image, Button } from 'semantic-ui-react'

const Wanderant = () => {
  const headerStyle = {
    paddingTop: '50px'
  }
  return(
    <Grid stackable>
      <Grid.Row centered columns="1">
        <Grid.Column>
          <Header style={headerStyle} as='h2'>Wanderant</Header>
          <div className='animated fadeIn'>
            <Image centered
              as='a'
              href='https://www.wanderant.com/?utm_source=BetaList#/start'
              target='_blank'
              src='/assets/images/work/work_wanderant.png' name='moultoncampaign' size='big' />
            <Header as='h2'>A Smart Travel Planner</Header>
            <p>
              Wanderant is a web and mobile app set out to reduce the hassles of travel planning by organizing the best travel tools and information into a single trip-planning workflow. It offers a simpler more fun process of planning, choices and logistics for the independent traveler.
            </p>
            <p>
              Main tasks included design strategy, user research, usability testing, and UX design.
            </p>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns = '3'>
        <Grid.Column>
          <Button color='violet'
            fluid
            as='a'
            href='https://www.wanderant.com/#/start'
            target='_blank'>
            View website
          </Button>

        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default Wanderant
