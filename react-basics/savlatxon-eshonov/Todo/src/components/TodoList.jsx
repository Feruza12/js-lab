import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, title, remove }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {todos.map((todo, index) => (
        <TodoItem
          remove={remove}
          number={index + 1}
          todo={todo}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
