import { useState} from "react";
function Button(){
    const [value, setValue] = useState(0);
    let count=value;
    const [text, settext] = useState("");
    const [table,settable] = useState(2);
    const arr = [];  
    return(
        
        <>
           
                <h1> value- {value}</h1>
                <h1>  Hello World - {text}
                </h1>
                <h1>table of 2 - {table}</h1>
                <button onClick={() =>{
                 count++;
                setValue(count);
                settext("My name is sonali");
                for(let i=1;i<=10;i++)
                {
                    arr[i]=` ${2*i} `;
                }
                settable(arr);
            }}>
               <h2>Click Me</h2> 
               
            </button>
            
        </>
        
    );
}
export default Button;