import React from "react";
import { TodoItem } from "../types";
import ToDoListItem from "./TodoItem";

interface ToDoListProps {
  todos: TodoItem[];
  markCompleted: (index: number, completed: boolean) => void;
}

const ToDoList = ({ todos, markCompleted }: ToDoListProps) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <ToDoListItem
          todo={todo}
          markCompleted={(completed: boolean) =>
            markCompleted(index, completed)
          }
        />
      ))}
    </div>
  );
};

export default ToDoList;
