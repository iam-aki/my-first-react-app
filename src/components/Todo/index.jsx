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
handleOnChange = e => {
const { target: { value } } = e;
// Updating our task state with the input value...
this.setState({
task: value
});
}
render() {
return (
<div className="Todo">
<h1>New Task:</h1>
<form onSubmit={this.handleOnSubmit}>
<input
value={this.state.task}
onChange={this.handleOnChange}
/>
</form>
</div>
);
}
}
export default Todo;