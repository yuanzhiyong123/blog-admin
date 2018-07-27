import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import Home from './page/home/home';
import './index.css';

const store = createStore(reducer);


ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
