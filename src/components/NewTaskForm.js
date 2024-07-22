
import React, { useState } from "react";



function NewTaskForm({ categories, onTaskFormSubmit }) {


 const [text, setText] = useState("")
 const [changeCategory, setChangeCategory] = useState("")

 const handleSubmit = (e) => {
  e.preventDefault();
  onTaskFormSubmit({text, changeCategory});
  setText("");
  setChangeCategory("")


 };
 let categoryDisplay = categories.map((category) => <option value={category} key={category}>{category}</option>)

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={changeCategory} onChange={(e) => setChangeCategory(e.target.value)}>
         {categoryDisplay}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
