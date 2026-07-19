import { useState } from "react";
import "./App.css";

let nextId = 1;

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddTask(e) {
    e.preventDefault();

    const text = inputValue.trim();
    if (text === "") return;

    setTasks([...tasks, { id: nextId++, text, done: false }]);
    setInputValue("");
  }

  function handleToggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="card">
      <h1>タスクボード</h1>

      <form className="task-form" onSubmit={handleAddTask}>
        <input
          type="text"
          className="task-input"
          placeholder="新しいタスクを入力..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="btn">
          追加
        </button>
      </form>

      {tasks.length === 0 ? (
        <p className="empty-message">タスクはまだありません</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`task-item ${task.done ? "done" : ""}`}
            >
              <label className="task-label">
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => handleToggleTask(task.id)}
                />
                <span className="task-text">{task.text}</span>
              </label>
              <button
                type="button"
                className="delete-btn"
                onClick={() => handleDeleteTask(task.id)}
                aria-label="タスクを削除"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
