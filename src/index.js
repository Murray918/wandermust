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
import UserProfile from './containers/UserProfile.js';
import Explore from './containers/Explore.js';
import ExploreTemp from './containers/ExploreTemp.js';
import ExploreCat from './containers/ExploreCat.js';

ReactDOM.render(
<BrowserRouter>
<BaseLayout>
  <Switch>
    <Route exact path='/' component={Splash} />
    <Route path='/list' component={List} />
    <Route path='/result' component={Result} />
    <Route path='/explore' component={Explore} />
  </Switch>
</BaseLayout>
</BrowserRouter>

,document.getElementById('root')
);
registerServiceWorker();
