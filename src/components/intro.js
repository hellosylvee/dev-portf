import React from 'react';
import { Grid, Header, Image, Icon} from 'semantic-ui-react'

const Intro = () => {
  return(
    <Grid.Row className='row-section' centered columns={3}>
      <Grid.Column>
        <div className='intro'>
          <Image centered className='animated rollIn' src='/assets/images/avatar.png' size='small' />
          <Header className='animated fadeIn intro-title'>
            <span className='grey-text'>Welcome.</span><br/>
            I'm Sylvee Lee.</Header>
          <Icon className='animated infinite pulse' name='chevron down' color='blue' size='big'/>
        </div>
      </Grid.Column>
    </Grid.Row>
  )
}

export default Intro
