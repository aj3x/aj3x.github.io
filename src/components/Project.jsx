import React, { Component } from 'react'
import PropTypes from 'prop-types';
import githubText from '../files/GitHub-Logos/GitHub_Logo.png'
import defaultImg from '../files/project-img/default.png';
import './Project.scss';
import Grain from './Grain';

export default class Project extends Component {
  static propTypes = {
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
  }
  render() {
    let i=0
    let languageList = Object.values(this.props.languages).map((item) => {
      i += 1;
      return (<Language key={i}>{item}</Language>);
    })

    return (
<div className="project-card">
  <div className="project-main">
    <div className="project-img">
      <Grain></Grain>
      <img src={this.props.img==null ? defaultImg : this.props.img} alt={this.props.alt==null ? this.props.alt : "default image"}/>
    </div>
    <div className="project-body">
      <div className="project-header">
        <div className="project-title">
          <h4>
            {this.props.title}
          </h4>
          
          <div className="project-job">
            {/* <p> */}
            {this.props.job}
            {/* </p> */}
          </div>
        </div>
        <div className="project-dates">
          <p>
            {this.props.dates}
          </p>
        </div>
        <hr></hr>
        <div className="project-description">
          {/* <p> */}
            {this.props.description}
          {/* </p> */}
        </div>
      </div>
    </div>
  </div>

  <div className="project-description-mobile">
      {/* <p> */}
      {this.props.description}
      {/* </p> */}
  </div>
    

  <div className="project-footer">
    <div className="project-used">
      {languageList}
    </div>
    <div className="project-link">
      <a href={this.props.git}>
        <img src={githubText} alt="Github" height="42px"/>
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
    return(
      <div className="project-language">
        {/* {this.props.children} */}
        {this.props.children == null ? <p style={{color: 'red'}}>ERROR</p> : this.props.children}
      </div>
    );
  }
}
