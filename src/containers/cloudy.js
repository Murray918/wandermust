import React, {Component} from 'react';
import '../styles/App.css';
import {Link} from 'react-router-dom';

export default class Cloudy extends Component {
  render() {
    return (
      <div className="term">
        <h1>Cloudy</h1>
        <div className="results">
          <img src="https://images.unsplash.com/photo-1485171856501-142ee5202006?dpr=1&auto=compress,format&fit=crop&w=1353&h=&q=80&cs=tinysrgb&crop="></img>
          <h3>Cape Cod</h3>
        </div>
        <div className="results">
          <img src="https://images.unsplash.com/photo-1452416040162-0c877de8b336?dpr=1&auto=compress,format&fit=crop&w=1500&h=&q=80&cs=tinysrgb&crop="></img>
          <h3>Charleston</h3>
        </div>
      </div>
    )
  }
}
