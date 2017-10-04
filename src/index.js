import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// import List from './containers/List.js'
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
