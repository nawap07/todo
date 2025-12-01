import React, { useEffect, useState } from 'react'

const Todos = () => {
    const [input, setInput] = useState("");
    const [data, setData] = useState(localStorage.getItem("pk") ? JSON.parse(localStorage.getItem("pk")) : []);
    const [edit, setEdit] = useState(null)
    const [toggle, setToggle] = useState(null)


    useEffect(() => {
        localStorage.setItem("pk", JSON.stringify(data))
    }, [data])

    const handleTodo = (e) => {
        e.preventDefault();
        if (!input) {
            alert("Write Something");
        } else if (edit && toggle) {
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
            let userData = {
                id: new Date().getTime().toString(),
                name: input
            }
            setData((prev) => [...prev, userData])
            setInput("");
        }
    }

    function editTodo(index) {
        let editData = data.find((value) => value.id === index);
        setInput(editData.name);
        setEdit(index);
        setToggle(true)
    }

    function deleteTodo(index) {
        let deletedata = data.filter((value) => value.id !== index);
        setData(deletedata)
    }

    return (
        <div>
            <form onSubmit={handleTodo}>
                <input required type="text" placeholder='Add Todo..' value={input} onChange={(e) => setInput(e.target.value)} />
                <button>ADD</button>
            </form>
            <div className="">
                {
                    data && data.map((value) => (
                        <div className="" key={value.id}>
                            <p>{value.name}</p>
                            <p onClick={() => editTodo(value.id)}>Edit</p>
                            <p onClick={() => deleteTodo(value.id)}>Delete</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Todos