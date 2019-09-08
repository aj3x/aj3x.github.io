import React, { Component } from 'react'
import PropTypes from 'prop-types';
import githubTextLogo from '../files/GitHub-Logos/GitHub_Logo.png'
import defaultProjectImage from '../files/project-img/default.png';
import './Project.scss';
import Grain from './Grain';

export default class Project extends Component {
  static propTypes = {
    data: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string,
      alt: PropTypes.string,
      dates: PropTypes.string.isRequired,
      job: PropTypes.string.isRequired,
      description: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
      ]).isRequired,
      languages: PropTypes.array.isRequired,
      git: PropTypes.string
    })
  }
  render() {

    const { data } = this.props;
    let i = 0
    let languageList = Object.values(data.languages).map((item) => {
      i += 1;
      return (<Language key={i}>{item}</Language>);
    })

    return (
<div className="project-card">
  <div className="project-main">
    <div className="project-img">
      <Grain></Grain>
      <img
        src={data.img == null
          ? defaultProjectImage
          : require('../files/project-img/'+data.img)}
        alt={data.alt==null
          ? data.alt
          : "default image"}
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
      <a href={data.git}>
        <img src={githubTextLogo} alt="Github" height="42px"/>
      </a>
    </div>
  </div>
</div>
    )
  }
}

export class Language extends Component{
  static propTypes ={
    children: PropTypes.string.isRequired,
  }
  render(){
    const { children } = this.props;
    return(
      <div className="project-language">
        {/* {children} */}
        {children == null ? <p style={{color: 'red'}}>ERROR</p> : children}
      </div>
    );
  }
}
