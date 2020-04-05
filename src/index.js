import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Technology from './components/pages/Technology'
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      //aqui vai as rotas
      <Route path='/'exact={true} component={App} />
      <Route path='/technology' component={Technology} />
    </Switch>
  </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
