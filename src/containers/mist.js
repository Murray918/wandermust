import React, {Component} from 'react';
import '../styles/App.css';
import {Link} from 'react-router-dom';

export default class Mist extends Component {
  render() {
    return (
      <div className="term">
        <h1>Mist</h1>
        <div className="results">
          <img src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?dpr=1&auto=compress,format&fit=crop&w=1500&h=&q=80&cs=tinysrgb&crop="></img>
          <h3>Chicago</h3>
        </div>
        <div className="results">
          <img src="https://images.unsplash.com/photo-1445813792994-1d804a9453c9?dpr=1&auto=compress,format&fit=crop&w=1415&h=&q=80&cs=tinysrgb&crop="></img>
          <h3>Baltimore</h3>
        </div>
      </div>
    )
  }
}
