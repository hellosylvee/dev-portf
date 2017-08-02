import React, { Component } from 'react';
import { Grid, Card, Image, Header, Modal, Icon } from 'semantic-ui-react'

class Projects extends Component {
  render() {
    return (
      <Grid.Row className='row-section' centered columns={4}>
        <Header className='row-section-title'>I am a <span className='accent-color'>Web Developer</span>.</Header>
        <Header className='row-section-text'>Check out my recent projects <a className='social-btn-width'
            target='_blank' rel='noopener noreferrer' href='https://www.github.com/hellosylvee'>
            <Icon link name='code' color='blue' size='large'/>
          </a>.
        </Header>
        <Grid.Column className='column-margin'>
          <Card centered>
            <Image src='assets/images/cards-punnyposts.png' name='punny post project' size='medium' />
            <Card.Content>
              <Card.Header>Punny Posts</Card.Header>
              <Card.Meta>A social website to create and appreciate word puns and gifs</Card.Meta>
              <Card.Description className='card-desc-align'>Built with React with Rails backend, styled with Semantic CSS framework. Utilized JWT for user authentication and Giphy API for 3rd party content.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a target='_blank' rel='noopener noreferrer' href='https://www.github.com/hellosylvee/punny-posts'>
                <Icon name='github' size='large'/>Github
              </a>
              <Modal size='tiny' trigger={
                <a className='demo-play' rel='noopener noreferrer'>
                  <Icon name='video play outline' size='large'/>Demo
                </a>}>
                <Modal.Header>Punny Posts Demo</Modal.Header>
                <Modal.Content>
                  <iframe width="860" height="400" src="https://www.youtube.com/embed/D7_z7IEhYoY" title='punny posts video' frameborder="0" allowfullscreen></iframe>
                </Modal.Content>
              </Modal>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column className='column-margin'>
          <Card centered>
            <Image src='assets/images/cards-emem.png' name='emem meme generator project' size='medium' />
            <Card.Content>
              <Card.Header>emeM Meme</Card.Header>
              <Card.Meta>A meme generator</Card.Meta>
              <Card.Description className='card-desc-align'>Built in React with Rails backend and styled with Semantic CSS framework. Used Super-Agent and Dropzone for image handling, and Cloudinary for image storage.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a target='_blank' rel='noopener noreferrer' href='https://www.github.com/hellosylvee/nomnom'>
                <Icon name='github' size='large'/>Github
              </a>
              <Modal size='tiny' trigger={
                <a className='demo-play' rel='noopener noreferrer'>
                  <Icon name='video play outline' size='large'/>Demo
                </a>}>
                <Modal.Header>emeM Meme Demo</Modal.Header>
                <Modal.Content>
                  <iframe width="860" height="400" src="https://www.youtube.com/embed/3hQdH50G62E" title='emem video' frameborder="0" allowfullscreen></iframe>
                </Modal.Content>
              </Modal>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column className='column-margin'>
          <Card centered>
            <Image src='assets/images/cards-radlibz.png' name='radlibz project' size='medium' />
            <Card.Content>
              <Card.Header>Radlibz Demo</Card.Header>
              <Card.Meta>An interactive word game</Card.Meta>
              <Card.Description className='card-desc-align'>A spinoff of a popular word game, Madlibs. A user can create and save stories, and also view their word bank of frequently used words. Built with Ruby on Rails, styled with Materialize CSS framework.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a target='_blank' rel='noopener noreferrer' href='https://www.github.com/hellosylvee/radlibz'>
                <Icon name='github' size='large'/>Github
              </a>
              <Modal size='tiny' trigger={
                <a className='demo-play' rel='noopener noreferrer'>
                  <Icon name='video play outline' size='large'/>Demo
                </a>}>
                <Modal.Header>Radlibz Demo</Modal.Header>
                <Modal.Content>
                  <iframe width="860" height="400" src="https://www.youtube.com/embed/eb10ky_4hJA" title='radlibz video' frameborder="0" allowfullscreen></iframe>
                </Modal.Content>
              </Modal>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Projects;
