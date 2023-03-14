import Todo from "./Todo";
import { useContext } from "react";
import todoContext from "../todoContext";

export default function TodoList() {
  const { todos, deleteTodo, updateTodoText, completeTodo} = useContext(todoContext)
  const createCompleteHandler = (id) => {
    return () => completeTodo(id);
  };
  const createDeleteHandler = (id) => {
    return () => deleteTodo(id);
  };
  const createUpdateHandler = (id) => {
    return (text) => updateTodoText(id, text);
  };

  return (
    <div className="w-full mt-5">
      {todos.map((el) => (
        <Todo
          key={el.id}
          remove={createDeleteHandler(el.id)}
          check={createCompleteHandler(el.id)}
          updateTask={createUpdateHandler(el.id)}
          done={el.done}
          text={el.text}
        />
      ))}
    </div>
  );
}
