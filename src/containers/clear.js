import React, {Component} from 'react';
import '../styles/App.css';
import {Link} from 'react-router-dom';

export default class Clear extends Component {
  render() {
    return (
      <div className="term">
        <h1>Clear</h1>
        <div className="results">
          <img src="https://images.unsplash.com/photo-1506804886640-20a2c0857946?dpr=1&auto=compress,format&fit=crop&w=1567&h=&q=80&cs=tinysrgb&crop="></img>
          <h3>Las Vegas</h3>
        </div>
        <div className="results">
          <img src="https://images.unsplash.com/photo-1471893370050-2c1a36cf555c?dpr=1&auto=compress,format&fit=crop&w=1357&h=&q=80&cs=tinysrgb&crop="></img>
          <h3>Sun Valley</h3>
        </div>
      </div>
    )
  }
}
