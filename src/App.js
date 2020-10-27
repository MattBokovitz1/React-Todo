import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo.scss";

const list = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
  {
    task: "Clean Room",
    id: 1528817085681,
    completed: false,
  },
  {
    task: "Workout",
    id: 1528817085682,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: list,
    };
  }

  handleToggleItem = (itemId) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  handleAddItem = (task) => {
    this.setState({
      list: [
        ...this.state.list,
        {
          task: task,
          id: this.state.list.length,
          completed: false,
        },
      ],
    });
  };
  clearItems = () => {
    this.setState({
      list: this.state.list.filter((item) => !item.completed),
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Personal Checklist</h1>
          <TodoForm handleAddItem={this.handleAddItem} />
        </div>
        <TodoList
          handleClearItems={this.clearItems}
          handleToggleItem={this.handleToggleItem}
          list={this.state.list}
        />
      </div>
    );
  }
}

export default App;
