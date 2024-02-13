import React, { useEffect, useRef, useState } from 'react'

const HookTimer = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(()=> {
       intervalRef.current = setInterval(()=> {
            setTimer((prev)=> prev + 1)
        },1000)

        return () => clearInterval(intervalRef.current)
    },[])
  return (
    <div>
      <h1>Timer using useRef hook</h1>
        <h2>{timer}</h2>
        <button onClick={()=> clearInterval(intervalRef.current )}>Clear Timer</button>
    </div>
  )
}

export default HookTimer
