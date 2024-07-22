import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });
let filterCategories = CATEGORIES.filter(category => category !== "All")




function App() {
const [choosenCategory, setChoosenCategory] = useState("All")
const [tasks, setTasks] = useState(TASKS)

const handleCategorySelect = (category) => {
  setChoosenCategory(category)
}

const onTaskFormSubmit = (newTask) => {
  setTasks([...tasks, newTask])
}



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoryList={CATEGORIES} choosenCategory={choosenCategory} handleCategorySelect={handleCategorySelect} />
      <NewTaskForm categories={filterCategories} onTaskFormSubmit ={onTaskFormSubmit}/>
      <TaskList tasks={TASKS} choosenCategory={choosenCategory}/>
    </div>
  )
}

export default App;
