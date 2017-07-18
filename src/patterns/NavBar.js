import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted color='blue' stackable widths={4}>
        <Menu.Item as={Link} to='/home'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        > Sylvee Lee
        </Menu.Item>
        <Menu.Item as={Link} to='/process' name='process'
        active={activeItem === 'process'}
        onClick={this.handleItemClick}
        > Process
        </Menu.Item>
        <Menu.Item as={Link} to='/misc' name='misc'
        active={activeItem === 'misc'}
        onClick={this.handleItemClick}
        > Misc.
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
