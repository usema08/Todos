import { useState } from "react";
import "./index.css";


function generateId(){
    return Math.floor(Math.random() * 100);
}

function Todos(){
    const [todos,settodos] = useState([]);
    const [input, setinput] = useState("");

    const handleSubmit =() => {
        settodos((todos) => 
            todos.concat({
                text:input,
                id: generateId()
            })
        )
        setinput("");
    }
    const removeTodo = (id) => 
        settodos((todos) => todos.filter((t) => t.id !== id))
    
    return(
    
        <div className="container">
            <input type="text" value={input} 
            onChange={(e) => setinput(e.target.value)}
            placeholder="New-Todo"></input>

            <button onClick={handleSubmit}>Submit</button>

            <ul className="todos-list">
                {todos.map(({text, id}) => (
                    <li key={id} className="todos">
                        <span>{text}</span>
                        <button className="close" 
                        onClick={() => removeTodo(id)}>X</button>
                    </li>
                    
                ))}
            </ul>
        </div>
    
    ); 
}

export default Todos;