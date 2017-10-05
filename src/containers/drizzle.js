import React, {Component} from 'react';
import '../styles/App.css';
import {Link} from 'react-router-dom';

export default class Drizzle extends Component {
  render() {
    return (
      <div className="term">
        <h1>Drizzle</h1>
        <div className="results">
          <img src="https://images.unsplash.com/photo-1482282375187-a7e57f76026d?dpr=1&auto=compress,format&fit=crop&w=1458&h=&q=80&cs=tinysrgb&crop="></img>
          <h3>Lake Tahoe</h3>
        </div>
        <div className="results">
          <img src="https://images.unsplash.com/photo-1451243788169-0c1ea47fe6c8?dpr=1&auto=compress,format&fit=crop&w=1489&h=&q=80&cs=tinysrgb&crop="></img>
          <h3>Portland</h3>
        </div>
      </div>
    )
  }
}
