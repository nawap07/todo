 import React, { useEffect, useState } from 'react'
 
 const  localDatas=()=>{
  const lists=localStorage.getItem("Datas");
  if(lists){
    return JSON.parse(lists);
  }else{
    return [];
  }
 }
 const App = () => {
  const[data,setData]=useState(localDatas());
  const[input,setInputes]=useState("")
  const[edit,setEdit]=useState("");
  const[toggle,setToggle]=useState(false);

  useEffect(()=>{
    localStorage.setItem("Datas",JSON.stringify(data));
  },[data])

  const addData=(e)=>{
    e.preventDefault();
    if(!input){
      alert("Please fill the data....");
    }
    else if(toggle && edit){
      setData(
        data.map((value)=>{
          if(value.id === edit){
            return {...value,name:input}
          }
          return value;
        })
      )
      setEdit(null);
      setInputes("");
      setToggle(false);
    }
    else{
      let userData={
        id:new Date().getTime().toString(),
        name:input
      }
      setData([...data,userData]);
      setInputes("");
    }
  }

  const deleteBtn=(index)=>{
const deleteData=data.filter((value)=>{
  return value.id !== index;
})
setData(deleteData);
  }

  const editBtn=(index)=>{
    const editDatas=data.find((value)=>{
      return value.id === index;
    })
    setInputes(editDatas.name);
    setToggle(true);
    setEdit(index);

  }
   return (
     <div> 
      <h2>Todo List</h2>
      <form>
        <input type="text" placeholder='Please fill the data...'  value={input} onChange={(e)=>setInputes(e.target.value)}/>
        <button onClick={addData}>Add</button>
      </form>
      <div className="">
        {
          data.map((value)=>(
            <ul key={value.id}>
              <li> <h3 style={{display:"inline"}}> {value.name}</h3></li>
              <button onClick={()=>editBtn(value.id)}>Edit</button>
              <button onClick={()=>deleteBtn(value.id)}>Delete</button>

            </ul>
          ))
        }
      </div>
     </div>
   )
 }
 
 export default App