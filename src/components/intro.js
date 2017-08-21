import React from 'react';
import { Grid, Header, Image} from 'semantic-ui-react'
import imgUrl from '../backgrounds/intro.png'

const Intro = () => {
  const backgroundStyle = {
    backgroundImage: `url(${ imgUrl })`,
    padding: '200px 0px 100px 0px',
    margin: '-25px'
  }

  const headerStyle = {
    fontSize: '8em'
  }

  return(
    <Grid.Row style={backgroundStyle}>
      <Grid.Column>
        <Image centered className='animated rollIn' src='/assets/svg/diamond.svg' size='small'/>
        <Header as='h1' style={headerStyle} className='animated fadeIn'>Sylvee Lee</Header>
        <Header as='h2'>Product Designer & Developer</Header>
      </Grid.Column>
    </Grid.Row>
  )
}

export default Intro
