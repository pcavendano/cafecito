import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import './resources/styles.css';

ReactDOM.render(
  <BrowserRouter basename="/cafecito">
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
