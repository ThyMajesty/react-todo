import React from 'react';
import { render } from 'react-dom'
import App from './App';

import { Router, Route, browserHistory } from 'react-router'

import Task from './task/task';
import Category from './category/category';
import './index.css';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/categories" component={Category}/>
      <Route path="/categories/tasks" component={Task}/>
    </Route>
  </Router>
), document.getElementById('root'));

