import React, { useState } from 'react'

const Bgchange = () => {
    const[color,setColor]=useState("red")
  return (
    <>
    <div style={{backgroundColor:color,width:"100vw", height:"100vh", display:'flex',justifyContent:'center'}}>
        <div style={{display:'flex',justifyContent:'center', background:'yellow' ,width:'800px',height:'50px',padding:'10px' , gap:'5px', marginTop:'50px' }}>
            <button style={{padding:'4px'}}
            onClick={()=>setColor('black')}
            >Black</button>
            <button style={{padding:'9px'}}
            onClick={()=>setColor('Pink')}
            >Pink</button>
            <button style={{padding:'4px'}}
            onClick={()=>setColor('blue')}
            >Blue</button>
            
        </div>
    </div>
    
    </>
  )
}

export default Bgchange