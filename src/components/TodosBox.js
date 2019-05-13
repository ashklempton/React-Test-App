import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodosBox extends Component {

  render() {
    // make todosArray a variable pointing the state 
    const todosArray = this.props.todos;

    return (
        // container for todos , is given the flex property
      <div className="Todos-Container">

        {/* main object containg the todos */}
        <div className="Todos">
          {/* make TodoItem objects by mapping over the elements of todoArray */}
          {todosArray.map((todo) => (
              <TodoItem item={todo} key={todo.id} handleChange={this.props.makeChanges}/>
          ))}

        </div>
      </div>
    );
  }
}

export default TodosBox;
