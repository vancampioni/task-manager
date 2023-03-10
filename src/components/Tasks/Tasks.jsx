import React from "react";
import TaskDetail from "../TaskDetail/TaskDetail";

const Tasks = ({ tasks, handleTaskClick }) => {
    return (
        <>
            {tasks.map(task => (
            <TaskDetail task={task} handleTaskClick={handleTaskClick}/>))}
        </>
    )
};

export default Tasks;