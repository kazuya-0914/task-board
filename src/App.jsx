import { useState } from 'react'
import './App.css'

let nextId = 1

export default function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  function addTask() {
    const text = input.trim()
    if (!text) return
    setTasks([...tasks, { id: nextId++, text, done: false }])
    setInput('')
  }

  function toggleTask(id) {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  function deleteTask(id) {
    setTasks(tasks.filter(t => t.id !== id))
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') addTask()
  }

  return (
    <div className="container">
      <h1 className="title">Task Board</h1>

      <div className="input-row">
        <input
          className="task-input"
          type="text"
          placeholder="タスクを入力..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="add-button" onClick={addTask}>追加</button>
      </div>

      <ul className="task-list">
        {tasks.length === 0 && (
          <li className="empty">タスクはありません</li>
        )}
        {tasks.map(task => (
          <li key={task.id} className={`task-item${task.done ? ' done' : ''}`}>
            <input
              type="checkbox"
              className="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            <span className="task-text">{task.text}</span>
            <button
              className="delete-button"
              onClick={() => deleteTask(task.id)}
              aria-label="削除"
            >
              ×
            </button>
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <p className="summary">
          {tasks.filter(t => t.done).length} / {tasks.length} 件完了
        </p>
      )}
    </div>
  )
}
