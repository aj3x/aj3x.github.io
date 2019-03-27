import React, { Component } from 'react'
import Project from './Project';
import ProjectList from '../ProjectList.jsx'

export default class Projects extends Component {
  render() {
    // let exampleProject = (
    //   <Project
    //     id="RedMarkets"
    //     title="Red Markets App"
    //     img={require('../files/404.jpg')}
    //     alt="Red Markets Main Page"
    //     dates="Nov 2018 - Jan 2019"
    //     job="Programmer"
    //     description={<p>
    //       A web application I developed using Angular, Bootstrap, Less, and React for keeping track of characters 
    //       in the pen and paper game Red Markets.
    //       This application uses some other packages in react such 
    //       as <a href="https://www.npmjs.com/package/react-router-dom">react-router-dom</a> as 
    //       well as <a href="https://www.npmjs.com/package/rc-slider">rc-slider</a>.
    //     </p>}
    //     languages={["React", "Sass", "Angular", "Less", "JavaScript", "CSS", "HTML5", "JSX", "PHP", "Redux"]}
    //   />);

    // let projectList = Array(10).fill(exampleProject);
    let projectList = Object.values(ProjectList).map((item) => {
      return <Project
      key={item.id}
      id={item.id}
      title={item.title}
      img={item.img == null ? null : require('../files/project-img/'+item.img)}
      alt={item.alt}
      dates={item.dates}
      job={item.job}
      description={item.description}
      languages={item.languages}
      git={item.git}
    />
    });
    return (
      <div className="container">
        <h1>Projects</h1>
        Below you will find all the projects I have been working on!
        {projectList}

      </div>
    )
  }
}

