// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Item from "./Todo";

const TodoList = (props) => {
  const handleClick = () => {
    props.handleClearItems();
  };
  return (
    <div className="todo-list">
      {props.list.map((item) => (
        <Item
          handleToggleItem={props.handleToggleItem}
          key={item.id}
          item={item}
        />
      ))}
      <button onClick={handleClick} className="clear-btn">
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
