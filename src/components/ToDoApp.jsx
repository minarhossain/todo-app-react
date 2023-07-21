import React, { useState } from 'react';
import './ToDoApp.css';

const ToDoApp = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const handleInputChange = (event) => {
        setTask(event.target.value);
    }

    const addTask = (event) => {
        event.preventDefault();
        if (task.trim() === '') return;
        setTaskList([...taskList, task]);
        setTask('');
    }
    const removeTask = (index) => {
        const updatedTaskList = taskList.filter((_, i) => i !== index);
        setTaskList(updatedTaskList);
    }
    return (
        <div className="container">
            <h2 className='bold'>ToDo App </h2>
            <form onSubmit={addTask}>
                <input className="input-field" value={task} onChange={handleInputChange} type="text" placeholder="Enter Your New Task" />
                <button className="btn" type="submit">Add Task</button>
            </form>
            {/* <p>{task}</p> */}
            <ul>
                {
                    taskList.map((task, index) => (
                        <li key={index}>{task} <button className="btn-delete" onClick={() => removeTask(index)}>Delete</button></li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ToDoApp; <h2>ToDo App </h2>