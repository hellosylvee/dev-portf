import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class Subnav extends Component {
  state = { activeItem: 'apple' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item name='apple' active={activeItem === 'apple'} onClick={this.handleItemClick} />
        <Menu.Item name='banana' active={activeItem === 'banana'} onClick={this.handleItemClick} />
        <Menu.Item name='carrot' active={activeItem === 'carrot'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}
