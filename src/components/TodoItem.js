import React, { Component } from "react";

export class TodoItem extends Component {
  getStyle() {
    let text = {
      textDecoration: "line-through"
    };
    let { isCompleted } = this.props.item;

    if (isCompleted === true) {
      return text;
    }
  }

  render() {
    const { title } = this.props.item;
    const { id } = this.props.item

    return (
      <ul className="Todo-items">
        <li style={this.getStyle()}>

          <input
            type="checkbox"
            className="checkbox"
            onChange={this.props.handleChange.bind(this,id)}
          />
          {" "}
          {title}
        </li>

      </ul>
    );
  }
}

export default TodoItem;
