import React from 'react';
import { Grid, Header, Image, Icon} from 'semantic-ui-react'

const Intro = () => {
  return(
    <Grid.Row className='row-section' centered columns={3}>
      <Grid.Column>
        <div className='intro'>
          <Image centered className='animated rollIn' src='/assets/svg/diamond-yellow.svg' size='small' />
          <Header color="violet" className='animated fadeIn intro-title'>Sylvee Lee</Header>
          <Header className='row-section-text'>Designer & Developer</Header>
          <Icon className='animated infinite pulse' name='chevron down' color='violet' size='big'/>
        </div>
      </Grid.Column>
    </Grid.Row>
  )
}

export default Intro
