import React from 'react';
import ReactDOM from 'react-dom';
import RouteSwitch from './RouteSwitch';
import './index.css';

document.title = "The Skate Wheel Shop";

ReactDOM.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>,
  document.getElementById('root')
);
