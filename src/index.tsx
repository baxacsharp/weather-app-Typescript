import React from 'react';
import ReactDOM from 'react-dom';
import CardTracks from './components/MainComponents/CardTracks';
import Weather from './components/MainComponents/Weather';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={CardTracks} />
      <Route path="/" exact component={ App} />
      <Route path= '/city/:id' exact render={(routerProps)=><Weather  id={routerProps.match.params.id} {...routerProps}/>}/>
     
   </Router>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
