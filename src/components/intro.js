import React from 'react';
import { Grid, Header, Image} from 'semantic-ui-react'

const Intro = () => {
  // const backgroundStyle = {
  //   backgroundImage: 'url(' + { imgUrl } + ')',
  //   backgroundColor: '#000000'
  // }

  return(
    <Grid.Row>
      <Grid.Column>
        <Image centered className='animated rollIn' src='/assets/svg/diamond.svg' size='small'/>
        <Header className='animated fadeIn'>Sylvee Lee</Header>
        <Header>Product Designer & Developer</Header>
        <Header>I design products for people.</Header>
      </Grid.Column>
    </Grid.Row>
  )
}

export default Intro
