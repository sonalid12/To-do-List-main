import React from "react";
import { useState } from "react";
import './Table.css';
import '../Button.css';
 function Input(){
    const[value, setValue] = useState();
    const[display, setDisplay] = useState(false);
    const [table,settable] = useState([]);
    console.log('table - ', table);
    const handleInputchange = (e) => {
        setValue(e.target.value);
        setDisplay(false);

    }

    const handleOnClick = () => {
        setDisplay(true);
    }

    const handleTable = () =>{
        for(let i=1;i<=10;i++)
                {
                    arr[i]=` ${value*i} `;
                }
                settable(arr);
    }
    const arr = []; 
    return(
        <div className="text-center">
            <input type='text' placeholder='Enter name' onChange={handleInputchange} />
            <button type="submit" onClick={() => { handleOnClick(); handleTable(); }}>Submit</button>
            <h3>{display ? value : ''}</h3>
            <div className='temp'>
                <h1>Hello World</h1>
            <table>
                {
                    table.map((v,i) => (
                        <tr>
                            <td>
                                {i}*{v}
                            </td>
                            <td>{v}</td>
                        </tr>
                    )
                    )
                }
            </table>
            </div>
        </div>
    );
 }

 export default Input