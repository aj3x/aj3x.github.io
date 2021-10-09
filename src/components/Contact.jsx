import React, { PureComponent } from 'react'
import './Contact.scss'
import ReactGA from 'react-ga';

export default class Contact extends PureComponent {
  constructor(props) {
    super(props);
    ReactGA.pageview("/contact");
  }
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <div className="contact">
          <p>
          Thank you for taking the time to look at my website.<br/>
          Feel free to contact me and I'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    )
  }
}
