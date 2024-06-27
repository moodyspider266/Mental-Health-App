import React, { useState } from 'react';
import "../components_styling/ToDoList.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDelete = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  const topThreeTasks = tasks.slice(0, 3);

  return (
    <div className='to-do-list'>
      <h2>To-Do List</h2>
      <ul>
        {(!topThreeTasks) ? (<h3>No tasks</h3>) : topThreeTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDelete(task)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ToDoList;