import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NPRApp from './NPRApp';
// import App from './App';
import './bootstrap-4.0.0-dist/css/bootstrap.css'
// import Counters from './components/Counters';
// import Login from './components/login'


ReactDOM.render(
  <React.StrictMode>
    <NPRApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
