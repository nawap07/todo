 import React, { useCallback, useEffect, useRef, useState } from 'react'
 
 const PasswordGenerator = () => {
    const[length,setLength]=useState(8);
    const[number,setNumber]=useState(false);
    const[character,setCheracter]=useState(false);
    const[password,setPassword]=useState("");
   const passworRef=useRef(null)

    const copyPasswordData=useCallback(()=>{
        passworRef.current?.select();
        window.navigator.clipboard.writeText(password)
    },[password])
    const passwordGenerater=useCallback(()=>{
        let pass="";
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(number) str += "0987654321";
        if(character) str += "`~!@#$%^&*(){}[]";

        for(let i=1;i<=length;i++){
            let chr=Math.floor(Math.random() * str.length + 1);
            pass+= str.charAt(chr);
        }
        setPassword(pass);
    },[length,number,character,setPassword])

    useEffect(()=>{
        passwordGenerater();
    },[length,number,character,passwordGenerater]);
   return (
     <> 
     <div className="">
        <div className="">
            <input type="text" placeholder='Password' value={password} readOnly  ref={passworRef}/>
            <button onClick={copyPasswordData}>Copy</button>
        </div>
        <div className="">
            <input type="range" min={6} max={100} value={length} onChange={(e)=>setLength(e.target.value)} />
            <label>Length : {length}</label>
            <input type="checkbox" value={number} onChange={()=>setNumber(prv=>!prv)} />
            <label>Number</label>
            <input type="checkbox" value={character} onChange={()=>setCheracter(prv=>!prv)} />
            <label>Cheracter</label>
        </div>
     </div>
     
     </>
   )
 }
 
 export default PasswordGenerator