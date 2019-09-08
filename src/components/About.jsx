import React, { Component } from 'react'
import profile from '../files/profile.jpg'

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <div className="clearfix">

          <img className="profile" src={profile} alt="Yours truly" title="Hello there!"/>
          <p className="about">
          My name is Alexander Russell.
          I am a graduate of the University of Saskatchewan with a degree in Computer Science and a Minor in Mathematics. 
          I am a currently a developer at <a href="http://territorial.ca">Territorial</a> working on <a href="https://territorial.ca/case-studies/hugr">Hugr</a>.
          </p>
          I am a driven, easygoing individual who enjoys programming, whether it be with others or on my own.
          When I'm not working I spend my spare time, hiking, swimming, playing tennis, and video games.

        </div>
      </div>
    )
  }
}
