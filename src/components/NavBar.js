import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    const navStyle = {
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    }

    return (
      <Menu secondary
            style={navStyle}
            color='violet'
            fixed='top'>
        <Menu.Item
          as={Link} to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick} >
          <Icon name='diamond' size='big'/>
        </Menu.Item>

        <Menu.Item
          as={Link} to='/projects'
          name='projects'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick} >
          Projects
        </Menu.Item>

        <Menu.Item
          as={Link} to='/photography'
          name='photography'
          active={activeItem === 'photography'}
          onClick={this.handleItemClick} >
          Photography
        </Menu.Item>

        <Menu.Item
          as={Link} to='/about'
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick} >
          About
        </Menu.Item>
      </Menu>
    )
  }
}
