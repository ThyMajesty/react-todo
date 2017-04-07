import React, { Component } from 'react';
import { Link } from 'react-router'
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.categories = [
      {
        name: 'First Category',
        description: 'The very first category',
        id: 1
      },
      {
        name: 'Second Category',
        description: 'The very second category',
        id: 1
      }
    ];
  }

  render() {
    return (
      <div>
        <h1>TODO</h1>
        <ul role="navigation">
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/categories/task">Tasks</Link></li>
        </ul>

        {this.props.children}

      </div>
    )
  }

}

export default App;
