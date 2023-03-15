import Todo from "./Todo";
import { useContext } from "react";
import todoContext from "../todoContext";

export default function TodoList() {
  const { todos } = useContext(todoContext);
  return (
    <div className="w-full mt-5">
      {todos.map((el) => (
        <Todo key={el.id} {...el} />
      ))}
    </div>
  );
}
