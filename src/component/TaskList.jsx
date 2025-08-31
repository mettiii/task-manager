import React, { useContext } from "react";
import { TaskContext } from "../TaskContext";
import { Button } from "@mui/material";

function TaskList() {
  const { state, dispatch } = useContext(TaskContext);

  return (
    <ul>
      {state.tasks.map((task) => (
        <li key={task.id}>
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
          </span>
          <Button
            className="btn"
            onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
          >
            {task.completed ? "Undo" : "Complete"}
          </Button>
          <Button
            className="btn"
            onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}
          >
            Remove
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
