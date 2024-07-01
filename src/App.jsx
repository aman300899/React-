import React, { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, settodos] = useState([]);
  const [todoValue, settodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    const newtodolist = [...todos, newTodo];
    persistData(newtodolist);
    settodos(newtodolist);
  }

  function handleDeleteTodos(Index) {
    const newtodolist = todos.filter((todo, TodoIndex) => {
      return TodoIndex !== Index;
    });
    persistData(newtodolist);
    settodos(newtodolist);
  }

  function handleEditTodos(Index) {
    const valueTobeEdited = todos[Index];
    settodoValue(valueTobeEdited);
    handleDeleteTodos(Index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    settodos(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        handleAddTodos={handleAddTodos}
        settodoValue={settodoValue}
        todoValue={todoValue}
      />
      <TodoList
        handleDeleteTodos={handleDeleteTodos}
        todos={todos}
        handleEditTodos={handleEditTodos}
      />
    </>
  );
}
