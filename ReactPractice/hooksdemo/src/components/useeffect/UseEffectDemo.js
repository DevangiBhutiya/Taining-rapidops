import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

  //if we passed second argument in array then it will say useeffect is run whenever this particular effect is changed 
  

    useEffect(() => {
        document.title = `You clicked ${count}`
        console.log("useeffect run")
    },[count])

    const handleClick = () => {
        setCount(count + 1)
    }
    // console.log(name)
  return ( 
    <div>  <br/>
        <input type='text' value={name} name = "name" onChange={(e) => setName(e.target.value)}></input> {" "}
        <button onClick={handleClick}>Click To Increase</button>
    </div>
  )
}

export default UseEffectDemo
