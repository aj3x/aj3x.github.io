import React, { PureComponent } from 'react'
import Project from './Project';
import ProjectList from '../ProjectList'
import ReactGA from 'react-ga';

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
        Below you will find all the projects I have been working on!
        {projectList}
      </div>
    )
  }
}