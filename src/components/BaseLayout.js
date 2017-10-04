import React, { Component } from 'react';
import '../styles/App.css';
import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
    <div className="NavBar">

     <nav>
      <NavLink to='/user'>View Profile</NavLink>
      <NavLink to='/browse'>Browse</NavLink>
     </nav>

     </div>
    <div>
    {this.props.children}
    </div>
    <footer>
      <span className="footer-title">&copy WanderMust </span>
      <span>For when you simply <strong>must</strong> get away</span>
    </footer>
    </div>
    )
  }
}
