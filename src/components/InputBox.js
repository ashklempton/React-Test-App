import React, { Component } from "react";

export default class InputBox extends Component {

  state = {
    title:''
  }

  handleChange = (e) => {
    this.setState({title:e.target.value})
  }

  submitTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title)
    this.setState({title : ''})
  }


  render() {
    return (
      <div className="input-container">
        <form onSubmit={this.submitTodo}>
          <input type="text" className="input-box" placeholder="Enter Your Todo" onChange={this.handleChange} value={this.state.title} />
          <input type="submit" className="input-submit" value="submit" />
        </form>
      </div>
    );
  }
}
