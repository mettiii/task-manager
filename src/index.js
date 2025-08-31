import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TaskProvider } from "./TaskContext"; // Adjust the import path as necessary

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
);
