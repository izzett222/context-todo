import { useState } from "react";
import todoContext from "../todoContext";
import { nanoid } from "nanoid";

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const createNewTodo = (text) => {
    setTodos([{ text, id: nanoid(), done: false }, ...todos]);
  };
  const completeTodo = (id) => {
    const newTodos = todos.map((el) => {
      if (el.id === id) {
        return { ...el, done: !el.done };
      } else {
        return { ...el };
      }
    });
    setTodos(newTodos);
  };
  const updateTodoText = (id, text) => {
    const newTodos = todos.map((el) => {
      if (el.id === id) {
        return { ...el, text: text };
      } else {
        return { ...el };
      }
    });
    setTodos(newTodos);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  return (
    <todoContext.Provider
      value={{ todos, deleteTodo, updateTodoText, createNewTodo, completeTodo }}
    >
      {children}
    </todoContext.Provider>
  );
}
