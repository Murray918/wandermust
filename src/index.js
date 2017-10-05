import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import BaseLayout from './components/BaseLayout.js';
import Splash from './components/Splash.js';
import List from './containers/List.js';
import Result from './containers/Result.js';
import Cloudy from './containers/cloudy.js';
import Explore from './containers/Explore.js';
import Rain from './containers/rain.js';
import Clear from './containers/clear.js';
import Mist from './containers/mist.js';
import Fog from './containers/fog.js';
import Thunderstorm from './containers/thunderstorm.js';
import Drizzle from './containers/drizzle.js';

ReactDOM.render(
<BrowserRouter>
<BaseLayout>
  <Switch>
    <Route exact path='/' component={Splash} />
    <Route path='/list' component={List} />
    <Route path='/result' component={Result} />
    <Route path='/explore' component={Explore} />
    <Route path='/cloudy' component={Cloudy} />
    <Route path='/rain' component={Rain} />
    <Route path='/clear' component={Clear} />
    <Route path='/mist' component={Mist} />
    <Route path='/fog' component={Fog} />
    <Route path='/thunderstorm' component={Thunderstorm} />
    <Route path='/drizzle' component={Drizzle} />
  </Switch>
</BaseLayout>
</BrowserRouter>

,document.getElementById('root')
);
registerServiceWorker();
