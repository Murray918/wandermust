import React, { Component } from 'react';
import '../styles/App.css';
import List from '../containers/List.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> hello </h1>
        <List/>
      </div>
    );
  }
}

export default App;
