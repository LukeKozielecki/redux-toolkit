import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      if (action.payload) {
        state.tasks.push(action.payload);
      }
    },
    deleteTask: (state, action) => {
      state.tasks.splice(action.payload, 1);
    },
  },
});

export const { addTask: addTaskAction, deleteTask: deleteTaskAction } = taskSlice.actions;
export default taskSlice.reducer;