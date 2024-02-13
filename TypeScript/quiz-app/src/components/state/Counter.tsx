import React, { useReducer } from 'react'


interface CounterProp {
    count: number
}

interface incdecProp {
    type: "increment" | "decrement"
    payload: number
}

interface resetProp {
    type: "reset"
}

type actionProp = incdecProp | resetProp


const initialState = {
    count: 0
}


const reducer = (state: CounterProp, action: actionProp) => {
    switch(action.type) {
        case "increment" :
            return {count: state.count + action.payload}
        case "decrement" :
            return {count: state.count - action.payload}
        case "reset" : return initialState
        default: 
        return state
    }
}




const Counter = () => {
const [state, dispatch] = useReducer(reducer, initialState)
console.log(state.count)

  return (
    <div>
        <h1>Counter: {state.count}</h1>

        <button onClick={() => dispatch({type: "increment" , payload: 10})}>Increment 10</button>
        <button onClick={() => dispatch({type: "decrement" , payload: 10})}>Increment 10</button>
        <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </div>
  )
}

export default Counter
