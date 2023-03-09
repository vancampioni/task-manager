import React from 'react';

import "./TaskDetail.css"

const TaskDetail = ({ task }) => {
    return (
        <>
            <div className='task-container'>
                {task.title}
            </div>
        </>
    )
}

export default TaskDetail;