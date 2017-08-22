import React from 'react'

import { Header, Grid, Image } from 'semantic-ui-react'

const NqWebhost = () => {
  const headerStyle = {
    paddingTop: '50px'
  }
  return(
    <Grid stackable>
      <Grid.Row centered columns="1">
        <Grid.Column>
          <Header style={headerStyle} as='h2'>Nasdaq IR Webhosting</Header>
          <div className='animated fadeIn'>
            <Image centered
              src='/assets/images/work/work_wh.png' name='moultoncampaign' size='large' />
            <Header as='h2'>Investor Relations Webhosting</Header>
            <p>
              Nasdaq develops, hosts and maintains award-winning IR websites for more than 4,000 companies worldwide. Nasdaq are looking for ways to increase the benefits to investors: the investor receives unparalleled transparency combined with a personalized online experience - facilitating return visits; IR receives new clarity on investor online behavior and exact information for identifying opportunities to advance valuation - a goal that all stakeholders share.
            </p>

            <Header as='h3'>Discovery</Header>
            <p>
              In a 6-month time period, I worked on the research and designs of webhosting platform. With 3 other product designers, I conducted interviews with product specialists and managers about the webhosting platforms and services. During this time period, I created both a research and design vision reports as well as creating a survey and survey report from product specialists.
            </p>
            <Image centered bordered
              src='/assets/images/work/webhost-businessresearch.png' name='nasdaq webhosting' size='massive' />
            <Image centered bordered
              src='/assets/images/work/webhost-survey.png' name='nasdaq webhosting' size='massive' />
            <Image centered bordered
              src='/assets/images/work/webhost-solutions.png' name='nasdaq webhosting' size='massive' />

            <Header as='h3'>Define</Header>
            <p>
              Based on the research and feedback from the internal team, I constucted  workflows of receiving client request, submitting development ticket, and other tasks carried out by product specialists. During this time, I worked with project managers to discuss the project roadmap and initial user stories to get the project in momentum.
            </p>
            <Image centered bordered
              src='/assets/images/work/webhost-screenflow.png' name='nasdaq webhosting' size='massive' />

            <Header as='h3'>Refine</Header>
            <p>
              This is a design concept - a client-facing webhosting site that allows the user to create pages, write content, add photos and other media files, and customize other contents to reflect the company's brand. This project was placed on hold as the company focused on other products that were about to be released..
            </p>
            <Image centered bordered
              src='/assets/images/work/webhost-final.jpg' name='nasdaq webhosting' size='massive' />

            <Header as='h3'>FURTHER RESEARCH</Header>
            <p>
              Getting the feedback. Along with mobile work, I paired up with the lead product researcher for product research. This heavily involves reaching out to internal teams and clients for interviews, taking notes in sessions, post-sessions debriefing, and writing up usability reports. Other tasks include sending e-mails, scheduling interviews, reviewing through transcripts, and designing quarterly infographics.
            </p>
            <Image centered bordered
              src='/assets/images/work/mobile-research.png' name='nasdaq webhosting' size='massive' />

            <Header as='h3'>Second Research</Header>
            <p>
              Two years later... we're back to square one! Not quite. The project managers and developers have a solid commitment to the project and we kicked off the project by working on the company configuration page. It's all about storytelling With another product designer, I worked with a project manager to discuss about the product specialists' workflow in the configuration page. We groomed the user stories, added/edited more to actionable chunks, and went on to brainstorm for interface layouts.
            </p>
            <Image centered bordered
              src='/assets/images/work/bsu-userstories.png' name='nasdaq webhosting' size='massive' />

            <Header as='h3'>Define</Header>
            <Image centered bordered
              src='/assets/images/work/bsu-workflow.png' name='nasdaq webhosting' size='massive' />
            <Image centered bordered
              src='/assets/images/work/bsu-workflow2.png' name='nasdaq webhosting' size='massive' />

            <Header as='h3'>Build</Header>
            <Image centered bordered
              src='/assets/images/work/bsu-ver2-search.jpg' name='nasdaq webhosting' size='massive' />

            <Header as='h3'>CONCLUSION</Header>
            <p>
              Normally, many concepts are tossed due to lack of interest and support. This concept is one of them.
            </p>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default NqWebhost
