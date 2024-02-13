import React, { useEffect, useRef, useState } from 'react'

const CounterDemo = () => {
  const [count, setCount] = useState(0)
    const totalRef = useRef(0)
    console.log(totalRef)
    
const incrementCount = () => {
  setCount((prevCount) => prevCount + 1);
  totalRef.current += 1;
  
}

const decrement = () => {
  setCount((prevCount) =>  prevCount - 1)
  
}
  return (
    <div>
      <h1>Ref example</h1>
      <p>Current Count: {count}</p>
      <p>Total Count (Preserved): {totalRef.current}</p>
      <button onClick={incrementCount}>Increment</button>
      {/* <button onClick={handleClick}>click me</button> */}
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default CounterDemo
