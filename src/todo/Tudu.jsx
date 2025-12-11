import React, { useEffect, useState } from 'react'

const Tudu = () => {
    const [input, setInput] = useState("");
    const [data, setData] = useState(localStorage.getItem("baba") ? JSON.parse(localStorage.getItem("baba")) : []);
    const [edit, setEdit] = useState(null);
    const [toggle, setToggle] = useState(null);


    useEffect(() => {
        localStorage.setItem("baba", JSON.stringify(data))
    }, [data])
    const addTudu = () => {
        if (!input) {
            alert("Write Something")
        } else if (edit && toggle) {
            setData(
                data.map((user) => {
                    if (user.id === edit) {
                        return { ...user, name: input }
                    }
                    return user;
                })
            )
            setEdit(null)
            setToggle(false)
            setInput("")
        }
        else {
            const userData = {
                id: new Date().getTime().toString(),
                name: input
            }
            setData((prev) => [...prev, userData]);
            setInput("");
        }
    }

    const deleteTudu = (index) => {
        let deleteData = data.filter(user => user.id !== index);
        setData(deleteData)
    }

    const editTudu = (index) => {
        let editData = data.find((user) => user.id === index);
        setInput(editData.name);
        setEdit(index);
        setToggle(true)
    }
    return (
        <div>
            <h2>Add Todos</h2>
            <input type="text" placeholder='Add Todos' value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTudu}>Add</button>
            <div className="">{data.map((user) => (
                <div className="" style={{ backgroundColor: "pink", color: "white", margin: "5px" }} key={user.id}>
                    <p>{user.name}</p>
                    <span onClick={() => deleteTudu(user.id)}>Delete</span>
                    <br />
                    <span onClick={() => editTudu(user.id)}>Edit</span>
                </div>
            ))}</div>
        </div>
    )
}

export default Tudu