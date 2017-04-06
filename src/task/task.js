import React, { Component } from 'react';
import './task.css';

class Task extends Component {
  constructor () {
    super();
    console.log(this)
  }
  render() {
    return (
      <div className="Task" >
        <div className="Task-header">
          <h2>{this.props.taskName}</h2>
          <p>{this.props.taskDescription}</p>
          <p>{this.props.taskCount}</p>
        </div>
      </div>
    );
  }

}

export default Task;