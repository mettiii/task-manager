import React, { useContext } from "react";
import { TaskContext } from "./TaskContext"; // Adjust the path as necessary
import Header from "./component/Header";
import Footer from "./component/Footer";
import TaskList from "./component/TaskList";
import TaskInput from "./component/TaskInput";
function App() {
  const { state, dispatch } = useContext(TaskContext);

  const addTask = (taskText) => {
    dispatch({ type: "ADD_TASK", payload: taskText });
  };

  const toggleTaskCompletion = (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  const deleteTask = (id) => {
    dispatch({ type: "REMOVE_TASK", payload: id });
  };

  return (
    <div>
      <Header />
      <TaskInput />
      <TaskList
        tasks={state.tasks}
        addTask={addTask}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
      <Footer />
    </div>
  );
}

export default App;
