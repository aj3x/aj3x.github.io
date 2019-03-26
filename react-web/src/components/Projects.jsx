import React, { Component } from 'react'
import Project from './Project';

export default class Projects extends Component {
  render() {
    let exampleProject = (
      <Project
        id="RedMarkets"
        title="Red Markets App"
        img={require('../files/404.jpg')}
        alt="Red Markets Main Page"
        dates="Nov 2018 - Jan 2019"
        job="Programmer"
        description={<p>
          A web application I developed using Angular, Bootstrap, Less, and React for keeping track of characters 
          in the pen and paper game Red Markets.
          This application uses some other packages in react such 
          as <a href="https://www.npmjs.com/package/react-router-dom">react-router-dom</a> as 
          well as <a href="https://www.npmjs.com/package/rc-slider">rc-slider</a>.
        </p>}
        languages={["React", "Sass", "","React", "Sass", "","React", "Sass", "","React", "Sass", "","React", "Sass", "",]}
  
      />);

    let projectList = Array(10).fill(exampleProject);
    return (
      <div className="container" id="">
        <h1>Projects</h1>
        Below you will find all the projects I have been working on!
        {projectList}

      </div>
    )
  }
}

