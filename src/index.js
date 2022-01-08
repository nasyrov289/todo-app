import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [];

ReactDOM.render(
  <React.StrictMode>
    <title>TodoMatic</title>
    <App tasks={DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);


