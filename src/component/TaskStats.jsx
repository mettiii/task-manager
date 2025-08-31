import React, { useContext } from "react";
import { TaskContext } from "../TaskContext";
function TaskStats() {
  const { state } = useContext(TaskContext);
  const completedCount = state.tasks.filter((task) => task.completed).length;
  const pendingCount = state.tasks.length - completedCount;

  return (
    <div>
      <p>Pending tasks: {pendingCount}</p>
      <p>Completed tasks: {completedCount}</p>
    </div>
  );
}

export default TaskStats;
