import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import Home from './page/home/home';
import './index.css';

const store = createStore(reducer);


ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'));
