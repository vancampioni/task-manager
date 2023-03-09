import React, { useState } from "react";
import Tasks from "./components/Tasks/Tasks";

import "./App.css"
import AddTask from "./components/AddTask/AddTask";

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
      id: Math.random(10),
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