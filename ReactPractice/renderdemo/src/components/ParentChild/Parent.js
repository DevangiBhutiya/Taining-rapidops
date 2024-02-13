import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [count, setCount] = useState(0)

    console.log("Parent")
  return (
    <div>
        <p>{count}</p>
      <button onClick={() => setCount(c=> c + 1)}>Click me</button>
      <Child/>
    </div>
  )
}

export default Parent
