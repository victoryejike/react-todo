import React from "react";

const TodoList = ({ lists }) => {
  return (
    <>
      {lists.map((list) => (
        <ul>{list}</ul>
      ))}
    </>
  );
};

export default TodoList;
