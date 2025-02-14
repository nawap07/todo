import React, { useContext } from 'react'
import ContextProvider from './Context'

const Profile = () => {
    const {user}=useContext(ContextProvider);
  
    if(!user) return <div className="">Login Please</div>

    return <div className="">User:{user.username}</div>
}

export default Profile