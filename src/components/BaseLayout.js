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
      <NavLink activeClassName='selected' exact to='/'></NavLink>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/explore'>Explore</NavLink>
     </nav>

     </div>
    <div>
    {this.props.children}
    </div>
    </div>
    )
  }
}
