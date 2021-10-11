import React, { PureComponent } from 'react';
import ReactGA from 'react-ga';
import Grain from './Grain';
import githubTextLogo from '../static/img/GitHub-Logos/GitHub_Logo_240.png';
import ProjectImages from '../static/img/project-img';
import './Project.scss';

export default class Project extends PureComponent<{data:ProjectType}> {
  render() {
  const { data } = this.props;
  let languageList = Object.values(data.languages).map((item, index) => {
    return (
      <div className="project-language" key={index}>
        {/* {item == null ? <p style={{color: 'red'}}>ERROR</p> : item} */}
        {item}
      </div>
    );
  })

  let projectImg = ProjectImages[data.img||'default'];
  
  return (
<div className="project-card">
  <div className="project-main">
    <div className="project-img">
      <Grain />
      <img
        src={projectImg}
        title={data.alt || data.title}
        alt={data.alt ?? "project"}
      />
    </div>
    <div className="project-body">
      <div className="project-header">
        <div className="project-title">
          <h4>
            {data.title}
          </h4>
          
          <div className="project-job">
            {/* <p> */}
            {data.job}
            {/* </p> */}
          </div>
        </div>
        <div className="project-dates">
          <p>
            {data.dates}
          </p>
        </div>
        <hr></hr>
        <div className="project-description">
          {/* <p> */}
            {data.description}
          {/* </p> */}
        </div>
      </div>
    </div>
  </div>

  <div className="project-description-mobile">
      {/* <p> */}
      {data.description}
      {/* </p> */}
  </div>
    

  <div className="project-footer">
    <div className="project-used">
      {languageList}
    </div>
    <div className="project-link">
      <a href={data.git} onClick={() => ReactGA.event({
        category: 'Project',
        action: 'Clicked git',
        // @ts-ignore
        value: data.id
      })}>
        <img src={githubTextLogo} alt="Project Link" height="42px"/>
      </a>
    </div>
  </div>
</div>
  )
}
}
