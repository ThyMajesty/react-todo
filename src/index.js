import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import App from './App';

import { Router, Route, hashHistory } from 'react-router';

import Task from './task/task';
import Category from './category/category';
import './index.css';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/categories" component={Category}/>
      <Route path="/categories/tasks" component={Task}/>
    </Route>
  </Router>
), document.getElementById('app'))


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
