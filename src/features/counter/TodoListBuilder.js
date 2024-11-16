import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTaskAction, deleteTaskAction } from './taskSlice';

export function TodoListBuilder() {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(addTaskAction(newTask));
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTaskAction(index));
  };

  return (
    <div>
      <input
        aria-label="Set task"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>
        Add Task
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button> {}
          </li>
        ))}
      </ul>
    </div>
  );
}