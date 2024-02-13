import React, { useState } from 'react'
import Input from './Input'

const Counter = () => {
    const [count, setCount] = useState(0)

const handleClick = () => {
    setCount((prev)=> prev + 1 )
}
  return (
    <div>
      {/* <h1>{count}</h1> */}
      <Input onClick = {handleClick} count = {setCount}/>
    </div>
  )
}

export default Counter
