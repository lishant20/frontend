import React, {useState} from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat food", "Running"]);
    const [newTask, setNewTask] = useState("");

    function addTask() {

        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
            setNewTask("");
        }
        
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }   

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function moveUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks,];
            [updatedTasks[index], updatedTasks[index-1]] = 
            [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveDown(index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks,];
            [updatedTasks[index], updatedTasks[index+1]] = 
            [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return(
        <div className='to-do-list'>
            <h1>To Do List</h1>
            <input type='text' placeholder='Enter the list'
            value={newTask} onChange={handleInputChange}/>
            <button
            className="add-button"
            onClick={addTask}>ADD</button>
            <ol>
                {tasks.map((task, index) => 
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className="delete-button"
                    onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button className="move-button"
                    onClick={() => moveUp(index)}>
                        Up
                    </button>
                    <button className="move-button"
                    onClick={() => moveDown(index)}>
                        Down
                    </button>
                </li>)}
                
            </ol>
        </div>
    )
}

export default ToDoList;