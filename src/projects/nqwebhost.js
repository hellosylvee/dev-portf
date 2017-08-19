import React from 'react'

import { Header, Grid, Image } from 'semantic-ui-react'

const nqwebhost = () => {
  return(
    <Grid stackable>
      <Grid.Row centered columns="1">
        <Grid.Column>
          <Header as='h1'>Nasdaq IR Webhosting</Header>
          <div className='process-step animated fadeIn'>
            <Image centered
              src='/assets/images/work/work_wh.png' name='moultoncampaign' size='large' />
            <Header as='h2'>Investor Relations Webhosting</Header>
            <div className='body-text'>
              Nasdaq develops, hosts and maintains award-winning IR websites for more than 4,000 companies worldwide. Nasdaq are looking for ways to increase the benefits to investors: the investor receives unparalleled transparency combined with a personalized online experience - facilitating return visits; IR receives new clarity on investor online behavior and exact information for identifying opportunities to advance valuation - a goal that all stakeholders share.
            </div>

            <Header as='h3'>DISCOVERY</Header>
            <div className='body-text'>
              In a 6-month time period, I worked on the research and designs of webhosting platform. With 3 other product designers, I conducted interviews with product specialists and managers about the webhosting platforms and services. During this time period, I created both a research and design vision reports as well as creating a survey and survey report from product specialists.
            </div>
            <Image centered bordered
              src='/assets/images/work/webhost-businessresearch.png' name='nasdaq webhosting' size='massive' />
            <Image centered bordered
              src='/assets/images/work/webhost-survey.png' name='nasdaq webhosting' size='massive' />
            <Image centered bordered
              src='/assets/images/work/webhost-solutions.png' name='nasdaq webhosting' size='massive' />

            <Header as='h3'>DEFINE</Header>
            <div className='body-text'>
              Based on the research and feedback from the internal team, I constucted primary workflows of receiving client request, submitting development ticket, and other tasks carried out by product specialists. During this time, I worked with project managers to discuss the project roadmap and initial user stories to get the project in momentum.
            </div>
            <Image centered bordered
              src='/assets/images/work/webhost-screenflow.png' name='nasdaq webhosting' size='massive' />

            <Header as='h3'>REFINE</Header>
            <div className='body-text'>
              This is a design concept - a client-facing webhosting site that allows the user to create pages, write content, add photos and other media files, and customize other contents to reflect the company's brand. This project was placed on hold as the company focused on other products that were about to be released..
            </div>
            <Image centered bordered
              src='/assets/images/work/webhost-final.jpg' name='nasdaq webhosting' size='massive' />

            <Header as='h3'>FURTHER RESEARCH</Header>
            <div className='body-text'>
              Getting the feedback. Along with mobile work, I paired up with the lead product researcher for product research. This heavily involves reaching out to internal teams and clients for interviews, taking notes in sessions, post-sessions debriefing, and writing up usability reports. Other tasks include sending e-mails, scheduling interviews, reviewing through transcripts, and designing quarterly infographics.
            </div>
            <Image centered bordered
              src='/assets/images/work/mobile-research.png' name='nasdaq webhosting' size='massive' />

            <Header as='h3'>CURRENT WORK</Header>
            <div className='body-text'>
              Two years later... we're back to square one! Not quite. The project managers and developers have a solid commitment to the project and we kicked off the project by working on the company configuration page.
            </div>

            <Header as='h3'>DISCOVERY (Again)</Header>
            <div className='body-text'>
              It's all about storytelling With another product designer, I worked with a project manager to discuss about the product specialists' workflow in the configuration page. We groomed the user stories, added/edited more to actionable chunks, and went on to brainstorm for interface layouts.
            </div>
            <Image centered bordered
              src='/assets/images/work/bsu-userstories.png' name='nasdaq webhosting' size='massive' />

            <Header as='h3'>DEFINE</Header>
            <div className='body-text'>
              Going with the flow.
            </div>
            <Image centered bordered
              src='/assets/images/work/bsu-workflow.png' name='nasdaq webhosting' size='massive' />
            <Image centered bordered
              src='/assets/images/work/bsu-workflow2.png' name='nasdaq webhosting' size='massive' />

            <Header as='h3'>BUILD</Header>
            <div className='body-text'>
              Going with the flow.
            </div>
            <Image centered bordered
              src='/assets/images/work/bsu-ver2-search.jpg' name='nasdaq webhosting' size='massive' />

            <Header as='h3'>CONCLUSION</Header>
            <div className='body-text'>
              Normally, many concepts are tossed due to lack of interest and support. This concept is one of them.
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default nqwebhost
