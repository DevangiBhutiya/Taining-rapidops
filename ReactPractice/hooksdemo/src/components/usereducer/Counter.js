import React, { useReducer } from 'react'



const initialstate = 0

const reducer = (state, action) => {
    console.log(action)
    switch(action) {
        case "increment" :
            return state + 1
        case "decrement" :
            return state - 1;
        case "reset" :
            return initialstate
        default:
            return state
    }
 
}
const Counter = () => {
    const btn = ["Increment", "Decrement", "Reset"]

    const [count, dispatch] = useReducer(reducer, initialstate)
  return (
    <div>
        <div>
            Count - {count}
        </div>
      <h1>Counter using useReducer hook </h1>
     
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  )
}

export default Counter
