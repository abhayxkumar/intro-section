import React, { Component } from 'react'
import logo from '../images/logo.svg'
import './styles/header.css'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className='left-ul'>
            <li>Features</li>
            <li>Company</li>
            <li>Careers</li>
            <li>About</li>
        </ul>
        <ul className='right-ul'>
            <li>Login</li>
            <li>Register</li>
        </ul>
      </div>
    )
  }
}
