import React, { useState } from "react";

interface ToDoInputProps {
  addTodo: (todo: string) => void;
}

const ToDoInput = ({ addTodo }: ToDoInputProps) => {
  const [todo, setTodo] = useState("");

  const addButtonClicked = () => {
    setTodo("");
    addTodo(todo);
  };

  return (
    <div>
      <input
        id="todo"
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button onClick={addButtonClicked}>Add</button>
    </div>
  );
};

export default ToDoInput;
