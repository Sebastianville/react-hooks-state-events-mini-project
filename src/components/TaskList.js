import Task from "./Task";
import { useState } from "react";

function TaskList({ tasks, choosenCategory }) {
  const [tasksList, SetTaskList] = useState(tasks)
 
  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasksList.filter((task) => task !== taskToDelete);
    SetTaskList(updatedTasks)
  };

  const filteredTasks = tasksList.filter((task) => {
    choosenCategory === "All" || task.category === choosenCategory
  })
 
  return (
  <div className="tasks">
      {filteredTasks.map((task, index) => (
        <Task key={index} task={task} handleDeleteTask={handleDeleteTask} />
      ))}
    </div>
  )
}
export default TaskList;