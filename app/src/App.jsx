import React, { useState } from 'react';
import Item from './components/item.jsx';
import './App.css'

function App() {
  const [tasks, setTasks] = React.useState([
    { id: 1, text: 'Learn React', completed: false },

  ]);

  const [newTask, setNewTask] = useState('');

  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function handleToggle(id) {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

   function handleAddTask(e) {
    e.preventDefault(); // prevent page reload on form submit

    if (newTask.trim() === '') return; // ignore empty tasks

    const newTaskObj = {
      id: Date.now(), // unique id based on timestamp
      text: newTask.trim(),
      completed: false,
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask(''); // clear input
  }




  return (
    <>
      <h1>To do List</h1>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>


      <ul>
        {tasks.map(task => (
          <Item
            key={task.id}
            text={task.text}
            completed={task.completed}
            onToggle={() => handleToggle(task.id)} 
            onDelete={() => handleDelete(task.id)} 
          />
        ))}
      </ul>
    </>
  )
}

export default App
