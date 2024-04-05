import { useState } from "react";
import "./App.css";
import TodoField from "./components/TodoField";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "gym",
      status: false,
    },
    {
      id: 2,
      name: "Supermarket",
      status: true,
    },
  ]);

  const addTodo = (todo) => {
    if (todo.name) {
      setTodos([...todos, todo]);
    }
  };

 
  const deleteTodo=(id)=>{
   let newTodos=todos.filter((todo)=> todo.id !== id);
   setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>todos</h1>
      <TodoField addTodo={addTodo} />
      <Todos deleteTodo={deleteTodo} todos={todos} />
    </div>
  );
}

export default App;
