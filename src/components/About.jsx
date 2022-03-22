import React, { PureComponent } from 'react';
import profile from '../static/img/profile.jpg';

export default class About extends PureComponent {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <div className="clearfix">

          <img className="profile" src={profile} alt="Yours truly" title="Hello there!"/>
          <p className="about">
          My name is Alexander Russell.
          I am a graduate of the University of Saskatchewan with a degree in Computer Science and a Minor in Mathematics. 
          I have worked on various projects from games to machine learning.
          I am eager to continue learning and improve my work.
          I am a currently a software developer at <a
            href="https://territorial.ca">
            Territorial
          </a> in Saskatoon, working on the app <a href="https://hugr.ca">Hugr</a>.
          </p>
          I am a driven, easygoing individual who enjoys programming, whether it be with others or on my own.
          When I'm not working I spend my spare time, hiking, swimming, playing tennis, and video games.

        </div>
      </div>
    )
  }
}
