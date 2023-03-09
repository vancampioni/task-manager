import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import Tasks from "./components/Tasks/Tasks";
import AddTask from "./components/AddTask/AddTask";
import "./App.css"

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    }
  ]);

  const handleTaskAdition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }];

    setTasks(newTasks);
  };  

  return (
    <>
      <div className="container">
        <AddTask handleTaskAdition={handleTaskAdition} />
        <Tasks tasks={tasks}/>
      </div>
    </>
  )
};

export default App;