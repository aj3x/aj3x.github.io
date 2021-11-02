import React, { PureComponent } from 'react';
import ReactGA from 'react-ga';
import ProjectList from '../ProjectList';
import Project from './Project';

export default class Projects extends PureComponent{
  constructor(props) {
    super(props);
    ReactGA.pageview("/knowledgebase");
  }
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
        {projectList}
      </div>
    )
  }
}
