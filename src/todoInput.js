import React from "react";

const TodoInput = ({ todo, onClick, onChange }) => {
  return (
    <>
      <input
        placeholder="Enter Todo"
        type="text"
        value={todo}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>
        Add Todo
      </button>
    </>
  );
};

export default TodoInput;
