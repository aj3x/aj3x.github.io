import React, { PureComponent } from 'react';
import ProjectList from '../ProjectList';
import Project from './Project';

export default class Projects extends PureComponent{
  render() {
    const projectList = ProjectList.map((item) => {
      return <Project
        key={item.id}
        data={item}
      />
    });
    return (
      <div>
        <h1>Projects</h1>
        Below you will find some of the projects I've worked on!
        This list is by no means extensive so feel free to ask me about other projects I've worked on.
        {projectList}
      </div>
    )
  }
}
