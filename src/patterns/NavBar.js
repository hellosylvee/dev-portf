import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Menu, Icon } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary color='violet' fixed='top'>
        <Menu.Item as={Link} to='/'
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        > <Icon name='diamond' /> Sylvee Lee
        </Menu.Item>
        <Menu.Item as={Link} to='/photography' name='photography'
        active={activeItem === 'photography'}
        onClick={this.handleItemClick}
        > Photography
        </Menu.Item>
        <Menu.Item as={Link} to='/about' name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        > About
        </Menu.Item>
      </Menu>
    )
  }
}
