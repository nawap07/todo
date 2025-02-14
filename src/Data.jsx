 import React, { useState } from 'react'
 
 const Data = () => {
    const[count,setCount]=useState(0);
    const addCount=()=>{
        if(count<20){
            setCount(count+1);
        }
    }

    const removeCount=()=>{
        if(count>0){
            setCount(count-1);
        }
    }
   return (
     <>
     <h1>Count:-  {count} </h1>
     <button onClick={addCount}>Add</button>
     <button onClick={removeCount}>Remove</button>
     </>
   )
 }
 
 export default Data