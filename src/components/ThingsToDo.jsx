import { useState } from "react"
//import { useLongPress } from 'use-long-press';
//import { useEffect } from "react";



export default function ThingsToDo() {
    const [todos, setTodos] = useState([]);
    const [newToDo, setNewToDo] = useState('');
    const [time, setTime] = useState('');




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
            <div className="bg-pink-100 p-10  m-20">
                <h1 className="text-blue-900 font-bold text-center text-2xl ml-20 mb-4 p-2.5 ">THINGS TO DO</h1>
                <div className="text-lg ml-70 place-items-center">
                    <input className="place-items-center mr-30" type="text" placeholder="Add New" value={newToDo} onChange={handleInputChange} />
                    <button onClick={addToDo} className="bg-yellow-500 ml-4 border rounded px-1.5">+</button>

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