import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() === "") return;
        setTasks(t => [...t, newTask]);
        setNewTask("");
    }

    function deleteTask(index) {
        setTasks(t => t.filter((_, i) => i !== index));
    }

    function moveTaskUp(index) {
        if (index === 0) return;
        setTasks(t => {
            const newTasks = [...t];
            [newTasks[index], newTasks[index - 1]] = [newTasks[index - 1], newTasks[index]];
            return newTasks;
        });
    }

    function moveTaskDown(index) {
        if (index === tasks.length - 1) return;
        setTasks(t => {
            const newTasks = [...t];
            [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
            return newTasks;
        });
    }

    return (
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button 
                    className="add-button" 
                    style={{ marginLeft: '10px' }} 
                    onClick={addTask}>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button 
                            className="delete-button" 
                            style={{ marginLeft: '10px' }}
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button 
                            className="move-button" 
                            style={{ marginLeft: '10px' }}
                            onClick={() => moveTaskUp(index)}>
                            👆
                        </button>
                        <button 
                            className="move-button" 
                            style={{ marginLeft: '10px' }}
                            onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList;
