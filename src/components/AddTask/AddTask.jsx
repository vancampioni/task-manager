import React, { useState } from 'react';
import Button from '../Button/Button';

import "./AddTask.css"

const AddTask = ({ handleTaskAdition }) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (event) => {
        setInputData(event.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAdition(inputData)
    }

    return (  
        <div className='add-task-container'>
            <input 
                onChange={handleInputChange} 
                value={inputData}
                className='add-task-input' 
                type="text" 
            />  
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>    
            </div>
        </div>
    );
}
 
export default AddTask;