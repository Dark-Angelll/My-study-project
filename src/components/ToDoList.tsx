import "./App.css";
import { useState, type ChangeEventHandler } from "react";



export function ToDoList() {
    const [state, setState] = useState<string[]> ([]);
    const [input, setInput] = useState ('');
    const [search, setSearch] = useState ('');

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setInput(event.target.value);
        console.log(input)
    };
    const handleClick = () => {
        console.log(state, input)
        setState ([...state, input]);
        setInput ('');
    }

    const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setSearch(event.target.value)
    }

    return <>
    <input type = "text" value={search} onChange = {handleSearchChange}/>
    <input
        type = "text"
        value = {input}
        onChange = {handleChange}
    />
    <button onClick = {handleClick}>+</button>
    <ul>
        {state.filter (elem => {
            if (search === undefined) return true;
            return elem.includes(search)
        }).map((element) => {
            return <li>{element}</li>
        })}
    </ul>
    </>
}


export default ToDoList

