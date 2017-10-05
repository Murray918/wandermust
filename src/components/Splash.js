import React, { Component } from 'react';
import '../styles/App.css';

export default class Splash extends Component {
  render() {
    return (
      <div className="splash">
        <div className="circle">

      <form>
        <input type="number" placeholder="65°" className="tempinput" name="quantity" min="-20" max="120"></input>
      </form>
      <p>Adjust the thermostat to find the perfect vacation spot.</p>

    </div>
    </div>

    )
  }
}
