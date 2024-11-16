import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addTaskAction, deleteTaskAction } from './services/taskSlice';

const useTasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.task.tasks);

  const addTask = useCallback((task) => {
    if (task) {
      dispatch(addTaskAction(task));
    }
  }, [dispatch]);

  const deleteTask = useCallback((index) => {
    if (index >= 0 && index < tasks.length) {
      dispatch(deleteTaskAction(index));
    }
  }, [dispatch, tasks.length]);

  return {
    tasks,
    addTask,
    deleteTask,
  };
};

export default useTasks;