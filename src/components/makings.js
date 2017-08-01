import React, { Component } from 'react';
// import { Switch, Route, Link } from 'react-router-dom'
import { Grid, Card, Image, Icon, Header } from 'semantic-ui-react'

// import Index from './Index'

class Makings extends Component {
  render() {
    return (
      <Grid.Row className='row-section' centered columns={4}>
        <Header className='row-section-title'>I am a <span className='accent-color'>Maker</span>.</Header>
        <Header className='row-section-text'>I love working on side projects.
        </Header>
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
            <Image src='assets/images/cards-mta.png' name='kafsc' size='medium' />
            <Card.Content>
              <Card.Header>eMTA LIRR</Card.Header>
              <Card.Description>eMTA LIRR is a native mobile app, a rethinking of MTA LIRR schedule and ticketing experience.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a target='_blank' rel='noopener noreferrer' href='http://bit.ly/emta-sylveelee'>
                View More <Icon name='arrow right' />
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
