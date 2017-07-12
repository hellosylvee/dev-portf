import React from 'react'
import { Dropdown } from 'semantic-ui-react'

let role = [
  {
    text: 'Designer',
    value: 'Designer',
  },
  {
    text: 'Developer',
    value: 'Developer',
  },
  {
    text: 'Photographer',
    value: 'Photographer',
  },
  {
    text: 'Calligrapher',
    value: 'Calligrapher',
  },
]


const RoleDropdown = () => (
  <Dropdown placeholder='' fluid selection options={role} />
)

export default RoleDropdown
