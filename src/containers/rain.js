import React, {Component} from 'react';
import '../styles/App.css';
import {Link} from 'react-router-dom';

export default class Rain extends Component {
  render() {
    return (
      <div className="term">
        <h1>Rain</h1>
        <div className="results">
          <img src="https://images.unsplash.com/photo-1463109598173-3864231fade5?dpr=1&auto=compress,format&fit=crop&w=1373&h=&q=80&cs=tinysrgb&crop="></img>
          <h3>Orlando</h3>
        </div>
        <div className="results">
          <img src="https://images.unsplash.com/photo-1476984251899-8d7fdfc5c92c?dpr=1&auto=compress,format&fit=crop&w=1489&h=&q=80&cs=tinysrgb&crop="></img>
          <h3>Miami</h3>
        </div>
      </div>
    )
  }
}
