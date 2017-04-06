import React, { Component } from 'react';
import './category.css';

import Task from '../task/task';

import { Provider } from 'react-redux';

// We'll create this in Step 5.
import store from '../store.js';

// We'll create this in Step 6.
import TaskForm from '../add-task/add-task.js';

class Category extends Component {
  constructor () {
    super();
    this.tasks = [{
        name: 'task name',
        description: 'taskDescription',
        count: 20
      }];
    console.log(this)
  }
  render() {
    return (
      <div className="Category" >
        <div className="Category-header">
          <h2>{this.props.categoryName}</h2>
          <p>{this.props.categoryDescription}</p>
          <div>
            {this.tasks.map((el) => {
              return (
                <Task
                  taskName={el.name}
                  taskDescription={el.description}
                  taskCount={el.count}
                ></Task>
              )
            })}
          </div>
          <div>
            <button >Add Task</button>
          </div>
        </div>
      </div>
    );
  }

}

export default Category;