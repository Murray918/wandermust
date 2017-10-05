import React, {Component} from 'react';
import '../styles/App.css';
import {Link} from 'react-router-dom';

export default class Fog extends Component {
  render() {
    return (
      <div className="term">
        <h1>Mist</h1>
        <div className="results">
          <img src="https://images.unsplash.com/photo-1450149632596-3ef25a62011a?dpr=1&auto=compress,format&fit=crop&w=1432&h=&q=80&cs=tinysrgb&crop="></img>
          <h3>San Francisco</h3>
        </div>
        <div className="results">
          <img src="https://images.unsplash.com/photo-1437809781432-a957377661ee?dpr=1&auto=compress,format&fit=crop&w=1530&h=&q=80&cs=tinysrgb&crop="></img>
          <h3>Seattle</h3>
        </div>
      </div>
    )
  }
}
