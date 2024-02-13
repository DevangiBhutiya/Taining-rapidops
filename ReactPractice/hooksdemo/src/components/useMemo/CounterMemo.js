import React, { useMemo, useState } from 'react'

const CounterMemo = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const incr1 = () => {
        setCount1(count1 + 1)
    }
    const incr2 = () => {
        setCount2(count2 + 1)
    }
    const isEven = useMemo(() => {
        // debugger
        let i = 0;
        while(i<2000000000) i++
        return count1 % 2 === 0
    },[count1])


    console.log(isEven)

  return (
    <div>
        {}
      <h1>Counter using useMemo hook</h1>
      <button onClick={incr1}>Count 1 - {count1}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={incr2}>Count 2- {count2} </button>
    </div>
  )
}

export default CounterMemo
