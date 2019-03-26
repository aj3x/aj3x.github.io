import React, { Component } from 'react'
import ReactContactForm from 'react-mail-form';
import './Contact.scss'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <div className="contact">
          <p>
          Thank you for taking the time to look at my website.<br/>
          Feel free to contact me and I'll get back to you as soon as possible.
          </p>
          <ReactContactForm 
          className="contact-form" 
          to="***REMOVED***" 
          titlePlaceholder="Email" 
          />
        </div>
      </div>
    )
  }
}
