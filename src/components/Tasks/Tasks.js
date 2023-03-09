import React from "react";
import TaskDetail from "../TaskDetail/TaskDetail";

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map(task => (
            <TaskDetail task={task}/>))}
        </>
    )
};

export default Tasks;