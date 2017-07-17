import React, { Component } from 'react';
import { Grid, Header, List, Icon, Image } from 'semantic-ui-react'

import Emem from '../projects/Emem'
import IntroCard from '../components/intro-card'

class home extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <IntroCard/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <Image centered bordered src='assets/images/dino.jpg' name='bird' size='medium' />
            <List horizontal>
              <List.Item>
                <List.Content verticalAlign='middle'>
                  <a target='_blank' rel='noopener noreferrer'
                    href='https://www.github.com/hellosylvee'>
                    <Icon link name='github' color='blue' size='big'/>Github
                  </a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Image centered bordered src='assets/images/dino.jpg' name='bird' size='medium' />
            <List horizontal>
              <List.Item>
                <List.Content verticalAlign='middle'>
                  <a target='_blank' rel='noopener noreferrer'
                    href='https://www.github.com/hellosylvee'>
                    <Icon link name='github' color='blue' size='big'/>Github
                  </a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Image centered bordered src='assets/images/dino.jpg' name='bird' size='medium' />
            <List horizontal>
              <List.Item>
                <List.Content verticalAlign='middle'>
                  <a target='_blank' rel='noopener noreferrer'
                    href='https://www.github.com/hellosylvee'>
                    <Icon link name='github' color='blue' size='big'/>Github
                  </a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <Image centered bordered src='assets/images/dino.jpg' name='bird' size='medium' />
          </Grid.Column>
          <Grid.Column>
            <Image centered bordered src='assets/images/dino.jpg' name='bird' size='medium' />
          </Grid.Column>
          <Grid.Column>
            <Image centered bordered src='assets/images/dino.jpg' name='bird' size='medium' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <Image centered bordered src='assets/images/dino.jpg' name='bird' size='medium' />
          </Grid.Column>
          <Grid.Column>
            <Image centered bordered src='assets/images/dino.jpg' name='bird' size='medium' />
          </Grid.Column>
          <Grid.Column>
            <Image centered bordered src='assets/images/dino.jpg' name='bird' size='medium' />
          </Grid.Column>
        </Grid.Row>
        {Emem}
      </Grid>
    );
  }
}

export default home;
