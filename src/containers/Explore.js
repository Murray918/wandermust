import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

export default class ExploreCat extends Component {
  render() {
    return (
      <div className="explorecat">
      <div className="catcoverPhoto">
      </div>
      <button className="btn">Cloudy</button>
      <button className="btn">Rain</button>
      <button className="btn">Clear</button>
      <button className="btn">Mist</button>
      <button className="btn">Fog</button>
      <button className="btn">Haze</button>
      <button className="btn">Thunderstorm</button>
      <button className="btn">Drizzle</button>
      </div>
    )
  }
}
