import React, { useState } from 'react'

const DemoState = () => {


    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count => count + 1)
        console.log(count)
    }
  return (
    <div>
      <h1>Demo using State {count}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default DemoState
