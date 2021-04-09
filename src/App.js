import React, { useState } from "react";
import "./styles.css";
import TodoInput from "./todoInput";
import TodoList from "./todoList";

export default function App() {
  const initialState = [];
  const [todo, setTodo] = useState("");
  const [list, setList] = useState(initialState);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    const newList = list.concat(todo);
    setList(newList);

    setTodo("");
  };

  return (
    <div className="App">
      <TodoInput onChange={handleChange} todo={todo} onClick={handleClick} />
      <TodoList lists={list} />
    </div>
  );
}
