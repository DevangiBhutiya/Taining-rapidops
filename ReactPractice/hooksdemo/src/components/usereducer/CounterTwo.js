import React, { useReducer } from "react";

const initialstate = {
  firstcount: 0,
  secondcount: 10
};

const reducer = (state, action) => {
  console.log(state, action.value);
  switch (action.type) {
    case "increment":
      return { ...state, firstcount: state.firstcount + action.value };
    case "decrement":
      return { ...state, firstcount: state.firstcount - action.value };
    case "increment2":
        return {...state, secondcount: state.secondcount + action.value };
      case "decrement2":
        return {...state, secondcount: state.secondcount - action.value };
    case "reset":
      return initialstate;
    default:
      return state;
  }
};
const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <div>First Counter - {count.firstcount}</div>
      <div>Second Counter - {count.secondcount}</div>

      <h1>Counter using useReducer hook </h1>

      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        Increment2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement2      </button>
      <button onClick={() => dispatch({ type: "reset", value: initialstate })}>Reset</button>
    </div>
  );
};

export default CounterTwo;
