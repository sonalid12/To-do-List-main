import React from "react";
import { useState } from "react";
import Button from "./Button";
import './Todo.css';
// import DeleteIcon from '@mui/icons-material/Delete';

const arr = [];    

function Todo(){
    const[value, setValue] = useState();
    const[display, setDisplay] = useState(false);
    const [arr, setArr] = useState([])

    const handleInputchange = (e) => {
        setValue(e.target.value);
        setDisplay(false);

    }
    const handleOnClick = () => {
        arr.push(value);
        setDisplay(true);
    }
   
    return(
        <div className="container-fluid">
            <h1>To Do List</h1>
            <div className="temp">
        <input type="text" placeholder="Enter Task" onChange={handleInputchange}></input>
        <button type="submit" onClick={() => { handleOnClick();}}>Submit</button>
        {/* <h3>{display ? value : ''}</h3> */}
        <div className="task">
        <ul>
            {
        arr.map((v,i) => (
            <li>{v}
            <button type="submit" onClick={() => {
                const newArr = [...arr]; 
                newArr.splice(i, 1);
                
                setArr(newArr);
                
            }}>Delete</button>
            </li>
        ))
          }
        </ul>
        </div>
        </div>
        </div>
    );
} 
export default Todo