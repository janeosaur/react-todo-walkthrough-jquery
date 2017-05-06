import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router'
import routes from './config/routes.js'
import App from './App';
// import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root2')
// );

ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root')
);
