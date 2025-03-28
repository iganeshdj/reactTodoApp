import "./styles.css";
import InputContainer from "./components/InputContainer.jsx";
import TodoContainer from "./components/TodoContainer.jsx";
import { useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal != "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal("");
    }
  }

  function delTodo(index) {
    setTodos((prevTodos) => prevTodos.filter((todo, i) => i !== index));
  }
  console.log(todos);

  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />

      <TodoContainer todos={todos} delTodo={delTodo} />
    </main>
  );
}

export default App;
