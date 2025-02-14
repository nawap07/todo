import React, { useState } from 'react'
import ReducerContext from './context'

const ConteextP = ({children}) => {
    const[user,setUser]=useState(null);
  return (
    <ReducerContext.Provider value={{user,setUser}}> 
        {children}
    </ReducerContext.Provider>
  )
}

export default ConteextP