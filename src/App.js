import React, { Component } from "react";
import Header from "./components/Header";
import TodosBox from "./components/TodosBox";
import InputBox from "./components/InputBox"

const uuid = require("uuid/v4");

export class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Cleaning out my closet",
        isCompleted: false
      },

      {
        id: uuid(),
        title: "wiping my floor",
        isCompleted: false
      },

      {
        id: uuid(),
        title: "washing laundry",
        isCompleted:false
      }
    ]
  };

  setChanges = (id) => {

    this.setState(prevstate => ({
      todos:prevstate.todos.map(obj => {
        if(obj.id === id){
          obj.isCompleted = !obj.isCompleted
        }
        return obj
      })
    }))

  }

  render() {
    return (
      <React-Fragment>
        <Header />
        <TodosBox todos={this.state.todos} makeChanges={this.setChanges} />

        {/* input */}
        <InputBox>
        </InputBox>

      </React-Fragment>
    );
  }
}

export default App;
