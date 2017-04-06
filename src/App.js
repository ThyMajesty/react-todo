import React, { Component } from 'react';
import { Link } from 'react-router'
import './App.css';

import Category from './category/category';

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
        <ul role="nav">
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/categories/task">Tasks</Link></li>
        </ul>

        {/* add this */}
        {this.props.children}

      </div>
    )
  }


  /*render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>TODO</h2>
        </div>
        {this.categories.map((el)=> {
          return (
            <Category
              categoryName={el.name}
              categoryDescription={el.description}
            ></Category>
          )
        })}
      </div>
    );
  }*/

}

export default App;
