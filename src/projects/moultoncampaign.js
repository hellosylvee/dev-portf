import React from 'react'

import { Grid, Header, Image, Button } from 'semantic-ui-react'

const MoultonCampaign = () => {
  return(
    <Grid stackable>
      <Grid.Row centered columns="1">
        <Grid.Column>
          <Header as='h1'>Seth Moulton For Congress</Header>
          <div className='process-step animated fadeIn'>
            <Image centered
              as='a'
              href='http://www.sethmoulton.com/'
              target='_blank'
              src='/assets/images/work/work_sethmoulton_all.png' name='moultoncampaign' size='large' />
            <Header as='h2'>A Campaign Website</Header>
            <div className='body-text'>
               Seth Wilbur Moulton was an American former Marine Corps officer, a member of the Democratic Party, and is now a U.S. Representative for Massachusetts's 6th congressional district. This site was designed and built for his run in 2014 congressional campaign.
            </div>
            <div className='body-text'>
              Main tasks included interaction and graphic design.
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns = '3'>
        <Grid.Column>
          <Button color='violet'
            fluid primary
            as='a'
            href='http://www.sethmoulton.com/'
            target='_blank'>
            View website
          </Button>
          <span>(Opens a new window)</span>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default MoultonCampaign
