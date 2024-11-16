import React, { useState } from 'react';
import useTasks from './useTasks';

export function TodoListBuilder() {
  const { tasks, addTask, deleteTask } = useTasks();
  const [newTask, setNewTask] = useState('');

  const handleTaskActions = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };
  
  return (
    <div>
      <input
        aria-label="Set task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleTaskActions}>
        Add Task
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}