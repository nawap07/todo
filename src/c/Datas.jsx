import React, { useContext } from 'react'
import ReducerContext from './context'

const Datas = () => {
    const {user}=useContext(ReducerContext)

    if(!user) return <div className=""> Login Please...</div>
  return (
    <div> 
        My Name is {user.username}
    </div>
  )
}

export default Datas