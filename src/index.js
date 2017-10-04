import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
  <Route exact path="/" component={Explorer}/>
</BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
