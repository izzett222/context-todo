import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-[56px] leading-[1.21] text-gray-400 text-center">
          Todos
        </h1>
        <div className="min-w-[420px] w-[90%] sm:w-[60%] lg:w-[40%] flex flex-col items-center justify-center">
          <Form />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
