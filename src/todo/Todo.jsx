import React, { useEffect, useState } from 'react'
import Todos from './Todos';

const getLocalData = () => {
    let lists = localStorage.getItem("baba");
    if (lists) {
        return JSON.parse(lists)
    } else {
        return [];
    }
}
const Todo = () => {
    const [input, setInput] = useState("");
    const [edit, setEdit] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState(getLocalData());

    useEffect(() => {
        localStorage.setItem("baba", JSON.stringify(data))
    }, [data])
    const addTodo = (e) => {
        e.preventDefault();
        if (!input) {
            alert("Please Write Something")
        } else if (toggle && edit) {
            setData(
                data.map((value) => {
                    if (value.id === edit) {
                        return { ...value, name: input }
                    }
                    return value;
                })
            )
            setEdit(null);
            setInput("");
            setToggle(false)
        }
        else {
            const userData = {
                id: new Date().getTime().toString(),
                name: input
            }
            setData([...data, userData]);
            setInput("")
        }
    }

    function handleRemove(index) {
        let removedata = data.filter((value) => value.id !== index);
        setData(removedata);
    }

    function handleEdit(index) {
        let editData = data.find((value) => value.id === index);
        setEdit(index);
        setInput(editData.name)
        setToggle(true)
    }
    return (
        <div>
            <Todos/>
            <h2>Add Todo</h2>
            <form onSubmit={addTodo}>
                <input type="text" placeholder='Add Task ... ' value={input} onChange={(e) => setInput(e.target.value)} />
                {toggle ? <button>Edit</button> : <button>Add</button>}
            </form>
            {
                data && data.map((value) => (
                    <div className="" key={value.id} style={{ display: "flex", gap: "10px" }}>
                        <p>{value.name}</p>
                        <p onClick={() => handleRemove(value.id)}>x</p>
                        <p onClick={() => handleEdit(value.id)}>Edit</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Todo