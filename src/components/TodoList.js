import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todos) => (
          <Todo key={todos.id} text={todos.text} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
