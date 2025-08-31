import React, { useRef, useContext } from "react";
import { TaskContext } from "../TaskContext";
import { Button } from "@mui/material";

function TaskInput() {
  const { dispatch } = useContext(TaskContext);
  const inputRef = useRef();

  const addTask = () => {
    const taskText = inputRef.current.value.trim();
    if (taskText) {
      dispatch({ type: "ADD_TASK", payload: taskText });
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Add a task" />
      <Button className="btn" variant="contained" onClick={addTask}>
        Add Task
      </Button>
    </div>
  );
}

export default TaskInput;
