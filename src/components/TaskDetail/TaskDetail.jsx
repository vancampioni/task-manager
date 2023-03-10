import React from 'react';

import "./TaskDetail.css"

const TaskDetail = ({ task, handleTaskClick }) => {
    return (
        <>
            <div className='task-container' style={task.completed ? {borderLeft: '6px solid palevioletred'} : {}}>
                <div className='task-title' onClick={() => handleTaskClick(task.id)}>
                    {task.title}
                </div>
            </div>
            {/* <div className='task-container'>
                {task.title}
            </div> */}
        </>
    )
}

export default TaskDetail;