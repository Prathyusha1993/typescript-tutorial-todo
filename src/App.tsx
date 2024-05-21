import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/todoModel";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [task, setTask] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTask([...task, { id: Date.now(), todo: todo, isDone: false }]);
    }
    setTodo("");
  };
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList task={task} setTask={setTask}/>
      {task.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
};

export default App;
