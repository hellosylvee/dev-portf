import React from 'react';
import { Grid, Header, Image, Icon} from 'semantic-ui-react'
import Subnav from '../patterns/Subnav'

const Intro = () => {
  // const backgroundStyle = {
  //   backgroundImage: 'url(' + { imgUrl } + ')',
  //   backgroundColor: '#000000'
  // }

  return(

    <Grid.Column>
      <div className='intro'>
        <Image centered className='animated rollIn' src='/assets/svg/diamond.svg' size='small' />
        <Header color="violet" className='animated fadeIn intro-title'>Sylvee Lee</Header>
        <Header className='row-section-title'>I am a <span className='accent-color'>Product Designer</span>.</Header>
        <Header className='row-section-text'>I design products for people.</Header>
      </div>
    </Grid.Column>
  )
}

export default Intro
