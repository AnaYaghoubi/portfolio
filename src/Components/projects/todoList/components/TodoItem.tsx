import React from "react";
import { TodoItem } from "../types";

export interface ToDoListItemProps {
  todo: TodoItem;
  markCompleted: (completed: boolean) => void;
}

const ToDoListItem = ({ todo, markCompleted }: ToDoListItemProps) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(event) => markCompleted(event.target.checked)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.name}
      </span>
    </div>
  );
};

export default ToDoListItem;
