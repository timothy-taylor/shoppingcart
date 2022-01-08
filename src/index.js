import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouteSwitch from './RouteSwitch';

document.title = "The Skate Wheel Shop";

ReactDOM.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>,
  document.getElementById('root')
);
