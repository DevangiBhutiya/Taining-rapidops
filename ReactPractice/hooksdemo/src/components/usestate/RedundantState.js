import React, { useState } from 'react'

const RedundantState = () => {

    const [name, setName] = useState({
        firstName: "",
        lastName: "",
    })

    const handleChange = (e) => {
        setName({...name, [e.target.name]: e.target.value})
    }

 
    //If a variable is show during rednering then it will not store an state variable you can follow this simple method to show during run time 
    const fullname = `${name.firstName } ${name.lastName}`
  return (
    <div>
    <h1>Choosing the state structure</h1>
    <label>First name: </label>
    <input name = "firstName" placeholder='First name' value={name.firstName} onChange={(e) =>  handleChange(e)} /> <br/>
    <label>Last name: </label>
    <input name = "lastName"  placeholder='Lastname' value={name.lastName} onChange={(e) =>  handleChange(e)}/>
    <p> your name is {fullname}</p>
    </div>
  )
}

export default RedundantState
