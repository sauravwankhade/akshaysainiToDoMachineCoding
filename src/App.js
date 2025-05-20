import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addToDoItem = () => {
    if (input.trim() === "") return;
    const item = {
      id: todoList.length + 1,
      text: input.trim(),
      completed: false,
    };

    setTodoList((prev) => [...prev, item]);
    setInput("");
  };

  const toggleCompleted = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      })
    );
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter To do"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addToDoItem}>Add</button>

      <ul>
        {todoList.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleCompleted(t.id)}
            />
            <span className={t.completed ? "strikeThrough" : ""}>{t.text}</span>
            <button onClick={() => deleteTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
