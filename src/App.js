import {useState} from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function App() {
  const [todos, setTodos] = useState([
    {id: 1, text: "Finish this program.", done: false },
    {id: 2, text: "Drink a cup of water.", done: true}
  ])

  const addTodo = (text) => {
    const newTodo = {id: Date.now(), text, done: false }
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  const removeTodo = (todo) => {
    setTodos(todos.filter(t => t !== todo));
    console.log("removeTodo")
  }

  return (
    <div className="App">
      <h2>Todo list</h2>
      <AddTodo addTodo={addTodo} />
      <TodoList removeTodo={removeTodo} todos={todos} />
    </div>
  );
}

export default App;
