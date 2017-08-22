import React from 'react'

import { Header, Grid, Image, List } from 'semantic-ui-react'

const rxemporium = () => {
  return(
    <Grid stackable>
      <Grid.Row centered columns="1">
        <Grid.Column>
          <Header style={headerStyle} as='h2'>Express Scripts</Header>
          <div className='animated fadeIn'>
            <Image centered bordered
              src='/assets/images/work/work_rx.png' name='nasdaq desktop' size='massive' />
            <Header as='h2'>A Home Delivery Prescription Service</Header>
            <Header as='h2'>Context</Header>
            <div>
              Rx Emporium is a responsive web application for customers to order and/or refill their medical prescription orders. This application quickly identifies past orders and provide intuitive way to order new prescription medication within minutes. Rx Emporium is a pseudonym for Express Scripts.
            </div>

            <div>
              Rx Emporium is a pharmacy benefit manager, working as a middleman between drug manufacturers and employers. The benefit manager (ie. Walgreen) pays pharmacies to dispense generic and brand drugs. Rx Emporium processes some 1.5 billion drug orders every year. The stakeholders want to increase sign-ups for mail-order delivery, and proposed an iOS app that scans pharmacy prescription bottles for automatic refills and be delivered at the front door.
            </div>

            <div>
              The business requirements for this app were a(n):
            </div>

            <List bulleted>
              <List.Item>iOS native app</List.Item>
              <List.Item>Simple, intuitive multi-purchase workflow</List.Item>
              <List.Item>Intake and validate CC information</List.Item>
            </List>

            <Header as='h2'>Discovery</Header>
            <div>
              With an open mind, I looked into the stakeholder's idea, by downloading a competitor's prescription-scanning app. The experience was underwhelming as it was unable to scan the bottle accurately. Meanwhile, I was curious about people's thoughts on prescriptions and how they got them refilled. So I reached out to people for interviews on Craigslist and social media. From the interviews, we heard similar pains and needs; people were:
            </div>
            <List bulleted>
              <List.Item>Too bothered to fill out paper application for home delivery service</List.Item>
              <List.Item>Unaware of home delivery service was included with their health insurance</List.Item>
              <List.Item>Rather pick up their prescription for themselves because it was easier</List.Item>
              <List.Item>Pleasantly surprised home delivery was convenient after tedious sign up</List.Item>
              <List.Item>Not excited to download an app to manage their prescriptions</List.Item>
            </List>
            <div>
              Along with user interviews, I became familiar with Rx Emporium's Home Delivery website through service blue print, a technique to understand the prescription order and refill processes. With user interviews and service blueprint, I recognized that the current home delivery signup is a slow, tedious process.
            </div>
            <Image centered bordered src='/assets/images/work/rx-interview.jpg' name='nasdaq desktop' size='massive' />

            <Header as='h3'>FRAMING</Header>
            <div>
              I focused on initial home delivery signup as there was no substantial need for a native app. Overall, people wanted their prescription with little effort, and I strongly believed an easy setup process could increase in the number of signups. There is high user-value and pain in the delivery signup, and the feasibility for a signup workflow is possible. To generate ideas and change perspective into software solutions, I reframed the problem into a "How Might We..." statement:
            </div>
            <Header className='pull-quote'>"How might we make home delivery signup a simple process for new and existing customers?"</Header>
            <div>
              I brainstormed and created a paper prototype to test this concept. With positive feedback received, I worked on a high-fidelity prototype in Sketch and Invision, and worked closely with product management to design incrementally in user stories.
            </div>
            <Image centered bordered src='/assets/images/work/rx-sketching.jpg' name='nasdaq desktop' size='massive' />

            <Header as='h3'>WORKING IN ITERATIONS</Header>
            <div>
              I had a regular rhythm of designing and testing as user feedback loops minimized product risks. I worked in weekly iterations, ahead of engineering by at least 3 weeks. This distance gives breath for design and product management to test features before engineers build them out.
            </div>

            <Header as='h3'>FINISHED PRODUCT</Header>
            <div>
              The product was finished and released into the wild in 6 months. The home delivery signup is a simple online application form, and existing customers can have their past prescriptions automatically loaded with a simple button click. Look below to see the final designs for Rx Emporium's Home Delivery website.
            </div>
            <Image centered bordered src='/assets/images/work/rx.png' name='nasdaq desktop' size='massive' />

          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default rxemporium
