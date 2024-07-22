import React from "react";

function Task({task, handleDeleteTask}) {
  const {text, category} = task;
  
  const deleteTask = () => {
    handleDeleteTask(task)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteTask}>X</button>
    </div>
  );
}

export default Task;
