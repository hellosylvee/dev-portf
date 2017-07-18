import React from 'react';
import { Grid, Header, Image} from 'semantic-ui-react'

const Intro = () => {
  return(
    <Grid.Row className='row-section' centered columns={3}>
      <Grid.Column>
        <div className='intro'>
          <Image centered src='/assets/images/avatar.png' size='small' />
          <Header className='intro-title'>Welcome.<br/>I'm Sylvee Lee.</Header>
        </div>
      </Grid.Column>
    </Grid.Row>
  )
}

export default Intro
