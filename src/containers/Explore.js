import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

export default class ExploreCat extends Component {
  render() {
    return (
      <div className="explorecat">
      <button className="btn"><Link to="./cloudy">Cloudy</Link></button>
      <button className="btn"><Link to="./rain">Rain</Link></button>
      <button className="btn"><Link to="./clear">Clear</Link></button>
      <button className="btn"><Link to="./mist">Mist</Link></button>
      <br />
      <button className="btn"><Link to="./fog">Fog</Link></button>
      <button className="btn"><Link to="./thunderstorm">Thunderstorm</Link></button>
      <button className="btn"><Link to="./drizzle">Drizzle</Link></button>
      </div>
    )
  }
}
