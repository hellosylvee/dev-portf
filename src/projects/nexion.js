import React from 'react'

import { Header, Grid, Image, List } from 'semantic-ui-react'

const nexion = () => {
  return(
    <Grid stackable>
      <Grid.Row centered columns="1">
        <Grid.Column>
          <Header style={headerStyle} as='h2'>Allstate</Header>
          <div className='animated fadeIn'>
            <Image centered bordered
              src='/assets/images/work/work_nexion.png' name='nasdaq desktop' size='massive' />
            <Header as='h2'>A Mobile Insurance Concept</Header>
            <Header as='h2'>Context</Header>
            <div>
              Nexion Mobile is a responsive web application that allows any smartphone user to purchase multiple protection plans for themselves and family members easily and have their smartphones be insured in matter of minutes. Nexion is a pseudonym for Allstate.
            </div>

            <div>
              Nexion is a large personal lines insurer company that provides insurance and financial products. Nexion wants to break into phone insurance market that estimates $48 billion by 2020. Nexion stakeholders want to build an easy, intuitive purchase funnel for consumers to buy phone insurance.
            </div>

            <div>
              The business requirements for this app were a(n):
            </div>

            <List bulleted>
              <List.Item>Simple, intuitive multi-purchase workflow</List.Item>
              <List.Item>Provide coverage for latest models only</List.Item>
              <List.Item>Intake and validate CC information</List.Item>
              <List.Item>Send out insurance policy number via mail</List.Item>
              <List.Item>Easy, informational process for filing a claim</List.Item>
            </List>

            <Header as='h2'>Discovery</Header>
            <div>
              With an open mind, I looked into the stakeholder's idea, by downloading a competitor's prescription-scanning app. The experience was underwhelming as it was unable to scan the bottle accurately. Meanwhile, I was curious about people's thoughts on prescriptions and how they got them refilled. So I reached out to people for interviews on Craigslist and social media. From the interviews, we heard similar pains and needs; people were:
            </div>
            <div>
              The results from the first round of interviews were subpar because I didn't have the right target group. So for the second, I screened for people through a detailed survey with open-ended questions, and this dramatically improved quality in interview answers. From the interviews, noticeable trends bubbled up such as people:
            </div>
            <List bulleted>
              <List.Item>Bought insurance at time of phone purchase/upgrade</List.Item>
              <List.Item>Were unaware that insurance can be bought outside of carriers</List.Item>
              <List.Item>Preferred monthly payments to 1-year payment</List.Item>
              <List.Item>Felt frustrated and annoyed when they filed a claim</List.Item>
              <List.Item>Have a dependent attachment to their phones</List.Item>
            </List>
            <Image centered bordered src='/assets/images/work/nexion-assumptions.jpg' name='nasdaq desktop' size='massive' />

            <Header as='h3'>FRAMING</Header>
            <div>
              Our sample group mentioned an attachment to their phones, and felt "naked" without them. Oddly enough, they opt-out of insurance to cut costs. Some angrily canceled their insurance after filing a claim because they had to pay a deductible in order for their phones to be replaced. This cognitive dissonance sparked an interesting design challenge:
            </div>
            <Header className='pull-quote'>"How might we provide clear, informative insurance plans that are affordable for money-conscious people?"</Header>
            <div>
              Along with the rest of the project team, I generated as many solution ideas to answer this question. The ideas are usually open-ended, not specific components in the product. All ideas (written in post-its) were "synthesized", a process in which ideas are categorized by themes. There were many ideas that range from interaction design to process, so I prioritized them based on a simple question: "Does this solution solve a user need?"
            </div>
            <div>
              From there, I drafted a rough prototype to validate this solution through concept testing, a similar form of testing with focus on concept feedback instead of usability's.
            </div>
            <Image centered bordered src='/assets/images/work/nexion-sketching.jpg' name='nasdaq desktop' size='massive' />

            <Header as='h3'>WORKING IN ITERATIONS</Header>
            <div>
              I worked closely with a product manager to assess and prioritize opportunities and constraints. For upcoming features, I faciliated sketching sessions called design studios to frame a problem in a scenario and sketch ideas on paper. This activity provided collaboration with all members in the project team and partake ownership in designs of the product.
            </div>

            <Header as='h3'>FINISHED PRODUCT</Header>
            <div>
              A responsive web application that allows smartphone users to purchase phone insurance easily. Nexion Mobile provides 3 protection plans with various coverages: Cracked Screen, Serious Malfunction, and Complete Damage. All 3 plans provide monthly or one-time payment options. After a successful payment, a customer can activate the protection plan by downloading a diagnostics app that checks for software and hardware qualities. Look below to see the final designs for Nexion.
            </div>
            <Image centered bordered src='/assets/images/work/nexion-final.png' name='nasdaq desktop' size='massive' />

          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default nexion
