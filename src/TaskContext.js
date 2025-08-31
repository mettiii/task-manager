import React, { createContext, useReducer } from 'react';

const TaskContext = createContext();

const initialState = {
  tasks: [],
};

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return { tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }] };
    case 'TOGGLE_TASK':
      return {
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case 'REMOVE_TASK':
      return { tasks: state.tasks.filter(task => task.id !== action.payload) };
    default:
      return state;
  }
}

function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };