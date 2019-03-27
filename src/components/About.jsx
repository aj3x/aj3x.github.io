import React, { Component } from 'react'
import profile from '../files/profile.jpg'

export default class About extends Component {
  render() {
    return (
      <div>
        <h2>Hello World!</h2>
        <div className="clearfix">

          <img className="profile" src={profile} alt="Yours truly" title="Hello there!"/>
          <p className="about">
          My name is Alexander Russell.
          I am a graduate of the University of Saskatchewan with a degree in Computer Science and a Minor in Mathematics. 
          I am looking for a career that would facilitate my passion for learning and help me to grow as a developer.
          </p>
          I am a driven, easygoing individual who enjoys programming, whether it be with others or on my own.
          When I'm not working I spend my spare time, hiking, swimming, playing tennis, and video games.

        </div>
      </div>
    )
  }
}
