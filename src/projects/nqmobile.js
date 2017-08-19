import React from 'react'

import { Header, Grid, Image } from 'semantic-ui-react'

const nqmobile = () => {
  return(
    <Grid stackable>
      <Grid.Row centered columns="1">
        <Grid.Column>
          <Header as='h1'>Nasdaq IR Mobile</Header>
          <div className='process-step animated fadeIn'>
            <Image centered bordered
              src='/assets/images/work/work_ir-mobile.png' name='nasdaq mobile' size='large' />
            <Header as='h2'>IR Insight In Your Hands</Header>
            <div className='body-text'>
              Nasdaq IR Desktop is a ground-breaking platform built exclusively for the Investor Relations community. It monitors all components in a one intuitive, and customizable platform, access to premium content and news, gain unique insight into buy-side decision-making, leverage time-saving tools to monitor developments, prioritize outreach, and measure its impact, plan investor meetings, and analyze your peers.
            </div>

            <Header as='h3'>DISCOVERY</Header>
            <div className='body-text'>
              IR Insight Mobile is a mobile version of IR Insight. Working with another product designer, we collaborated closely with the desktop team to provide an enhanced view on mobile phones and tablets. In this 12-month project, we worked with a product manager to evaluate all data and metadata and filter out valuable information for our personas who are investor relations officers and administrators.
            </div>
            <Image centered bordered
              src='/assets/images/work/mobile-discovery1.jpg' name='nasdaq mobile' size='massive' />

            <Header as='h3'>DEFINE</Header>
            <div className='body-text'>
              With a lot of wordsmithing and filtering, we focus on the content layout to optimize metadata. We work closely with the desktop team, and designs and content changes frequently, and we try to emulate the latest designs as much as possible. It was very important for both the mobile and desktop versions to be nearly exact as if the two products were built by one designer instead of two design teams.
            </div>
            <Image centered bordered
              src='/assets/images/work/mobile-buysideContact.jpg' name='nasdaq mobile' size='massive' />

            <Header as='h3'>REFINE</Header>
            <div className='body-text'>
              All about the refinements. The designs go through design and product management reviews before they are shown to the actual clients for feedback. With the lead product researcher, I conducted usability testing with clients in North America and Europe.
            </div>
            <Image centered bordered
                src='/assets/images/work/mobile-buysideFirm.jpg' name='nasdaq mobile' size='massive' />

            <Header as='h3'>FURTHER RESEARCH</Header>
            <div className='body-text'>
              Getting the feedback. Along with mobile work, I paired up with the lead product researcher for product research. This heavily involves reaching out to internal teams and clients for interviews, taking notes in sessions, post-sessions debriefing, and writing up usability reports. Other tasks include sending e-mails, scheduling interviews, reviewing through transcripts, and designing quarterly infographics.
            </div>
            <Image centered bordered
              src='/assets/images/work/mobile-research.png' name='nasdaq mobile' size='massive' />

          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default nqmobile
