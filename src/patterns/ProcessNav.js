import React, { Component } from 'react'
import { Link} from 'react-router-dom'

import { Grid, Image, Header } from 'semantic-ui-react'

export default class ProcessNav extends Component {

  render() {
    return (
      <Grid stackable>
        <Grid.Row centered columns={6}>
          <Header as='h1' className='subnav animated fadeInDown'>Process</Header>
          <Grid.Column>
              <a><Link to='/process/explore'>
                <Image src='/assets/svg/search.svg' name='search' size='tiny' centered />
              </Link></a>
              <Header as='h3'>Explore</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/process/design'>
              <Image src='/assets/svg/vector.svg' name='design' size='tiny' centered />
            </Link></a>
            <Header as='h3'>Design</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/process/validate'>
              <Image src='/assets/svg/testing.svg' name='validate' size='tiny' centered />
            </Link></a>
            <Header as='h3'>Validate</Header>
          </Grid.Column>
          <Grid.Column>
            <a><Link to='/process/evaluate'>
              <Image src='/assets/svg/attractive.svg' name='evaluate' size='tiny' centered />
            </Link></a>
            <Header as='h3'>Evaluate</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
