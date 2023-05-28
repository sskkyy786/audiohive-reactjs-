import { useState } from "react"
//import { useLongPress } from 'use-long-press';
//import { useEffect } from "react";



export default function ThingsToDo() {
    const [todos, setTodos] = useState([]);
    const [newToDo, setNewToDo] = useState('');
    const [time , setTime] = useState('');

    
    

    function addToDo() {

        if (newToDo.trim() !== '') {
            setTime(new Date().toISOString());
            const todo = { timeStamp: time, text: newToDo };
            setTodos([...todos, todo]);
            setNewToDo('');
        }
    };

    function handleInputChange(e) {
        setNewToDo(e.target.value)
    }

    

    return (
        <>
            <div className="heading">
                <h1 className="mainheading">THINGS TO DO</h1>
                <div className="maininput">
                    <input className="maininputt" type="text" placeholder="Add New" value={newToDo} onChange={handleInputChange} />
                    <button onClick={addToDo}>add</button>

                    <div>
                    {todos.map((todo) => (
                            <div key={todo.timeStamp} >
                                <input type="checkbox" />
                                {todo.text}
                            </div>
                        ))}
                    </div>
                       
                    

                </div>

            </div>
        </>
    )
}