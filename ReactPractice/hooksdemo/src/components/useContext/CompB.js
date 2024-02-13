import React, { useContext, useState } from 'react'
import { countContext } from '../../context/CounterContext';

const CompB = () => {
  const {count, dispatch} =  useContext(countContext)
  // console.log(countCont)
  return (
    <div>

        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  )
}

export default CompB
