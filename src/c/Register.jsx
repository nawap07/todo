import React, { useContext, useState } from 'react'
import ReducerContext from './context';

const Register = () => {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
 const {setUser}=useContext(ReducerContext)
    function handleLogin(e){
        e.preventDefault();
        setUser({username,password})
    }

  return (
    <div> 
        <input type='text'  value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type='password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
<button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Register