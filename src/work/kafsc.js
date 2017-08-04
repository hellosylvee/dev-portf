import React from 'react'

import { Grid, Header, Image, Button } from 'semantic-ui-react'

const kafsc = () => {
  return(
    <Grid stackable>
      <Grid.Row centered columns="1">
        <Grid.Column>
          <Header as='h1'>KAFSC</Header>
          <div className='process-step animated fadeIn'>
            <Image centered bordered
              as='a'
              href='https://advocacyforkafsc.herokuapp.com/'
              target='_blank'
              src='/assets/images/work/thumbnail-kafsc.png' name='kafsc' size='medium' shape='circular' />
            <Header as='h2'>An Advocacy Campaign</Header>
            <div className='body-text'>
               Advocacy for KAFSC is an advocacy fund project for KAFSC, to raise awareness on domestic violence and solicit discretionary funds from council members of New York City. KAFSC is a community-based, nonprofit organization that offers assistance to Korean American families and domestic violence victims in greater New York area. I promote domestic violence awareness, generate funds for the nonprofit organization, and work with executive board members to organize events framing from races to spring formal for young professionals.
            </div><br/>
            <div className='body-text'>
              The project was deemed a success as funding increased 105% for fiscal year 2018, and obtained more funding from new councilmembers.
            </div><br/>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns = '3'>
        <Grid.Column>
          <Button color='violet'
            fluid primary
            as='a'
            href='https://advocacyforkafsc.herokuapp.com/'
            target='_blank'>
            View website
          </Button>
          <span>(Opens a new window)</span>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default kafsc
