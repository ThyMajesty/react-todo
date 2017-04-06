/*
import React from 'react';
import { connect } from 'react-redux';
import { Field, Form, actions } from 'react-redux-form';

class TaskForm extends React.Component {
  handleSubmit(user) {
    let { dispatch } = this.props;

    // Do whatever you like in here.
    // You can use actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
  }
  render() {
    let { user } = this.props;

    return (
      <Form model="task"
            onSubmit={(task) => this.handleSubmit(task)}>
        <Field model="task.name">
          <label>Task name:</label>
          <input type="text" />
        </Field>

        <Field model="task.description">
          <label>Last name:</label>
          <input type="text" />
        </Field>

        <button type="submit">
          Add Task, { task.name } { task.description }!
        </button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return { task: state.task };
}

export default connect(mapStateToProps)(TaskForm);*/
