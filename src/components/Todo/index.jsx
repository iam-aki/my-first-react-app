import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import './Todo.css';

class Todo extends Component {
constructor() {
super();
// Initial state...
this.state = {
task: '',
items: []
};
}
render() {
return (
<div className="Todo">
<h1>New Task:</h1>
<form onSubmit={this.handleOnSubmit}>
<input value={this.state.task} />
</form>
</div>
);
}
}
export default Todo;