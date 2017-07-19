import React, { Component } from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react'

class Footer extends Component {
  render() {
    return (
      <Grid.Row className='row-section footer-section' centered columns={4}>
        <div className='social-btns'>
          <a className='social-btn-width'
            target='_blank' rel='noopener noreferrer' href='https://mail.google.com/mail/?view=cm&fs=1&to=hellosylvee@gmail.com&su=Hello%20Sylvee&body=I%20am%20reaching%20to%20from%20your%20website.%20'>
            <Icon link name='mail outline' color='white' size='big'/>
          </a>
          <a className='social-btn-width'
            target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/sylviaclee/'>
            <Icon link name='linkedin' color='white' size='big'/>
          </a>
          <a className='social-btn-width'
            target='_blank' rel='noopener noreferrer' href='https://www.twitter.com/hellosylvee'>
            <Icon link name='twitter' color='white' size='big'/>
          </a>
        </div>
        <p className='current-year'>&#169; 2017 Sylvee Lee</p>
      </Grid.Row>
    );
  }
}

export default Footer;
