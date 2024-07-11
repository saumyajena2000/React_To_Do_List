import React, { useState, useEffect } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() === "") return;
        const task = { text: newTask, completed: false };
        setTasks(t => [...t, task]);
        setNewTask("");
    }

    function deleteTask(index) {
        setTasks(t => t.filter((_, i) => i !== index));
    }

    function toggleTaskCompletion(index) {
        setTasks(t => 
            t.map((task, i) => 
                i === index ? { ...task, completed: !task.completed } : task
            )
        );
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

    function handleFilterChange(event) {
        setFilter(event.target.value);
    }

    const filteredTasks = tasks.filter(task => {
        if (filter === "all") return true;
        if (filter === "completed") return task.completed;
        if (filter === "incomplete") return !task.completed;
        return true;
    });

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
            <div>
                <label>
                    Filter: 
                    <select value={filter} onChange={handleFilterChange} style={{ marginLeft: '10px' }}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="incomplete">Incomplete</option>
                    </select>
                </label>
            </div>
            <ol>
                {filteredTasks.map((task, index) => 
                    <li key={index} className={task.completed ? "completed" : ""}>
                        <span className="text" onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
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
