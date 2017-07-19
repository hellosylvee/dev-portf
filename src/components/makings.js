import React, { Component } from 'react';
import { Grid, Card, Image, Icon, Header } from 'semantic-ui-react'

class Makings extends Component {
  render() {
    return (
      <Grid.Row className='row-section' centered columns={4}>
        <Header className='row-section-title'>I am a <span className='accent-color'>Maker</span>.</Header>
        <Header className='row-section-text'>I love making stuff.</Header>
        <Grid.Column className='column-margin'>
          <Card>
            <Image src='assets/images/cards-foster.png' name='fostership' size='medium' />
            <Card.Content>
              <Card.Header>Fostership Match</Card.Header>
              <Card.Description>A mobile app that matches foster parents to kids and teenagers in all 5 boroughs of New York City.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a target='_blank' rel='noopener noreferrer' href='https://hellosylvee-designs.herokuapp.com/projects/fostership.html'>
                View More <Icon name='arrow right' />
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column className='column-margin'>
          <Card>
            <Image src='assets/images/cards-kafsc.png' name='kafsc' size='medium' />
            <Card.Content>
              <Card.Header>Advocacy for KAFSC</Card.Header>
              <Card.Description>A fund project to raise awareness on domestic violence and solicit discretionary funds from NYC council members.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a target='_blank' rel='noopener noreferrer' href='https://advocacyforkafsc.herokuapp.com/'>
                Go to website <Icon name='arrow right' />
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column className='column-margin'>
          <Card>
            <Image src='assets/images/cards-pivotpong.png' name='bird' size='medium' />
            <Card.Content>
              <Card.Header>Pivot Pong</Card.Header>
              <Card.Description>Pivot Pong is a mobile application that connects players to ping pong matches in matter of seconds.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a target='_blank' rel='noopener noreferrer' href='https://hellosylvee-designs.herokuapp.com/projects/pivot.html'>
                View More <Icon name='arrow right' />
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Makings;
