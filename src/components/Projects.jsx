import React, { Component } from 'react'
import Project from './Project';
import ProjectList from '../ProjectList'

export default class Projects extends Component {
  render() {
    let projectList = Object.values(ProjectList).map((item) => {
      return <Project
      key={item.id}
      data={item}
    />
    });
    return (
      <div>
        <h1>Projects</h1>
        Below you will find all the projects I have been working on!
        {projectList}

      </div>
    )
  }
}

