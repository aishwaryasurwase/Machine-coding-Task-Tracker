
import './App.css';
import React, { useState } from 'react';
import AddTask from './components/AddTask/AddTask';
import Header from './components/Header/Header'
import Tasks from './components/Tasks/Tasks';

const tasks = [
  { id: 1, name: 'complete udemy course', dayTime: '1st jan 2021, Thursday', reminder: false },
  { id: 2, name: 'Make a resume', dayTime: '1st jan 2021, Thursday', reminder: true },
  { id: 3, name: 'Prepare for low level design', dayTime: '1st jan 2021, Thursday', reminder: true },
  { id: 4, name: 'Solve DS problems', dayTime: '1st jan 2021, Thursday', reminder: false }
]

function App() {
  const [addTaskShow, setAddTaskShow] = useState(false);
  const [tasksList, setTasksList] = useState(tasks);

  const saveTask = (task) => {
    if (!task.name || !task.dayTime) {
      return;
    }
    task.id = Math.floor(Math.random() * 40);
    setTasksList([...tasksList, task])
  }

  const addTaskClicked = () => {
    setAddTaskShow(!addTaskShow)
  }

  const clickToggleTask = (id) => {
    const updatedTasks = tasksList.map((task) => task.id === id ? { ...task, reminder : !task.reminder } : task);
    setTasksList([...updatedTasks])
  }

  const onDeleteTask = (id) => {
    const updatedTasksLst = tasksList.filter((task) => task.id !== id);
    setTasksList(updatedTasksLst)
  }

  return (
    <div className="App"> 
      <Header addTaskClicked={addTaskClicked}/>
      {addTaskShow && <AddTask saveTask={saveTask} />}
      {tasksList.length > 0 ? <Tasks tasks={tasksList} toggleTask={clickToggleTask} onDeleteTask={onDeleteTask}/>: <h3>No Tasks Available</h3> }
    </div>
  );
}

export default App;
