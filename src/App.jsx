import { useState, useEffect } from 'react'
import './App.css'

const STORAGE_KEY = 'task-board-tasks'

function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export default function App() {
  const [tasks, setTasks] = useState(loadTasks)
  const [input, setInput] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  function addTask() {
    const text = input.trim()
    if (!text) return
    const maxId = tasks.reduce((m, t) => Math.max(m, t.id), 0)
    setTasks([...tasks, { id: maxId + 1, text, done: false }])
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
