import React from "react";

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, settodoValue } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          settodoValue(e.target.value);
        }}
        placeholder="Enter Todo..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          settodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
