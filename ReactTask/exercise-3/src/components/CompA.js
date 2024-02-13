import React, { useContext, useState } from 'react'
import { NameContext } from '../context/UserContext'

export default function CompA () {
    const [fullname, setFullName] = useState("Devangi")
    
  return (
    <>
    <h1>{fullname}</h1>
    <NameContext.Provider value={{fullname, setFullName}}>
        <CompD />
    </NameContext.Provider>
    </>        
  )
}
const CompB = () => {
  return (
    <div>
      
    </div>
  )
}

const CompC = () => {
    return (
      <div>
        
      </div>
    )
  }
  
const CompD = () => {
    const {fullname,setFullName}= useContext(NameContext)
    const handleClick = ()=> {
        setFullName("Rya thani")
    }
    return (
      <div>
        <button onClick={()=>  handleClick()}>change username</button>
      </div>
    )
  }
  


