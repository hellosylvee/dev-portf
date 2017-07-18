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
            <Image src='assets/images/dino.jpg' name='bird' size='medium' />
            <Card.Content>
              <Card.Header>Fostership</Card.Header>
              <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                View More <Icon name='arrow right' />
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column className='column-margin'>
          <Card>
            <Image src='assets/images/dino.jpg' name='bird' size='medium' />
            <Card.Content>
              <Card.Header>Fostership Portal</Card.Header>
              <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                View More <Icon name='arrow right' />
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column className='column-margin'>
          <Card>
            <Image src='assets/images/dino.jpg' name='bird' size='medium' />
            <Card.Content>
              <Card.Header>Pivot Pong</Card.Header>
              <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
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
