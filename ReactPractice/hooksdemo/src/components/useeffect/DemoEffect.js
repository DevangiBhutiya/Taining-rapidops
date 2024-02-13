import React, { useEffect, useState } from 'react'

const DemoEffect = () => {

    const [count, setCount] = useState(0)
    useEffect(()=> {
        console.log("UseEffect render")

        return () =>  console.log("Unmount")
    },[])

    
    console.log("render")
  return (
    <div>
      <h2>UseEffect Demo - {count}</h2>
      <button onClick={() =>  setCount(count + 1)}>Click </button>
    </div>
  )
}

export default DemoEffect
    