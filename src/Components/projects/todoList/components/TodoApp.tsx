import React, { useState } from "react";
import { TodoItem } from "../types";
import ToDoInput from "./TodoInput";
import ToDoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, { name: todo, completed: false }]);
  };

  const markCompleted = (index: number, completed: boolean) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: completed } : todo
      )
    );
  };

  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ToDoInput addTodo={addTodo} />
      <ToDoList todos={todos} markCompleted={markCompleted} />
    </div>
  );
};

export default TodoApp;
