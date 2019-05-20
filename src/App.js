import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Header from "./components/Header";
import TodosBox from "./components/TodosBox";
import InputBox from "./components/InputBox";
import About from "./components/About";

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
        isCompleted: false
      }
    ]
  };

  setChanges = id => {
    this.setState(prevstate => ({
      todos: prevstate.todos.map(obj => {
        if (obj.id === id) {
          obj.isCompleted = !obj.isCompleted;
        }
        return obj;
      })
    }));
  };

  addTodoToState = title => {
    let todo = {
      id: uuid(),
      title: title,
      isCompleted: false
    };

    this.setState(prevstate => ({
      todos: [...prevstate.todos, todo]
    }));
  };

  render() {
    return (
      <Router>
        <React-Fragment>
          <Header />

          
          <Route exact path="/" render={props => (
          <React-Fragment>
              <TodosBox
            todos={this.state.todos}
            makeChanges={this.setChanges}
            deleteTodos={this.deleteTodos}
          />

          {/* input */}
          <InputBox addTodo={this.addTodoToState} />
          </React-Fragment>
          )} />

          <Route path="/about" component={About}/>

        </React-Fragment>
      </Router>
    );
  }
}

export default App;
