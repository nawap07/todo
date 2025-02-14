import React, { useContext, useState } from 'react'
import ContextProvider from './Context';

const Login = () => {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const {setUser}=useContext(ContextProvider)

    const HandleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password});
    }

  return (
    <div> 
        <form onSubmit={HandleSubmit}>
            <input type="text" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Login