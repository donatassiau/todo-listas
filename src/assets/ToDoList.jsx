import { useState } from "react";

const ToDoList = () => {

const [tasks, setTasks] = useState(["Isplauti indus", "Pasidaryti valgyti", "Nenumirti"]);
const [newTask, setNewTask] = useState("");

function handleInputChange(event) {
    console.log(event.target.value);
}
    function addTask() {
        
    }
    function deleteTask(index) {
        
    }

    function moveTaskUp(index) {
        
    }

    function moveTaskDown(index) {
        
    }
    return <>
    <h1>To-Do-List</h1>
    

    <div>
        <input type="text" placeholder="Enter A task" value={newTask}  onChange={handleInputChange}/>
        <button className="add-button" onClick={addTask}>ADD</button>
    </div>

<ul>
    {
        tasks.map((task, index) => 
            <li key={index} >
                <span className="text">{task}</span>
                <button className="delete-button" onClick={()=>deleteTask}>Delete</button>
                <button className="move-button" onClick={()=>moveTaskDown}>moveUp</button>
                <button className="move-button">moveDown</button>
            </li>
            )      
    }
</ul>

</>

};


export default ToDoList