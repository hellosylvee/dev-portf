import React from 'react'

import { Grid, Header, Image, Segment, Button } from 'semantic-ui-react'

const moultoncampaign = () => {
  return(
    <Grid stackable>
      <Grid.Row centered columns="2">
        <Grid.Column>
          <Header as='h1'>UXDC</Header>
          <div className='process-step animated fadeIn'>
            <Image centered bordered
              src='/assets/images/work/work_uxdc.png' name='uxdc' size='massive' />
            <Header as='h2'>UXDC Conference</Header>
            <div className='body-text'>
              UXDC 2015 is a multidisciplinary conference in Washington, DC were students, professionals and practitioners can learn from people influencing UX strategy and delivery innovative user experiences across DC's unique mix of public, private, nonprofit, and education sectors. It is designed by the UX community for the UX community with the intent of bring UX practice to the next level. For this conference, I worked on logo assets, digital press kit, and presentation slies.
            </div><br/>

            <Header as='h3'>LOGO</Header>
            <div className='body-text'>
              I produced multiple assets for the UXDC conference logo that are to be used in various formats. I readjusted the font colors and sizes in logo, small, medium, and large formats.
            </div><br/>
            <Image centered bordered
              src='/assets/images/work/thumbnail-uxdc.png' name='uxdc logo' size='large' />

            <Header as='h3'>PRESENTATION</Header>
            <div className='body-text'>
              I designed and produced speaker slides. The photos sent by the speakers were in different sizes and photo quality. I retouched the photos to be all black and white to give the slides a more uniform look. Information were added on the slides to provide attendees a quick information of the speaker.
            </div><br/>
            <Image centered bordered
              src='/assets/images/work/uxdc-asset-slide.jpg' name='uxdc slide' size='massive' />

            <Header as='h3'>BLOG</Header>
            <div className='body-text'>
              I contributed visuals and content in the UXDC blog. I interviewed Scott Berkun who was one of the keynote speakers at the conference. In addition, I also interviewed with Chris Gielow who talked about building design presence in the corporate world, and also Michelle Kirby, who talked about having a voice at the big table.
            </div><br/>
            <Image centered bordered
              src='/assets/images/work/uxdc-asset-blog.jpg' name='uxdc blog' size='massive' /><br/>
            <Image centered bordered
              src='/assets/images/work/uxdc-interview.png' name='uxdc interview' size='massive' />

            <Header as='h3'>PRESS KIT</Header>
            <div className='body-text'>
              One of the bigger tasks as a designer and volunteer for this conference is creating a digital press kit. The main purposes of this kit is to promote the conference and increase ticket sales.
            </div><br/>
            <Image centered bordered
              src='/assets/images/work/uxdc-asset-presskit.jpg' name='uxdc presskit' size='massive' /><br/>

            <Button color='blue'
              fluid primary
              as='a'
              href='http://uxdcconference.org/'
              target='_blank'>
              View website
            </Button>
            <span>(Opens a new window)</span>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default moultoncampaign
