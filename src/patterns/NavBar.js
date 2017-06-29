import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable widths={4}>
        <Menu.Item as={Link} to='/home'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        > Sylvee Lee
        </Menu.Item>
        <Menu.Item as={Link} to='/projects' name='projects'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
        > Projects
        </Menu.Item>
        <Menu.Item as={Link} to='/design' name='design'
          active={activeItem === 'design'}
          onClick={this.handleItemClick}
        > Design
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
