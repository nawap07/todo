import React, { useState } from 'react'
import ContextProvider from './Context'
const ContextProvier = ({children}) => {
    const[user,setUser]=useState(null);
  return (
    <ContextProvider.Provider value={{ user , setUser}}>
        {children}
    </ContextProvider.Provider>
  )
}

export default ContextProvier