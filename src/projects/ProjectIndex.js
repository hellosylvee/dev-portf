import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Grid, Image, Header } from 'semantic-ui-react'

const ProjectIndex = ({ match }) => {

  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  )
}

export default ProjectIndex;
