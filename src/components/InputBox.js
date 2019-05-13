import React, { Component } from "react";

export default class InputBox extends Component {

    submitTodo = (e) => {
        e.preventDefault()
        let title = this.refs.todo.value;
        this.refs.todo.value = ''
        console.log(title)
    }

  render() {
    return (
      <div className="input-container">
        <form onSubmit={this.submitTodo}>
          <input type="text" className="input-box" placeholder="Enter Your Todo" ref="todo" />
          <input type="submit" className="input-submit" value="submit" />
        </form>
      </div>
    );
  }
}
