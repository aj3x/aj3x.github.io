import React, { Component } from 'react'
import PropTypes from 'prop-types';
import githubText from '../files/GitHub-Logos/GitHub_Logo.png'
import defaultImg from '../files/default.png';
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
    description: PropTypes.object.isRequired, //PropTypes.string.isRequired
    languages: PropTypes.array.isRequired
  }
  render() {
    let i=0
    let languageList = Object.values(this.props.languages).map((item) => {
      i += 1;
      return (<Language key={item+i}>{item}</Language>);
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
      <a href="https://github.com/aj3x/red-markets-reactapp">
        <img src={githubText} alt="Github" height="42px"/>
      </a>
    </div>
  </div>
</div>



      // <div className="card" id={this.props.id}>
      //   <div className="card-header" id={"heading"+this.props.id}>
      //     <h5 className="mb-0">
      //         {this.props.title}
      //         {/* <img src={(this.props.img)} alt="a dog?"/> */}
      //     </h5>
      //   </div>
      //   <div>
      //     <div className="card-body">
      //       <p>
      //         A web application I developed using Angular, Bootstrap, Less, and React for keeping track of characters 
      //         int the pen and paper game 'Red Markets'.
      //         This application uses some other packages in react such 
      //         as <a href="https://www.npmjs.com/package/react-router-dom">react-router-dom</a> as 
      //         well as <a href="https://www.npmjs.com/package/rc-slider">rc-slider</a>.
      //       </p>
      //       <a href="https://github.com/aj3x/red-markets-reactapp">
      //         <img src={githubText} alt="Github" height="42px"/>
      //       </a>
      //     </div>
      //   </div>
      // </div>
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
